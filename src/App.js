/** @format */

// src/App.js
import React from "react";
import Customer_form from "./Customer_form";
import Customer_list from "./Customer_list";



export default function App() {
  return (
    <div className="body">
      <Customer_form></Customer_form>
      <Customer_list></Customer_list>
    </div>
  );
}
