/** @format */

// Sidebar.js
import React from "react";
import "./index.css"; // For custom styles

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for large screens */}
      <div className="d-none d-lg-block sidebar bg-dark text-light p-3">
        <a className="nav-link text-light" href="#">
          <h2 className="text-center">معامله</h2>
        </a>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              خانه
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ثبت مشتری
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar for small screens */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-lg-none">
        <a className="navbar-brand" href="#">
          معامله
        </a>
        <button
          className="navbar-toggler open"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarNav"
          aria-controls="sidebarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" id="sidebarNav">
          <div className="sidebar-mobile bg-dark text-light p-3">
            <button
              className="navbar-toggler close"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarNav"
              aria-controls="sidebarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span>❌</span>
            </button>
            <ul className="nav flex-column pt-4">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  خانه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ثبت مشتری
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
