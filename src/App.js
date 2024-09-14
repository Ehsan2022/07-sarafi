// App.js
import React from 'react';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content" style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Main Content</h1>
        <p>Your main content goes here.</p>
      </div>
    </div>
  );
}

export default App;
