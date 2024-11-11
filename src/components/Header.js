// Header.js
import React from 'react';
import SteamLogo from './SteamLogo';
import { Link } from 'react-router-dom';

const categories = [
  { name: '액션 🧨', path: '/action' },
  { name: 'FPS 🔫', path: '/fps' },
  { name: 'RPG 🏹', path: '/rpg' },
  { name: '공포 👻', path: '/fear' },
  { name: '퍼즐 🧩', path: '/puzzle' },
  { name: '스포츠 ⚽️', path: '/sports' },
  { name: '시뮬레이션 👋🏻', path: '/simulation' },
];

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <SteamLogo />
      </div>
			<nav>
			<div className="vertical-line"></div>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.path} className="button">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
