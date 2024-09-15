/** @format */

// src/App.js
import React from "react";

export default function App() {
  return (
    <div className="body">
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
      <div className="customer-list">
      <h5>List Of Customers</h5>

        <table>
          <tr className="table-heading">
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Balance</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Ehsan</td>
            <td>00000000000</td>
            <td>Herat</td>
            <td>25678000</td>
            <td><button className="select-customer-btn">Select</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
