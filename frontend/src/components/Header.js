import React, { useState } from 'react';
import './Header.css'; // Make sure to import the CSS file for styling

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState('');

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavItemSelect = (item) => {
    setSelectedNavItem(item);
    setIsExpanded(false); // Collapse the navbar after selecting an item
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">InvisiWeb</div>
        <div className="fab" id="fab" onClick={handleToggle}>
          <i className="fas fa-bars">+</i>
        </div>
        <div className={`nav-items ${isExpanded ? 'open' : ''}`} id="nav-items">
          <NavItem
            icon="fa-tachometer-alt"
            label="Dashboard"
            onSelect={() => handleNavItemSelect('dashboard')}
            isSelected={selectedNavItem === 'dashboard'}
          />
          <NavItem
            icon="fa-info-circle"
            label="About Us"
            onSelect={() => handleNavItemSelect('about')}
            isSelected={selectedNavItem === 'about'}
          />
          <NavItem
            icon="fa-envelope"
            label="Contact Us"
            onSelect={() => handleNavItemSelect('contact')}
            isSelected={selectedNavItem === 'contact'}
          />
          <NavItem
            icon="fa-question-circle"
            label="Help & FAQ"
            onSelect={() => handleNavItemSelect('help')}
            isSelected={selectedNavItem === 'help'}
          />
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ icon, label, onSelect, isSelected }) => {
  return (
    <div className={`nav-item ${isSelected ? 'active' : ''}`} onClick={onSelect}>
      <i className={`fas ${icon}`}></i>
      <span>{label}</span>
    </div>
  );
};

export default Header;
