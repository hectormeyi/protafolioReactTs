// src/components/Footer.tsx
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/tu-usuario" // <-- CAMBIA ESTO
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/tu-usuario" // <-- CAMBIA ESTO
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© {currentYear} Tu Nombre. Todos los derechos reservados.</p>
          <p className={styles.madeWith}>
            Hecho con ❤️ usando React y CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;