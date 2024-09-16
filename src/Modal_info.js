import React from "react";

export default function CustomerInfo({ handleInfoOpen, selectedCustomer, handleActionOpen }) {
    return selectedCustomer ? (
      <>
        <div className="customer_info">
          <h5>
            <span role="img" aria-label="">👤</span> {selectedCustomer.name}
          </h5>
          <button className="close-info-btn" onClick={handleInfoOpen}>
            <span role="img" aria-label="" >❌</span>
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