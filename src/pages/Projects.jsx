import ProjectCard from "../Components/ProjectCard";
import projects from "../projects";

export default function Projects() {

  return (
    <div className="flex flex-col justify-center items-center mt-48">
      <h4 className="text-black dark:text-white text-3xl font-bold">
        Projects
      </h4>
      <div className="grid grid-cols-1 mt-12">
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
    </div>
  );
}
