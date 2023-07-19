import { useState } from "react";
import "../styles/GameBoard.css";
import { Scoreboard } from "./Scoreboard";

function GameBoard() {
  const [gameNumbers, setGameNumbers] = useState([1]);

  const addNewGame = () => {
    setGameNumbers((prevGameNumbers) => [
      ...prevGameNumbers,
      gameNumbers.length + 1,
    ]);
  };
  return (
    <div className="main__section">
      <div className="games__section">
        {gameNumbers.map((gameNumber) => (
          <Scoreboard key={gameNumber} gameNumber={gameNumber} />
        ))}
      </div>
      <button onClick={addNewGame}>Add More Games</button>
    </div>
  );
}

export default GameBoard;
