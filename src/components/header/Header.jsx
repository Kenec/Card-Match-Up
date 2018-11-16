import React from 'react';

const Header = () => (
  <div className="grid-header-container">
    <div className="justify-left timer">Timer: 0</div>
    <div className="justify-center game-status-text">Click Start Button to Begin</div>
    <div className="justify-end">
      <button className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;