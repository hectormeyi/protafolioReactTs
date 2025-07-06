// src/components/Footer.tsx
import styles from './Footer.module.css';
// 1. Se importa el icono de Discord
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/hectormeyi" // <-- CAMBIA ESTO
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-david-mejia-martinez-00176b2b9/" // <-- CAMBIA ESTO
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
          {/* 2. Se añade el nuevo enlace para Discord */}
          <a
            href="https://discord.com/users/1213183413670903818" // <-- CAMBIA ESTO
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className={styles.socialIcon}
          >
            <FaDiscord />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>© {currentYear} Su servidor Hector David Mejia M. Todos los derechos reservados.</p>
          <p className={styles.madeWith}>
            Hecho con ❤️ usando ReactTs y CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;