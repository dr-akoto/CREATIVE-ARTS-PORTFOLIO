import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img
            src="https://i.postimg.cc/fypmMNXc/Screenshot-418.png"
            alt="Skill Deck"
            className="logo-img"
          />
        </a>
      </div>

      {/* Navbar Items */}
      <div className="nav-items">
        {/* Explore Dropdown */}
        <div className="nav-item dropdown">
          <a href="/explore" className="nav-link">
            Explore
          </a>
          <div className="dropdown-menu">
            <a href="/explore/projects">Projects</a>
            <a href="/explore/Graphic Design">Graphic Design</a>
            <a href="/explore/Pencil Arts">Pencil Arts</a>
            <a href="/explore/Sculpture">Sculpture Work</a>
            <a href="/explore/Illustration">Illustration</a>
            <a href="/explore/Photography">Photography</a>
          </div>
        </div>

        {/* Jobs (No Dropdown) */}
        <a href="/jobs" className="nav-link">
          Jobs
        </a>

        {/* Freelance Dropdown */}
        <div className="nav-item dropdown">
          <a href="/freelance" className="nav-link">
            Freelance
          </a>
          <div className="dropdown-menu">
            <a href="/freelance/post">Post a Job</a>
            <a href="/freelance/browse">Browse Freelancers</a>
            <a href="/freelance/hiring-tips">Hiring Tips</a>
          </div>
        </div>
      </div>

      {/* Right Section (Notifications, Profile) */}
      <div className="navbar-right">
        <div className="notification-icon bell-emoji">🔔</div>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">
            Log In
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

        {/* Profile Dropdown */}
        <div
          className={`profile ${showProfileDropdown ? "active" : ""}`}
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <img
            src="https://i.postimg.cc/7Yt4rTWW/default-profile.png"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-dropdown">
            <a href="/profile">My Profile</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
