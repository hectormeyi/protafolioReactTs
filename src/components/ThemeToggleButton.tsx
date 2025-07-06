// src/components/ThemeToggleButton.tsx
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggleButton.module.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // CAMBIO 1: Añadimos el atributo "title" al botón
  // Mostrará un texto u otro dependiendo del tema actual
  return (
    <button
      onClick={toggleTheme}
      className={styles.themeButton}
      title={theme === 'light' ? 'Tema Oscuro' : 'Tema Claro'}
    >
      {/* CAMBIO 2: Añadimos las clases a los iconos */}
      {theme === 'light' ? (
        <FaMoon className={styles.icon} />
      ) : (
        <FaSun className={`${styles.icon} ${styles.sunIcon}`} />
      )}
    </button>
  );
};

export default ThemeToggleButton;