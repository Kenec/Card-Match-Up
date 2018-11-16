import React from 'react';
import ReactCardFlip from "react-card-flip";

const Card = ({ id, isFlipped, handleClick }) => (
  <ReactCardFlip isFlipped={isFlipped}>
    <button id={id} className="card card-front" onClick={handleClick} key="front">
    </button>

    <button id={id} className="card card-back" onClick={handleClick} key="back">
    </button>
  </ReactCardFlip>
);

export default Card;