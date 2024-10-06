import React from 'react';
import './Ball.css';

interface BallProps {
  color: string;
  onClick: () => void;
  isLit: boolean;
}

const Ball: React.FC<BallProps> = ({ color, onClick, isLit }) => {
  return (
    <div
      className={`ball ${isLit ? 'lit' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      tabIndex={0}
    />
  );
};

export default React.memo(Ball);
