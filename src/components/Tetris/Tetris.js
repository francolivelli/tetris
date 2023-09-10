import "./Tetris.css";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";
import GameStats from "../GameStats/GameStats";
import { useGameStats } from "../../hooks/useGameStats";
import Previews from "../Previews/Previews";
import { usePlayer } from "../../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });
  const [player, setPlayer, resetPlayer] = usePlayer();

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
};

export default Tetris;
