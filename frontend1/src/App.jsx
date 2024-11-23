// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Welcome! Please <a href="/signup">Sign Up</a> or <a href="/login">Login</a>.</h2>} />
        
        {/* Signup route */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* 404 route */}
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
