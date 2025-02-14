import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="https://i.postimg.cc/fypmMNXc/Screenshot-418.png" alt="Skill Deck" className="logo-img" />
        </div>
        <div className="nav-items">
          <Link to="/" className={`explore-btn ${location.pathname === '/' ? 'active' : ''}`} >
            Explore <span className="dropdown-arrow">▼</span>
          </Link>
          <Link to="/jobs" className={`nav-link ${location.pathname === '/jobs' ? 'active' : ''}`} >
            Jobs
          </Link>
        </div>
      </div>
      <div className="navbar-right">
        <div className="notification-icon">
          <i className="bell-icon">🔔</i>
        </div>
        <button className="login-btn" onClick={handleLoginClick}>
          Log In
        </button>
        <button className="signup-btn" onClick={handleSignupClick}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;