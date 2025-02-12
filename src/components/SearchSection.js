import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faImage } from '@fortawesome/free-solid-svg-icons';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <button className="filter-btn">
          <FontAwesomeIcon icon={faFilter} /> Filter
        </button>

        <div className="main-search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search the creative world at work"
            className="search-input"
          />
        </div>

        <button className="image-search-btn">
          <FontAwesomeIcon icon={faImage} /> Search by Image
        </button>

        <div className="sort-dropdown">
          <select defaultValue="recommended" className="sort-select">
            <option value="recommended">Recommended</option>
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchSection; 