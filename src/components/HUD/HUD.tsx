import React from 'react';
import { FaRedo, FaBars, FaMousePointer, FaClock } from 'react-icons/fa';
import './HUD.css';

interface HUDProps {
  level: number;
  elapsedTime: string;
  clickCount: number;
  onReset: () => void;
  onReturnToMenu: () => void;
  renderDifficulty: (level: number) => JSX.Element;
}

const HUD: React.FC<HUDProps> = ({ level, elapsedTime, clickCount, onReset, onReturnToMenu, renderDifficulty }) => {
  return (
    <div className="hud">
      <div className="level-info">
        <p className="level-title">Nível: {level}</p>
        {renderDifficulty(level)}
      </div>
      <div className="controls">
        <button className="hud-button" onClick={onReset}>
          <FaRedo />
        </button>
        <div className="timer">
          <FaClock className="icon" /> {elapsedTime}
        </div>
        <div className="click-counter">
          <FaMousePointer className="icon" /> {clickCount}
        </div>
        <button className="hud-button" onClick={onReturnToMenu}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default HUD;
