import React from 'react';
import '../index.css';

const Navbar = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-logo">Podcast</h1>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={() => handleNavigation('home')}>Home</button>
        <button className="navbar-button" onClick={() => handleNavigation('favorite')}>Favorites</button>
        <button className="navbar-button" onClick={() => handleNavigation('preview')}>Preview</button>
        <button className="navbar-button" onClick={() => handleNavigation('history')}>History</button>
      </div>
    </div>
  );
};

export default Navbar;
