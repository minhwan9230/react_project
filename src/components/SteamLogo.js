// ReactLogo.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const ReactLogo = () => {
  return (
    <Link to="/">
      <div className="Steam-logo">
        <img 
          src="https://store.fastly.steamstatic.com/public/shared/images/responsive/header_logo.png" 
          alt="Steam Logo" 
          className="steam-logo" 
        />
      </div>
    </Link>
  );
};

export default ReactLogo;