import React, { useState } from "react";
import Card from "./Card";
import "../styles/Gameboard.css";
import colorBank from "../assets/colors.json";
import uniqid from 'uniqid';

function Gameboard(props) {
  const { handleSelection, palette } = props;

  const colorData = colorBank[palette];

  const generateCards = (n) => {
    const selectedColors = [];
    let random = 0;
    while (selectedColors.length < n) {
      random = Math.floor(Math.random() * colorData.length);
      if (selectedColors.indexOf(colorData[random]) !== -1) continue;
      selectedColors.push(colorData[random]);
    }
    return selectedColors;
  }

  const colorArray = generateCards(8);

  return (
    <div className="gameboard">
      {colorArray.map((color) => (
        <Card key={uniqid()} handleSelection={handleSelection} color={color}/>
      ))}
    </div>
  );
}

export default Gameboard;
