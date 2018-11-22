import React from 'react';

const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left timer">Timer: 0</div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;