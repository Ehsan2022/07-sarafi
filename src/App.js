import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import { FaBars } from 'react-icons/fa';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Main content */}
        <div className="col-md-9 col-lg-10">
          {/* Burger icon for toggling sidebar */}
          <button className="btn btn-primary mt-2" onClick={toggleSidebar}>
            {/* <FaBars /> */}
          </button>
          <div className="content p-3">
            <h1>Main Content</h1>
            <p>This is the main content area.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`col-md-3 col-lg-2 bg-light sidebar ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}>
          <h4 className="p-3">Sidebar</h4>
          <ul className="list-unstyled px-3">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
