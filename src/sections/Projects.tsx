import { ProjectCard } from "../components/ProjectCard"
import { ProjectsData } from "../data/ProjectsData"

const Projects = () => {
    return (
        <section id="Projects">
            <h2>Projetos</h2>
            <div className="Container">
            <ProjectCard projects={ProjectsData}/>
            </div>
        </section>
    )
}

export {Projects}

