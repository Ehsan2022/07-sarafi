/** @format */

import React from "react";
import { useState } from "react";
import CustomerForm from "./Customer_form";
import CustomerList from "./Customer_list";
import ActionModal from "./Modal_action";
import CustomerInfo from "./Modal_info";

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
    <>
      <h2>SARAFI<span><h6>Mohammad Ehsan Nicksaresht</h6></span></h2>

      <div className="body">
        {isInfoOpen ? (
          <></>
        ) : (
          <>
            <CustomerForm handleAddCustomer={handleAddCustomer}></CustomerForm>
            <CustomerList
              customers={customers}
              handleInfoOpen={handleInfoOpen}
              handleSelectedCustomer={handleSelectedCustomer}></CustomerList>
          </>
        )}
        {isInfoOpen ? (
          <>
            <CustomerInfo
              handleActionOpen={handleActionOpen}
              handleInfoOpen={handleInfoOpen}
              customers={customers}
              selectedCustomer={selectedCustomer}></CustomerInfo>
            {isActionOpen ? (
              <ActionModal
                handleActionAmount={handleActionAmount}
                actionType={actionType}
                handleActionOpen={handleActionOpen}
                handleInfoOpen={handleInfoOpen}
                selectedCustomer={selectedCustomer}></ActionModal>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
