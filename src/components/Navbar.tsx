// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Héctor David
        </Link>

        <ul className={styles.navList}>
          {/* NUEVO: Enlace a la página de inicio */}
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/sobre-mi" className={styles.navLink}>About Me</Link>
          </li>
          <li>
            <Link to="/proyectos" className={styles.navLink}>Projects</Link>
          </li>
          <li>
            <Link to="/contacto" className={styles.navLink}>Contact</Link>
          </li>
        </ul>

        <ThemeToggleButton />
      </nav>
    </header>
  );
};

export default Navbar;