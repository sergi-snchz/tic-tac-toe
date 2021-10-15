import React, { useEffect, useContext, useState } from 'react';

import { GameContext } from '../context/gameContext';
import { isWinner, gameBoardFull, computerTurn } from '../utils/gameLogic';

function GameBoard() {
  const { gameState, setGameState, playerTurn, setPlayerTurn, modal, setModal, winner, setWinner } = useContext(GameContext);

  useEffect(() => {
    console.log(gameState.gameArray);
    if (isWinner(gameState.gameArray)) {
      if (playerTurn) {
        setGameState({...gameState, computerWins: gameState.computerWins + 1});
        setPlayerTurn(false);
        setWinner('Computer');
      } else {
        setGameState({...gameState, playerWins: gameState.playerWins + 1});
        setPlayerTurn(true);
        setWinner('Player');
      }
      setModal(true);
    }

    if (gameBoardFull(gameState.gameArray)) {
      setGameState({...gameState, ties: gameState.ties + 1});
      setModal(true);
      setWinner(null);
    }

    if (!playerTurn) {
      const computerMove = computerTurn(gameState.gameArray, gameState.computerMark, gameState.playerMark, gameState.round);
      const newRound = gameState.round + 1;
      let newGameArray = [...gameState.gameArray];
      newGameArray[computerMove] = gameState.computerMark;
      setPlayerTurn(true);
      setGameState({...gameState, round: newRound, gameArray: newGameArray});
    }
  }, [gameState.gameArray]);

   // Event listeners
   function handleClick(e) {
     const target = e.target;
     if (!target.innerText) {
       const updatedGameArr = [...gameState.gameArray];
       updatedGameArr[parseInt(target.dataset.id)] = gameState.playerMark;
       const newRound = gameState.round + 1;
       setGameState({...gameState, gameArray:updatedGameArr, round: newRound});
       setPlayerTurn(false);
     }
   }
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-4/5 max-w-sm h-1/2 max-h-96" onClick={handleClick}>
      <div className="border-r-4 border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="0">{gameState.gameArray[0]}</div>
      <div className="border-r-4 border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="1">{gameState.gameArray[1]}</div>
      <div className="border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="2">{gameState.gameArray[2]}</div>
      <div className="border-r-4 border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="3">{gameState.gameArray[3]}</div>
      <div className="border-r-4 border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="4">{gameState.gameArray[4]}</div>
      <div className="border-b-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="5">{gameState.gameArray[5]}</div>
      <div className="border-r-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="6">{gameState.gameArray[6]}</div>
      <div className="border-r-4 border-gray-800 flex justify-center items-center text-5xl cursor-pointer" data-id="7">{gameState.gameArray[7]}</div>
      <div className="flex justify-center items-center text-5xl cursor-pointer" data-id="8">{gameState.gameArray[8]}</div>
    </div>
  );
}

export default GameBoard
