import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { ReactIcon, SocketIoIcon } from "../Components/Icons/TechIcons";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/public/constants/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((e) => console.log("Error fecthing projects", e));
  }, []);

  console.log("Projects", projects);

  return (
    <div className="flex-auto justify-center p-96">
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
            technologies={[<ReactIcon key={1}/>]}
          />
        ))}
    </div>
  );
}
