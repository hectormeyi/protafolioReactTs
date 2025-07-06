// src/components/Typewriter.tsx
import { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

interface TypewriterProps {
  text: string;
  speed?: number; // Velocidad en milisegundos
}

const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  // Estado para guardar el texto que se está mostrando
  const [displayedText, setDisplayedText] = useState('');
  // Estado para saber en qué letra del texto original vamos
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Si aún no hemos mostrado todo el texto...
    if (currentIndex < text.length) {
      // ...configuramos un temporizador para añadir la siguiente letra.
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      // Limpiamos el temporizador si el componente se desmonta
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]); // El efecto se ejecuta cada vez que cambia el índice

  return (
    <h1 className={styles.typewriterText}>
      {displayedText}
      {/* El cursor parpadeante se añade con CSS */}
      <span className={styles.cursor}></span>
    </h1>
  );
};

export default Typewriter;