import React, { useState } from "react";
import "../styles/Header.css";

function Header(props) {
  const { score, highScore, handlePalette } = props;

  return (
    <header className="header">
      <h1>Memory Game</h1>
      <button id="palette-btn" onClick={handlePalette}>
        Switch Palette
      </button>
      <div className="scores">
        <span>Current Score: {score}</span>
        <span>High Score: {highScore}</span>
      </div>
    </header>
  );
}

export default Header;
