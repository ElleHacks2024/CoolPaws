import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
      </Router>
      {/* Rest of your content */}
    </div>
  );
}

export default App
