import React from 'react';
import './LevelSelect.css';

interface LevelSelectProps {
  onSelect: (level: number) => void;
  completedLevels: number[];
  unlockedLevels: number[];
}

const LevelSelect: React.FC<LevelSelectProps> = ({ onSelect, completedLevels, unlockedLevels }) => {
  const levels = [
    { level: 1, difficulty: 2 },
    { level: 2, difficulty: 3 },
    { level: 3, difficulty: 5 },
  ];

  const renderDifficulty = (difficulty: number) => {
    const totalDots = 5;
    return (
      <div className="difficulty-dots">
        {[...Array(totalDots)].map((_, index) => (
          <span key={index} className={`dot ${index < difficulty ? 'filled' : ''}`}></span>
        ))}
      </div>
    );
  };

  return (
    <div className="level-select">
      <h2 className="level-select-title">Selecione um Nível</h2>
      <div className="level-buttons">
        {levels.map(({ level, difficulty }) => (
          <button
            key={level}
            className={`level-button ${completedLevels.includes(level) ? 'completed' : ''} ${unlockedLevels.includes(level) ? 'unlocked' : 'locked'
              }`}
            onClick={() => unlockedLevels.includes(level) && onSelect(level)}
            disabled={!unlockedLevels.includes(level)}
          >
            <span className="level-number">{level}</span>
            {renderDifficulty(difficulty)}
            {completedLevels.includes(level) && <span className="status">✔ Concluído</span>}
            {!unlockedLevels.includes(level) && <span className="lock-icon">🔒</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelect;
