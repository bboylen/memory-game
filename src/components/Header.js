import React, { useState } from 'react';
import '../styles/Header.css';

function Header (props) {
  // const { currentScore, highScore } = props;

  return (
    <header className="header">
      <h1>Memory Game</h1>
      <div className="scores">
        <span>Current Score:</span>
        <span>High Score:</span>
      </div>
    </header>
  )
}

export default Header;