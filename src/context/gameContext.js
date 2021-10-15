import React, { useState, useEffect } from 'react';

const GameContext = React.createContext();

function GameProvider({ children }) {
  const [gameState, setGameState] = useState({
    gameArray: ['', '', '', '', '', '', '', '', ''],
    computerMark: 'X',
    playerMark: 'O',
    ties: 0,
    playerWins: 0,
    computerWins: 0,
    round: 0
  });

  const [modal, setModal] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // if randomNumber === 1 computer is X and goes first, otherwise player is X and player starts the game.
    const randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber === 2) {
      setGameState({...gameState, computerMark: 'O', playerMark: 'X'});
      setPlayerTurn(true);
    }
  }, []);

  return (
    <GameContext.Provider
      value={
        {
          gameState,
          setGameState,
          modal,
          setModal,
          playerTurn,
          setPlayerTurn,
          winner,
          setWinner
        }
      }
    >
      {children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };
