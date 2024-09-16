import React from "react";
import { useState } from "react";


  
 export default  function ActionModal({
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
  