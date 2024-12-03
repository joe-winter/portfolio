import ExternalLinkButton from "./ExternalLinkButton";
import GitHubIcon from "./Icons/GitHubIcon";
import LinkIcon from "./Icons/LinkIcon";

const ProjectCard = ({
  title,
  description,
  github,
  link,
  technologies,
  images,
}) => {
  return (
    <div className="p-4 transform transition-transform duration-300">
      <div className="block max-w-sm p-6 min-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center space-x-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          {github && (
            <ExternalLinkButton url={github} content={<GitHubIcon />} />
          )}
          {link && <ExternalLinkButton url={link} content={<LinkIcon />} />}
        </div>
        <div className="p-2">
          <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg border-2 border-gray-600">
            <img
              className="w-full h-72  object-cover relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              src={images}
              alt="host landing page"
            />
          </div>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center items-center space-x-4 pt-2">
          {technologies &&
            technologies.map((tech) => (
              <img
                className="w-8 h-8 transition duration-200 hover:scale-110 hover:-translate-y-1"
                src={tech}
                alt={tech}
                key={tech}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
