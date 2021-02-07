import React, { useState } from 'react';
import '../styles/Card.css';

function Card (props) {
  const { color, handleSelection } = props;
  
  return (
    <div className="card" style={{ backgroundColor: color }} onClick={handleSelection}>

    </div>
  )
}

export default Card;