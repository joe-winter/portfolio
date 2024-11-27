import ExternalLinkButton from "./ExternalLinkButton";
import GitHubIcon from "./Icons/GitHubIcon";

const ProjectCard = ({ title, description, github, link }) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex items-center justify-center space-x-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {github && <ExternalLinkButton url={github} content={<GitHubIcon />} />}
        {link && <ExternalLinkButton url={link} content={}/>}
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
