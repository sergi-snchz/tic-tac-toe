import React, { useContext } from 'react';

import Results from './Results';
import { GameContext } from '../context/gameContext';

function Rematch() {
  const { modal, setModal, gameState, setGameState, playerTurn, setPlayerTurn, winner, setWinner } = useContext(GameContext);
  let modalClasses = 'absolute bottom-3 w-4/5 max-w-sm bg-gray-300 flex flex-col justify-around rounded text-black';
  if (!modal) {
    modalClasses += ' hidden';
  }

  // Event listeners
  function handleClick() {
    const assignTurn = Math.floor(Math.random() * 2 + 1);
    if (assignTurn === 1) {
      setPlayerTurn(false);
    } else {
      setPlayerTurn(true);
    }
    setGameState({...gameState, gameArray: ['', '', '', '', '', '', '', '', ''], round: 0});
    setModal(false);
    setWinner(null);
  }

  let winnerHeader = '';
  if (winner === 'Player') {
    winnerHeader = 'Player won!'
  } else if (winner === 'Computer') {
    winnerHeader = 'Computer won!';
  } else {
    winnerHeader = "It's a tie!";
  }

  return (
    <div className={modalClasses}>
      <button className="text-red-500 flex justify-end m-5 hover:text-red-600">
      </button>
      <p className="sm:text-xl xs:text-lg text-sm text-center mb-5">{winnerHeader}</p>
      <Results classes="flex justify-around mx-auto sm:text-xl text-sm w-full text-center mb-5" />
      <div className="flex justify-center mb-5">
        <button className="sm:text-xl xs:text-lg text-sm bg-green-400 p-3 rounded hover:bg-green-500" onClick={handleClick}>PLAY AGAIN</button>
      </div>
    </div>
  );
}

export default Rematch;
