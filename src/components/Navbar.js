import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">ErrorDetector</span>
      </div>
      <div className="navbar-right">
        <a href="/">Home</a>
        <a href="/category">Category</a>
        <a href="/events">Events</a>
        <a href="/directory">Directory</a>
        <a href="/form">Form</a>
        <input type="text" placeholder="Search" className="navbar-search" />
        <div className="dropdown">
          <button className="dropdown-button">Login</button>
          <div className="dropdown-content">
            <a href="/admin-login">Admin Login</a>
            <a href="/technician-login">Technician Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
