import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/hero-bg.jpg';
import './JobsList.css';

const JobsList = () => {
  const [jobs] = useState([
    {
      id: 1,
      company: "DRUMSTICK DESIGN",
      logo: "D",
      title: "LEAD GRAPHIC DESIGNER",
      location: "Gurgaon, India",
      description: "Looking for Lead Graphic Designer",
      timeAgo: "a day ago"
    },
    {
      id: 2,
      company: "Design Agency",
      logo: "D",
      title: "Senior Product Designer",
      location: "Remote",
      timeAgo: "3 days ago",
      type: "Contract"
    },
    {
      id: 3,
      company: "Pixel Perfect",
      logo: "P",
      title: "Motion Graphics Designer",
      location: "Los Angeles, USA",
      timeAgo: "1 day ago",
      type: "Full Time"
    },
    {
      id: 4,
      company: "Tech Innovators",
      logo: "T",
      title: "Visual Designer",
      location: "San Francisco, USA",
      timeAgo: "Just now",
      type: "Part Time"
    },
    {
      id: 5,
      company: "Creative Minds",
      logo: "CM",
      title: "Brand Designer",
      location: "London, UK",
      timeAgo: "4 days ago",
      type: "Full Time"
    },
    {
      id: 6,
      company: "Digital Works",
      logo: "DW",
      title: "3D Artist",
      location: "Berlin, Germany",
      timeAgo: "1 week ago",
      type: "Freelance"
    },
    {
      id: 7,
      company: "Art Studio",
      logo: "AS",
      title: "Illustrator",
      location: "Toronto, Canada",
      timeAgo: "2 days ago",
      type: "Contract"
    },
    {
      id: 8,
      company: "Web Solutions",
      logo: "WS",
      title: "Frontend Developer",
      location: "Remote",
      timeAgo: "3 days ago",
      type: "Full Time"
    },
    {
      id: 9,
      company: "Innovation Labs",
      logo: "IL",
      title: "UX Researcher",
      location: "Seattle, USA",
      timeAgo: "5 days ago",
      type: "Full Time"
    },
    {
      id: 10,
      company: "Design Hub",
      logo: "DH",
      title: "Art Director",
      location: "Paris, France",
      timeAgo: "1 day ago",
      type: "Senior Level"
    },
    {
      id: 11,
      company: "Creative Cloud",
      logo: "CC",
      title: "Product Designer",
      location: "Amsterdam, NL",
      timeAgo: "2 days ago",
      type: "Full Time"
    },
    {
      id: 12,
      company: "Studio 404",
      logo: "S4",
      title: "Graphic Designer",
      location: "Melbourne, AU",
      timeAgo: "Just now",
      type: "Contract"
    },
    {
      id: 13,
      company: "Digital Nomads",
      logo: "DN",
      title: "UI Designer",
      location: "Remote",
      timeAgo: "3 days ago",
      type: "Freelance"
    },
    {
      id: 14,
      company: "Future Tech",
      logo: "FT",
      title: "AR/VR Designer",
      location: "Tokyo, Japan",
      timeAgo: "1 week ago",
      type: "Full Time"
    },
    {
      id: 15,
      company: "Creative Box",
      logo: "CB",
      title: "Video Editor",
      location: "Miami, USA",
      timeAgo: "2 days ago",
      type: "Part Time"
    },
    {
      id: 16,
      company: "Design Masters",
      logo: "DM",
      title: "Senior UX Designer",
      location: "Chicago, USA",
      timeAgo: "4 days ago",
      type: "Full Time"
    },
    {
      id: 17,
      company: "Artify",
      logo: "A",
      title: "Character Designer",
      location: "Vancouver, Canada",
      timeAgo: "3 days ago",
      type: "Contract"
    },
    {
      id: 18,
      company: "Tech Design Co",
      logo: "TD",
      title: "Design Systems Engineer",
      location: "Remote",
      timeAgo: "1 day ago",
      type: "Full Time"
    },
    {
      id: 19,
      company: "Creative Force",
      logo: "CF",
      title: "Marketing Designer",
      location: "Singapore",
      timeAgo: "2 days ago",
      type: "Full Time"
    },
    {
      id: 20,
      company: "Design Plus",
      logo: "D+",
      title: "Interactive Designer",
      location: "Dublin, Ireland",
      timeAgo: "Just now",
      type: "Contract"
    }
  ]);

  const categories = [
    { id: 'all', name: 'All', isPopular: false },
    { id: 'logo', name: 'Logo Design', isPopular: true },
    { id: 'branding', name: 'Branding Services', isPopular: true },
    { id: 'social', name: 'Social Media Design', isPopular: true },
    { id: 'website', name: 'Website Design', isPopular: true },
    { id: 'illustrations', name: 'Illustrations', isPopular: true },
    { id: 'packaging', name: 'Packaging Design', isPopular: true },
    { id: 'landing', name: 'Landing Page Design', isPopular: true },
    { id: 'uiux', name: 'UI/UX Design', isPopular: true },
    { id: 'architecture', name: 'Architecture & Interior Design', isPopular: true },
  ];

  return (
    <div className="jobs-page">
      <div className="jobs-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content">
          <h1>Creative Jobs</h1>
          <p>Browse and discover your next opportunity</p>
        </div>
      </div>

      <div className="jobs-container">
        <div className="sidebar">
          <button className="new-job-btn">
            <FontAwesomeIcon icon={faPlus} /> New Job
          </button>

          <div className="categories-section">
            <h3>Categories</h3>
            <div className="categories-list">
              {categories.map((category) => (
                <label key={category.id} className="category-item">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    defaultChecked={category.id === 'all'}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
            <button className="view-all-btn">View All Categories</button>
          </div>

          <div className="location-section">
            <h3>Location</h3>
            {/* Location filters can be added here */}
          </div>
        </div>
        
        <div className="main-content">
          <div className="jobs-header">
            <h1>Full-Time Jobs (746)</h1>
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search Full-Time Jobs..." 
                className="search-input"
              />
            </div>
          </div>

          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="company-logo" style={{ backgroundColor: getRandomColor() }}>
                    {job.logo}
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{job.company}</h3>
                    <div className="location">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <h2 className="job-title">{job.title}</h2>
                <p className="job-description">{job.description}</p>
                <span className="time-ago">{job.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to generate random colors for company logos
const getRandomColor = () => {
  const colors = ['#FF5C5C', '#47B881', '#805AD5', '#3182CE', '#DD6B20'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default JobsList; 