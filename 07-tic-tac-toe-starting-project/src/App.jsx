import { useState } from "react";


import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';

      if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        activePlayer = 'O';
      }

  return activePlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer } , ...prevTurns];
      
      return updatedTurns;
    });

  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={"Player 1"} symbol={"X"} isActive={activePlayer === 'X'}/>
          <Player name={"Player 2"} symbol={"O"} isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
