import imageLogo from "../assets/logovml.png"
import styles from './styles/ProjectCard.module.css'
interface ProjectType {
  name: string;
  description: string;
  link: string;
  imageUrl: string | null;
}

type ProjectCardProps = {
  projects: ProjectType[];
};

const ProjectCard = ({ projects }: ProjectCardProps) => {
  return (
    <ul className={styles.ProjectInfo}>
      {projects.map((project, index) => (
        <li key={`${project.name}-${index}`}>
            <a href={project.link} target="_blank">
            <img src={project.imageUrl || imageLogo} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            </a>
        </li>
      ))}
    </ul>
  );
};

export { ProjectCard };
