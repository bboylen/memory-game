import React, { useState } from 'react';
import '../styles/Header.css';

function Header (props) {
  const { score, highScore } = props;

  return (
    <header className="header">
      <h1>Memory Game</h1>
      <div className="scores">
        <span>Current Score: {score}</span>
        <span>High Score: {highScore}</span>
      </div>
    </header>
  )
}

export default Header;