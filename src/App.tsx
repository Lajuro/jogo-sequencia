import { useState, useEffect } from 'react';
import Ball from './components/Ball/Ball';
import HUD from './components/HUD/HUD';
import LevelSelect from './components/LevelSelect/LevelSelect';
import SecretMessage from './components/SecretMessage/SecretMessage';
import ConclusionCard from './components/Conclusion/ConclusionCard';
import { playSound, playSuccessSound } from './utils/utilities';
import './App.css';

function App() {
  const [level, setLevel] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([0, 2, 4, 1, 5, 3]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [clickCount, setClickCount] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [showConclusion, setShowConclusion] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState<string>('00:00');

  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);

  const colors = ['#4a90e2', '#457b9d', '#1d3557', '#f4a261', '#e76f51', '#2a9d8f'];

  useEffect(() => {
    if (level > 0 && !isCompleted) {
      setStartTime(new Date());
    }
  }, [level]);

  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        const now = new Date();
        const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
        const minutes = String(Math.floor(diff / 60)).padStart(2, '0');
        const seconds = String(diff % 60).padStart(2, '0');
        setElapsedTime(`${minutes}:${seconds}`);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTime]);

  const handleBallClick = (index: number) => {
    setClickCount(clickCount + 1);
    if (index === sequence[currentStep]) {
      playSound('success', currentStep);
      setUserSequence([...userSequence, index]);
      setCurrentStep(currentStep + 1);

      if (currentStep + 1 === sequence.length) {
        setIsCompleted(true);
        setCompletedLevels([...completedLevels, level]);
        playSuccessSound();
        setShowConclusion(true);

        setTimeout(() => {
          setShowConclusion(false);
          setUnlockedLevels([...unlockedLevels, level + 1]);
          setLevel(0);
          resetGame();
        }, 3000);
      }
    } else {
      playSound('fail');
      resetGame();
    }
  };

  const resetGame = () => {
    setUserSequence([]);
    setClickCount(0);
    setCurrentStep(0);
    setIsCompleted(false);
    setStartTime(new Date());
    setElapsedTime('00:00');
  };

  const handleLevelSelect = (selectedLevel: number) => {
    resetGame();
    setLevel(selectedLevel);
    if (selectedLevel === 2) {
      setSequence([1, 3, 5, 0, 2, 4]);
    } else if (selectedLevel === 3) {
      setSequence([4, 2, 0, 1, 3, 5]);
    } else {
      setSequence([0, 2, 4, 1, 5, 3]);
    }
  };

  const renderDifficulty = (level: number) => {
    const difficulties = [2, 3, 5];
    const difficulty = difficulties[level - 1];
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
    <div className="game-container">
      {level === 0 && !showConclusion && (
        <LevelSelect
          onSelect={handleLevelSelect}
          completedLevels={completedLevels}
          unlockedLevels={unlockedLevels}
        />
      )}
      {level > 0 && !showConclusion && level !== 3 && (
        <>
          <HUD
            level={level}
            elapsedTime={elapsedTime}
            clickCount={clickCount}
            onReset={resetGame}
            onReturnToMenu={() => setLevel(0)}
            renderDifficulty={renderDifficulty}
          />
          <div className="ball-container">
            {colors.map((color, index) => (
              <Ball
                key={index}
                color={color}
                onClick={() => handleBallClick(index)}
                isLit={userSequence.includes(index)}
              />
            ))}
          </div>
        </>
      )}
      {showConclusion && <ConclusionCard level={level} />}
      {level === 3 && !showConclusion && <SecretMessage />}
    </div>
  );
}

export default App;
