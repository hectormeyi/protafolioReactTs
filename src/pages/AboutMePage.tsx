// src/pages/AboutMePage.tsx

import styles from './AboutMePage.module.css';
import profileImage from '../assets/programador.png';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiSpringboot, SiExpress, SiHtml5, SiCss3, SiMysql, SiMongodb, SiGit, SiFigma } from 'react-icons/si';
import { FaJava, FaNpm, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
  { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
  { name: 'React', icon: <SiReact style={{ color: '#61DAFB' }} /> },
  { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#339933' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
  { name: 'Spring Boot', icon: <SiSpringboot style={{ color: '#6DB33F' }} /> },
  { name: 'Express.js', icon: <SiExpress style={{ color: '#404d59' }} /> },
  { name: 'HTML5', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
  { name: 'CSS3', icon: <SiCss3 style={{ color: '#1572B6' }} /> },
  { name: 'MySQL', icon: <SiMysql style={{ color: '#4479A1' }} /> },
  { name: 'SQL Server', icon: <FaDatabase style={{ color: '#CC2927' }} /> },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} /> },
  { name: 'Git', icon: <SiGit style={{ color: '#F05032' }} /> },
  { name: 'NPM', icon: <FaNpm style={{ color: '#CB3837' }} /> },
  { name: 'Figma', icon: <SiFigma style={{ color: '#F24E1E' }} /> },
];

const AboutMePage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.paragraph}>
            My 15-month journey in software development is fueled by a deep passion for technology and a fascination with building solutions that solve real-world problems. I see programming as more than just writing code; it's a continuous path of creative problem-solving and constant learning.
          </p>
          <p className={styles.paragraph}>
            I've had the opportunity to apply my skills in practical settings, actively participating in the <strong>internal software factory at SENA</strong> and the <strong>development seedbed at the Cognitus Foundation</strong>. In these environments, I collaborated on real-world projects, building software for clients such as the <strong>Colombo Americano de Armenia</strong> and other businesses, allowing me to gain valuable professional experience.
          </p>
          <p className={styles.paragraph}>
            Beyond the screen, I believe in a balanced life. I enjoy the strategic thinking of chess ♟️ and stay active at the gym 💪. I'm also an avid reader and am dedicated to mastering English, always seeking new ways to expand my knowledge.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src={profileImage} alt="Héctor David Mejía Martínez" className={styles.profileImage} />
          <a
            href="/cv.png" // Recuerda poner tu CV en la carpeta 'public'
            download="Hector_Mejia_CV.pdf"
            className={styles.cvButton}
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Tech Stack</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;