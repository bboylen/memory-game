import React, { useState } from 'react';
import Card from './Card';
import '../styles/Gameboard.css';

function Gameboard (props) {
  const cards = [1,2,3,4,5,6,7,8];
  return (
    <div class="gameboard">
      {cards.map((card) => (
        <Card id={card} />
      ))}
    </div>
  )
}

export default Gameboard;