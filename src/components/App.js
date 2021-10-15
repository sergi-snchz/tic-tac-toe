import React from 'react';

import GameBoard from './GameBoard';
import Results from './Results';
import Rematch from './Rematch';
import { GameProvider } from '../context/gameContext';

function App() {
  // <div className="absolute bg-blue-300 h-20 w-20 top-1/2 -translate-y-1/2 left-1/2 -mt-10 -ml-10">
  // </div>
  // <div className="relative top-1/2 -translate-y-1/2 grid grid-cols-3 bg-red-100 justify-center w-4/5 mx-auto">

  document.body.classList.add('bg-gray-200');

  return (
    <GameProvider>
      <div className="h-90vh md:h-screen flex flex-col items-center justify-around">
        <GameBoard />
        <Rematch />
        <Results classes="flex justify-between w-4/5 max-w-sm sm:text-xl xs:text-lg text-sm text-center" />
      </div>
    </GameProvider>
  );
}

export default App;
