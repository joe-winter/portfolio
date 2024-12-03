import ExternalLinkButton from "./ExternalLinkButton";
import GitHubIcon from "./Icons/GitHubIcon";
import LinkIcon from "./Icons/LinkIcon";
// import image from "../assets/images/MakersUIGame/host-landing.png"
const ProjectCard = ({ title, description, github, link, technologies, image }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-105 dark:bg-gray-800 dark:border-gray-700 dark:hover:scale-105">
      <div className="flex items-center justify-center space-x-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {github && <ExternalLinkButton url={github} content={<GitHubIcon />} />}
        {link && <ExternalLinkButton url={link} content={<LinkIcon />} />}
      </div>
      <div className="p-4">
        <img className="rounded-lg"src={image} alt="host landing page" />
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex items-center space-x-2">
        <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white justify-start">Tech: </span>
        {technologies && technologies.map((tech) => (<img className="w-8 h-8 text-gray-800 dark:text-white" src={tech} alt={tech} key={tech}/>))}
      </div>
    </div>
  );
};

export default ProjectCard;
