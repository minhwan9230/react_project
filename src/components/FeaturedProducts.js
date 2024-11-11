// FeaturedProducts.js

import React from 'react';
import games from '../gamesData';

function FeaturedProducts() {
  return (
    <div className="featured-section">
      <h2>최고 인기 게임 TOP 50</h2>
      <div className="game-list">
        {games.slice(0, 3).map(game => (
          <div className="game" key={game.id}>
						<img src={game.image} alt={game.name} />
						<div className='gameName'>
							<p>{game.name}</p></div>
						<br/>
						<div className='gamePrice'>
							<p>{game.price}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
