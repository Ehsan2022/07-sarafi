/** @format */

import React from "react";
import { useState } from "react";

const initialCustomers = [
  {
    name: "Ehsan",
    phone: "0790234314",
    address: "AFG, Herat",
    balance: 125000,
  },
  {
    name: "Neman",
    phone: "0790230000",
    address: "AFG, Herat",
    balance: 112000,
  },
  {
    name: "Naqib",
    phone: "0790239999",
    address: "AFG, Herat",
    balance: 111000,
  },
];
export default function App() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [isOpen, setIsOpen] = useState(false);

  function handleAddCustomer(customer) {
    setCustomers((customers) => [...customers, customer]);
  }

  function handleOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <div className="body">
      {isOpen ? (
        <></>
      ) : (
        <>
          <Customer_form handleAddCustomer={handleAddCustomer}></Customer_form>
          <Customer_list
            customers={customers}
            handleOpen={handleOpen}></Customer_list>
        </>
      )}
      {isOpen ? <Customer_info handleOpen={handleOpen}></Customer_info> : <></>}
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
    const newCustomer = {
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

        <button className="save-btn">Save</button>
      </form>
    </div>
  );
}

function Customer_list({ customers, handleOpen }) {
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
            <tr>
              <td>{num++}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.balance}</td>
              <td>
                <button className="select-customer-btn" onClick={handleOpen}>
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

function Customer_info({ handleOpen }) {
  return (
    <div className="customer_info">
      <h4>
        <span>👤</span> customer name
      </h4>
      <button className="close-info-btn" onClick={handleOpen}>
        ❌
      </button>
      <div className="customer_data">
        <div className="phone">
          <p>phone</p>
          <p>1234567890</p>
        </div>
        <div className="address">
          <p>address</p>
          <p>asdfghj</p>
        </div>
        <div className="balance">
          <p>balance</p>
          <p>87654321</p>
        </div>
        <div>
          <button className="btn-deposit">Deposit</button>
          <button className="btn-withdraw">Withdraw</button>
        </div>
      </div>
    </div>
  );
}
