import ProjectCard from "../Components/ProjectCard";
import projects from "../../public/constants/projects";

export default function Projects() {

  console.log("Projects", projects);

  return (
    <div className="flex-auto justify-center p-32 mx-32">
      <h4 className="text-black dark:text-white text-3xl font-bold p-10">
        Projects
      </h4>
      {projects &&
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            technologies={project.technologies}
            images={project.images}
          />
        ))}
    </div>
  );
}
