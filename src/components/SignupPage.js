import React from "react";
import Navbar from "./Navbar";
import "../styles/SignupPage.css";

function SignupPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="signup-content">
        <div className="signup-card">
          <h1>Create an Account</h1>
          <form className="signup-form">
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" required />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" required />
            </label>
            <label>
              Username:
              <input type="text" placeholder="Choose a username" required />
            </label>
            <label>
              Password:
              <input type="password" placeholder="Choose a password" required />
            </label>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
