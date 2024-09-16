/** @format */

import React from "react";
import { useState } from "react";

const initialCustomers = [
  {
    id: 1,
    name: "Ehsan",
    phone: "0790234314",
    address: "AFG, Herat",
    balance: 125000,
  },
  {
    id: 2,
    name: "Neman",
    phone: "0790230000",
    address: "AFG, Herat",
    balance: 112000,
  },
  {
    id: 3,
    name: "Naqib",
    phone: "0790239999",
    address: "AFG, Herat",
    balance: 111000,
  },
];
export default function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isActionOpen, setIsActionOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [actionType, setActionType] = useState("");

  function handleAddCustomer(customer) {
    setCustomers((customers) => [...customers, customer]);
  }
  function handleSelectedCustomer(customer) {
    setSelectedCustomer(customer);
  }

  function handleInfoOpen() {
    setIsInfoOpen((is) => !is);
  }
  function handleActionOpen(type) {
    setIsActionOpen((is) => !is);
    setActionType(type);
  }
  function handleActionAmount(value) {
    if (actionType === "Deposit") {
      setCustomers((customers) =>
        customers.map((customer) =>
          customer.id === selectedCustomer.id
            ? { ...customer, balance: customer.balance + value } // Add value to balance
            : customer
        )
      );
    } else if (actionType === "Withdraw") {
      if (value < selectedCustomer.balance) {
        setCustomers((customers) =>
          customers.map((customer) =>
            customer.id === selectedCustomer.id
              ? { ...customer, balance: customer.balance - value } // Subtract value from balance
              : customer
          )
        );
      } else {
        alert(
          "Insufficent Balance! You need " +
            (value - selectedCustomer.balance) +
            " more Afghanis😊"
        );
      }
    }
  }

  return (
    <div className="body">
      {isInfoOpen ? (
        <></>
      ) : (
        <>
          <Customer_form handleAddCustomer={handleAddCustomer}></Customer_form>
          <Customer_list
            customers={customers}
            handleInfoOpen={handleInfoOpen}
            handleSelectedCustomer={handleSelectedCustomer}></Customer_list>
        </>
      )}
      {isInfoOpen ? (
        <>
          <Customer_info
            handleActionOpen={handleActionOpen}
            handleInfoOpen={handleInfoOpen}
            customers={customers}
            selectedCustomer={selectedCustomer}></Customer_info>
          {isActionOpen ? (
            <Action_modal
              handleActionAmount={handleActionAmount}
              actionType={actionType}
              handleActionOpen={handleActionOpen}
              handleInfoOpen={handleInfoOpen}
              selectedCustomer={selectedCustomer}></Action_modal>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

function Customer_form({ handleAddCustomer }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !phone || !address || !balance) return;
    const id = crypto.randomUUID();
    const newCustomer = {
      id,
      name,
      phone,
      address,
      balance,
    };
    handleAddCustomer(newCustomer);
    setName("");
    setPhone("");
    setAddress("");
    setBalance("");
  }
  return (
    <div className="customer-form">
      <form onSubmit={handleSubmit}>
        <h5>Add Customer</h5>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Balance</label>
        <input
          type="text"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
        />

        <button className="save-btn">Add</button>
      </form>
    </div>
  );
}

function Customer_list({ customers, handleInfoOpen, handleSelectedCustomer }) {
  let num = 1;
  return (
    <div className="list">
      <table>
        <tr className="table-heading">
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Balance</th>
          <th>Action</th>
        </tr>
      </table>
      <div className="customer-table">
        <table>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{num++}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.balance} AFs</td>
              <td>
                <button
                  className="select-customer-btn"
                  onClick={() => {
                    handleInfoOpen();
                    handleSelectedCustomer(customer);
                  }}>
                  Select
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

function Customer_info({ handleInfoOpen, selectedCustomer, handleActionOpen }) {
  return selectedCustomer ? (
    <>
      <div className="customer_info">
        <h5>
          <span>👤</span> {selectedCustomer.name}
        </h5>
        <button className="close-info-btn" onClick={handleInfoOpen}>
          ❌
        </button>
        <div className="customer_data">
          <div className="phone">
            <p>PHONE</p>
            <p>{selectedCustomer.phone}</p>
          </div>
          <div className="address">
            <p>ADDRESS</p>
            <p>{selectedCustomer.address}</p>
          </div>
          <div className="balance">
            <p>BALANCE</p>
            <p>{selectedCustomer.balance} AFs</p>
          </div>
          <div>
            <button
              className="btn-deposit"
              onClick={() => handleActionOpen("Deposit")}>
              Deposit
            </button>
            <button
              className="btn-withdraw"
              onClick={() => handleActionOpen("Withdraw")}>
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

function Action_modal({
  handleActionOpen,
  handleInfoOpen,
  selectedCustomer,
  actionType,
  handleActionAmount,
}) {
  const [actionAmount, setActionAmount] = useState("");

  function handleOk(e) {
    e.preventDefault();
    handleActionAmount(actionAmount); // Pass the amount as a number
    handleActionOpen();
    handleInfoOpen();
  }

  return (
    <form className="actionModal" onSubmit={handleOk}>
      <div className="data">
        <p>Balance: {selectedCustomer.balance} AFs</p>
        {actionType}:{" "}
        <input
          type="text"
          placeholder="amount"
          value={actionAmount}
          onChange={(e) => setActionAmount(Number(e.target.value))} // Store the entered amount
        />
      </div>
      <button type="submit" className="ok">
        Ok
      </button>
      <button className="cancel" onClick={handleActionOpen}>
        Cancel
      </button>
    </form>
  );
}
