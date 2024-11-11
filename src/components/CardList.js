// CardList.js
import React from 'react';
import Card from './Card';
import gamesData from '../gamesData'; // gamesData 파일 import

const CardList = () => {
  return (
    <div className="d-steam-cards">
      {gamesData.map((game, index) => (
        <Card key={index} title={game.title} imageUrl={game.imageUrl} />
      ))}
    </div>
  );
};

export default CardList;