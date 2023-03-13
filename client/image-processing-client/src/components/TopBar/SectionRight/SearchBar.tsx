import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './searchbar.scss';

const SearchBar = () => {
  return (
    <div className="sectionright">
      <FiSearch className="sectionright__searchIcon" />
      <input
        className="sectionright__searchInput"
        type="search"
        placeholder="Search for images..."
      />
    </div>
  );
};

export default SearchBar;
