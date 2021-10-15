import React, { useContext } from 'react';

import { GameContext } from '../context/gameContext';

function Results({classes}) {
  const { gameState } = useContext(GameContext);
  return (
    <div className={classes}>
      <div>
        <div>{`PLAYER (${gameState.playerMark})`}</div>
        <div>{gameState.playerWins}</div>
      </div>
      <div>
        <div>TIE</div>
        <div>{gameState.ties}</div>
      </div>
      <div>
        <div>{`COMPUTER (${gameState.computerMark})`}</div>
        <div>{gameState.computerWins}</div>
      </div>
    </div>
  );
}

export default Results;
