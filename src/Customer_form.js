/** @format */
import React, { useState } from "react";

export default function CustomerForm({ handleAddCustomer }) {
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
