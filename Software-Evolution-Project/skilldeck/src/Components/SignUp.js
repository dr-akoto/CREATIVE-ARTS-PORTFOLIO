import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!formData.termsAccepted) {
      alert("Please accept the terms of service");
      return;
    }

    // Store user credentials in local storage
    localStorage.setItem("fullName", formData.fullName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("country", formData.country);
    localStorage.setItem("password", formData.password);

    alert("Account Created Successfully!");
    navigate("/ContentGrid");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Your Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="terms">
            <label className="terms-label">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span>
                I agree to all statements in{" "}
                <a href="#">Terms of Service</a>
              </span>
            </label>
          </div>
          <button type="submit" className="signup-button">
            SIGN UP
          </button>
        </form>
        <p>
          Have already an account?{" "}
          <Link to="/login" style={{ textDecoration: "underline" }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage; 