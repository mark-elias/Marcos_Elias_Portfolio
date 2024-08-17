import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectData";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
