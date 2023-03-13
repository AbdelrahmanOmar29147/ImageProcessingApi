import React from 'react';
import WelcomeSection from './SectionLeft/WelcomeSection';
import SearchBar from './SectionRight/SearchBar';
import './topbar.scss';

const TopBar = () => {
  return (
    <div className=" topbar">
      <WelcomeSection />
      <SearchBar />
    </div>
  );
};

export default TopBar;
