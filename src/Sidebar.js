/** @format */

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './index.css'; // For custom styles

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for large screens */}
      <div className="d-none d-lg-block sidebar bg-dark text-light p-3">
        <Link className="nav-link text-light" to="/">
          <h2 className="text-center">معامله</h2>
        </Link>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              خانه
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customer">
              ثبت مشتری
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar for small screens */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-lg-none">
        <Link className="navbar-brand" to="/">
          معامله
        </Link>
        <button
          className="navbar-toggler open"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarNav"
          aria-controls="sidebarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse" id="sidebarNav">
          <div className="sidebar-mobile bg-dark text-light p-3">
            <button
              className="navbar-toggler close"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarNav"
              aria-controls="sidebarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span role='img' aria-label='icon'>❌</span>
            </button>
            <ul className="nav flex-column pt-4">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  خانه
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customer">
                  ثبت مشتری
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
