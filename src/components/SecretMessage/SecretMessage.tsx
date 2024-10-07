import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './SecretMessage.css';
import familiaImg from '../../assets/familia.png';

function SecretMessage() {
  useEffect(() => {
    // Função para lançar os confetes
    const launchConfetti = () => {
      confetti({
        particleCount: Math.floor(Math.random() * 100) + 100,
        spread: Math.random() * (100 - 40) + 40,
        origin: { y: (Math.random() * 100) / 100, x: (Math.random() * 100) / 100 },
        colors: [
          `#${(Math.random() * 0x7f + 0x80).toString(16) + '00' + (Math.random() * 0xff << 0).toString(16)}`, // Violet tones
          `#${(Math.random() * 0xff << 0).toString(16) + 'a500'}`, // Orange tones
          `#${(Math.random() * 0xff << 0).toString(16) + '00ff'}`, // Blue tones
          `#${(Math.random() * 0xff << 0).toString(16) + 'ff00'}`, // Red tones
          `#${(Math.random() * 0xff << 0).toString(16) + 'ffff'}`, // White tones
        ],
      });
    };

    // Lançar confetes ao montar o componente
    for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
      launchConfetti();
    }

    // Lançar mais confetes a cada intervalo aleatório entre 2 e 4 segundos
    const interval = setInterval(
      () => {
        for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) {
          launchConfetti();
        }
      },
      Math.floor(Math.random() * 2000) + 2000
    );

    // Limpar intervalos quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="secret-message-container">
      <h1 className="secret-message-title">🎉 Surpresa! 🎉</h1>
      <p className="secret-message-text">
        Lajuro e Titta vão ser papais! 💕
      </p>
      <div className="media-container">
        <img src={familiaImg} alt="Surpresa" className="secret-image" />
      </div>
    </div>
  );
}

export default SecretMessage;
