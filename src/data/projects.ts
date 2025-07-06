// src/data/projects.ts

// Importamos las imágenes desde la carpeta de assets
import cuarzosImg from '../assets/images/projects/cuarzo.png';
import tiendaPcImg from '../assets/images/projects/tiendaPc.png';
import resetasImg from '../assets/images/projects/resetas.png';
import vetsofImg from '../assets/images/projects/vetsof.png';
import todoListImg from '../assets/images/projects/todo-list.png';
import countriesImg from '../assets/images/projects/contries.png';

// Definimos un tipo para asegurar que todos los proyectos tengan la misma estructura
export interface Project {
  title: string;
  description: string;
  image: string; // La imagen ahora es una variable importada
  link: string;
  tags: string[]; // Añadimos etiquetas para las tecnologías
}

// Exportamos la lista de proyectos
export const projects: Project[] = [
  {
    title: "Tienda de cuarzos",
    description: "Backend para un e-commerce de cuarzos, desarrollado en equipo.",
    image: cuarzosImg,
    link: "https://github.com/santiagoMayaH/backendCuarzos",
    tags: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "TiendaPc API",
    description: "API REST para una tienda de PC con autenticación JWT, desarrollada en TypeScript.",
    image: tiendaPcImg,
    link: "https://github.com/hectormeyi/tiendaPc",
    tags: ["TypeScript", "Node.js", "JWT"]
  },
  {
    title: "Recetas Travel",
    description: "Una aplicación web que presenta un recorrido por las mejores recetas del mundo.",
    image: resetasImg,
    link: "https://github.com/hectormeyi/resetasTravel",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Prototipo Vetsof",
    description: "Prototipo de un sistema de gestión para veterinarias, planeado con arquitectura hexagonal.",
    image: vetsofImg,
    link: "https://github.com/hectormeyi/prototipoVetsof",
    tags: ["Java", "React", "Figma"]
  },
  {
    title: "Lista de Tareas",
    description: "Proyecto grupal del semillero Cognitus para gestionar tareas diarias.",
    image: todoListImg,
    link: "https://github.com/hectormeyi/lista-de-tareas",
    tags: ["React", "CSS"]
  },
  {
    title: "Countries App",
    description: "Aplicación para explorar información de países, desarrollada como parte de un curso de CISCO.",
    image: countriesImg,
    link: "https://github.com/hectormeyi/countries-app-hectorDavid",
    tags: ["React", "API"]
  }
];