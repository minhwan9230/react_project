// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cards.css';
const Card = ({ title, imageUrl, game }) => {
  return (
    <div className="d-steam-card-wrapper">
      <Link to={`/game/${game.id}`}>
        <div className="d-steam-card" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="card-title">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
