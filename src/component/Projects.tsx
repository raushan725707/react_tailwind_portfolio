type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "Ecommerce Web App",
    description:
      "A full-featured online store with product listings, cart, checkout, and Razorpay integration for payments.",
    technologies: ["React", "Tailwind CSS", "Spring Boot", "Razorpay"],
    github: "https://github.com/raushan725707/ecommerce-app",
  },
  {
    title: "WhatsApp-like Web App",
    description:
      "A real-time messaging app with user authentication, private/group chats, and WebSocket integration.",
    technologies: ["React", "WebSocket", "Spring Boot", "Tailwind CSS"],
    github: "https://github.com/raushan725707/whatsapp-clone",
  },
  {
    title: "DreamDen – AI Interior Design",
    description:
      "An AI-powered interior design app that suggests designs and allows image sharing. Integrated LemonSqueezy for subscriptions.",
    technologies: ["Spring Boot", "React", "LemonSqueezy", "Tailwind"],
    github: "https://github.com/raushan725707/dreamden",
  },
  {
    title: "IPsaa CRM Modernization",
    description:
      "Revamped CRM system with leave management, approval workflows, and real-time notifications via API.",
    technologies: ["Java 17", "React", "Tailwind", "Spring Boot"],
    github: "https://github.com/raushan725707/crm-modernization",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>Tech:</strong> {project.technologies.join(", ")}
            </p>
            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-4 text-sm text-blue-500 dark:text-blue-300 hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
