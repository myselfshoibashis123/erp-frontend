import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/MainPage.css";

function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <div className="main-content">
        <div className="login-card">
          <h1>User Login</h1>
          <form className="login-form">
            <label>
              Username:
              <input type="text" placeholder="Enter your username" required />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Enter your password" required />
            </label>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="signup-option">
            <p>Don't have an account?</p>
            <Link to="/signup" className="signup-link">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
