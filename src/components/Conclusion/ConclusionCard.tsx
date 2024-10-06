import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './ConclusionCard.css';

interface ConclusionCardProps {
  level: number;
}

const ConclusionCard: React.FC<ConclusionCardProps> = ({ level }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="conclusion-card">
      <p>🎉 Nível {level} Concluído! 🎉</p>
      <div className="progress-bar"></div>
    </div>
  );
};

export default ConclusionCard;
