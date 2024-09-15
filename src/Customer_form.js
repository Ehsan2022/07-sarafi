/** @format */
import React from "react";

export default function Customer_form() {
  return (
    <div className="customer-form">
      <form>
        <h5>Add Customer</h5>
        <label>Name</label>
        <input type="text" />
        <label>Phone</label>
        <input type="text" />
        <label>Address</label>
        <input type="text" />
        <label>Balance</label>
        <input type="text" />

        <button className="save-btn">Save</button>
      </form>
    </div>
  );
}
