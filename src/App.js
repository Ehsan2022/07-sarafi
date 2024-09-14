/** @format */

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-9">
          <div className="p-3">
            <h1>Main Content</h1>
            <p>This is the main content area.</p>
            <p>
              You can add more content here, and it will take 9 columns of the
              grid, while the sidebar takes 3 columns on the right.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-3 bg-light border-left">
          <div className="p-3">
            <h2>Sidebar</h2>
            <ul className="list-group">
              <li className="list-group-item">Item 1</li>
              <li className="list-group-item">Item 2</li>
              <li className="list-group-item">Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return <></>;
}
