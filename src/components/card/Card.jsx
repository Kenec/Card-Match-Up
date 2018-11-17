import React from 'react';
import ReactCardFlip from "react-card-flip";

const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
    <button id={id} className="card card-front" onClick={handleClick} key="front">
      Front
    </button>

    <button id={id} className="card card-back" onClick={handleClick} key="back">
      { cardNumber }
    </button>
  </ReactCardFlip>
);

export default Card;