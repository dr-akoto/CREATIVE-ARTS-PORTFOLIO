import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/ArtistryAlley logo.jpeg';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="ArtistryAlley" />
        </div>
        
        <div className="nav-items">
          <Link 
            to="/" 
            className={`explore-btn ${location.pathname === '/' ? 'active' : ''}`}
          >
            Explore <span className="dropdown-arrow">▼</span>
          </Link>
          <Link 
            to="/jobs" 
            className={`nav-link ${location.pathname === '/jobs' ? 'active' : ''}`}
          >
            Jobs
          </Link>
        </div>
      </div>

      <div className="navbar-right">
        <button className="hire-btn">
          Hire Freelancers <span className="dropdown-arrow">▼</span>
        </button>
        <div className="notification-icon">
          <i className="bell-icon">🔔</i>
        </div>
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar; 