/** @format */

// src/App.js
import React from "react";
import Customer_form from "./Customer_form";
import Customer_list from "./Customer_list";

const customer = [
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
    id: 1,
    name: "Naqib",
    phone: "0790239999",
    address: "AFG, Herat",
    balance: 111000,
  },
];

export default function App() {
  return (
    <div className="body">
      <Customer_form></Customer_form>
      <Customer_list></Customer_list>
    </div>
  );
}
