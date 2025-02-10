import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">
          <img src="https://i.postimg.cc/fypmMNXc/Screenshot-418.png" alt="Skill Deck" className="logo-img" />
        </a>
      </div>

      {/* Navbar Items */}
      <div className="nav-items">
        {/* Explore Dropdown */}
        <div className="nav-item dropdown">
          <a href="/explore" className="nav-link">Explore</a>
          <div className="dropdown-menu">
            <a href="/explore/projects">Projects</a>
            <a href="/explore/articles">Articles</a>
            <a href="/explore/tutorials">Tutorials</a>
          </div>
        </div>

        {/* Jobs (No Dropdown) */}
        <a href="/jobs" className="nav-link">Jobs</a>

        {/* Freelance Dropdown */}
        <div className="nav-item dropdown">
          <a href="/freelance" className="nav-link">Freelance</a>
          <div className="dropdown-menu">
            <a href="/freelance/post">Post a Job</a>
            <a href="/freelance/browse">Browse Freelancers</a>
            <a href="/freelance/hiring-tips">Hiring Tips</a>
          </div>
        </div>
      </div>

      {/* Right Section (Notifications, Profile) */}
      <div className="navbar-right">
        <div className="notification-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bell-icon"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>

        {/* Profile Dropdown */}
        <div 
          className={`profile ${showProfileDropdown ? "active" : ""}`} 
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <img src="https://i.postimg.cc/7Yt4rTWW/default-profile.png" alt="Profile" className="profile-img" />

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
