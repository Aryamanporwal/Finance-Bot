import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './components/Signup.jsx';
// no need of welcome import 
import Welcome from "./components/Welcome.jsx";
import StockTracker from './components/stock.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Add more routes as needed */}

          {/* this route for welcome no need */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/stocks" element={<StockTracker />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;