// utilities.ts
export const playSound = (type: 'success' | 'fail', step: number = 0) => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'sine';
  if (type === 'success') {
    oscillator.frequency.setValueAtTime(200 + step * 50, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
  } else {
    oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  }

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
};

export const playSuccessSound = () => {
  const audioContext = new AudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5);
};
