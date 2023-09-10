import Menu from "../Menu/Menu";
import { useGameOver } from "../../hooks/useGameOver";
import Tetris from "../Tetris/Tetris";
import "./Game.css"

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
  };

  return (
    <>
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </>
  );
};

export default Game;
