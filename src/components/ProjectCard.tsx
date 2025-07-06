// src/components/ProjectCard.tsx
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../data/projects'; // Importamos el tipo
 // Importamos el tipo
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.cardTags}>
          {project.tags.map(tag => (
            <span key={tag} className={styles.cardTag}>{tag}</span>
          ))}
        </div>
        <p className={styles.cardDescription}>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          <FaGithub /> Ver en GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;