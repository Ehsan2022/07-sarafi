/** @format */
import React from "react";
const customers = [
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
export default function Customer_list() {
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
                <button className="select-customer-btn">Select</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
