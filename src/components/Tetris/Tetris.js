import "./Tetris.css";
import Board from "../Board/Board";
import { useBoard } from "../../hooks/useBoard";
import GameStats from "../GameStats/GameStats";
import { useGameStats } from "../../hooks/useGameStats";
import Previews from "../Previews/Previews";
import { usePlayer } from "../../hooks/usePlayer";
import GameController from "../GameController/GameController";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;
