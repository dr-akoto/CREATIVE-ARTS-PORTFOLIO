import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFilter, 
  faSearch, 
  faImage, 
  faChevronDown 
} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-left">
        <button className="filter-btn">
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
          Filter
        </button>
      </div>

      <div className="search-middle">
        <div className="search-input-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search the creative world at work"
            className="search-input"
          />
        </div>
      </div>

      <div className="search-right">
        <button className="image-search-btn">
          <FontAwesomeIcon icon={faImage} className="image-icon" />
          Search by Image
        </button>
        <div className="sort-dropdown">
          <button className="sort-btn">
            Recommended
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar; 