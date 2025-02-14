import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    // Retrieve user data from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Simulate checking credentials
    if (storedEmail === email && storedPassword === password) {
      alert("Login Successful!");
      navigate("/ContentGrid"); // Redirect to ContentGrid page
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>
          SKILL <span className="green-text">DECK</span>
        </h1>
        <h2>Welcome back!</h2>
        <p>You can sign in to access your existing account.</p>
      </div>

      <div className="right-section">
        <h2>Sign In</h2>

        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <Link to="/SignUp">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login; 