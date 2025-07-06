// src/pages/HomePage.tsx

import Typewriter from "../components/Typewriter";
import styles from "./HomePage.module.css";
import profileImage from "../assets/programador.png";
import { useTheme } from "../context/ThemeContext";

import { useRef } from "react";

const HomePage = () => {
  const introText =
    "¡Hello, my name is Héctor David Mejía Martínez, I am a Full Stack Web Developer!";
  const { theme } = useTheme();
  const keyRef = useRef(0);

  // Cambia la key del Typewriter cuando cambia el tema para reiniciar la animación
  // (Esto fuerza el remount del componente)
  // El key depende del tema, así que cada vez que cambie, el Typewriter se reinicia
  keyRef.current = theme === "light" ? 1 : 2;

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContent}>
        <Typewriter key={keyRef.current} text={introText} speed={75} />
        <p className={styles.subtitle}>
          "I specialize in creating modern, functional web solutions. I enhance my projects by leveraging AI for innovative features and am committed to producing clear, well-structured documentation for maintainability and clarity."
        </p>
        {/* Aquí puedes añadir un botón de "Ver mis proyectos" o similar */}
      </div>
      <div className={styles.rightContent}>
        <img
          src={profileImage}
          alt="Perfil de Héctor"
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default HomePage;
