type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

const ProjectCard = ({ title, description, tech, github }: Props) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-600 my-2">{description}</p>
    <p className="text-sm text-gray-500">Tech: {tech.join(", ")}</p>
    <a href={github} target="_blank" className="text-blue-600 inline-block mt-2">GitHub →</a>
  </div>
);

export default ProjectCard;
