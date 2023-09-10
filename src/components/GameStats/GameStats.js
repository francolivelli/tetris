import React from "react";
import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Nivel</li>
      <li className="value">{level}</li>
      <li>Líneas pendientes</li>
      <li className="value">{linesToLevel}</li>
      <li>Puntos</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
