
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MySite</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;





