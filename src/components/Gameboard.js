import React, { useState } from "react";
import Card from "./Card";
import "../styles/Gameboard.css";
import colorBank from "../assets/colors.json";

function Gameboard(props) {
  const colorData = colorBank.colors;

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

  const { handleSelection } = props;
  console.log(handleSelection);
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="gameboard">
      {colorArray.map((color) => (
        <Card handleSelection={handleSelection} color={color}/>
      ))}
    </div>
  );
}

export default Gameboard;
