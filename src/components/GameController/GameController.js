import "./GameController.css";
import { Action, actionForKey } from "../../business/input";
import { playerController } from "../../business/playerController";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);
    handleInput({ action });
  };

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
      spellcheck="false"
    />
  );
};

export default GameController;
