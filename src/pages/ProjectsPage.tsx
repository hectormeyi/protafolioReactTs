// src/pages/ProjectsPage.tsx
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Importamos los datos
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>Mis Proyectos</h1>
      <p className={styles.subtitle}>
        Una selección de proyectos en los que he trabajado, desde APIs hasta aplicaciones web completas.
      </p>
      <div className={styles.projectsGrid}>
        {/* Usamos .map para crear una tarjeta por cada proyecto */}
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;