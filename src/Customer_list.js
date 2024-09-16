/** @format */
import React from "react";

export default function CustomerList({
  customers,
  handleInfoOpen,
  handleSelectedCustomer,
}) {
  let num = 1;
  return (
    <div className="list">
      <div className="table-heading">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="customer-table">
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
