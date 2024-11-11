import React from 'react';
import { Link } from 'react-router-dom';
import games from '../../src/gamesData';

function GameList() {
  return (
    <div className="left-panel">
      {games.map(game => (
        <div className="game-item" key={game.id}>
          <img src={game.image} alt={game.name} />
          <div className="game-info">
						<Link to={`/game/${game.id}`}>{game.name}</Link>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameList;