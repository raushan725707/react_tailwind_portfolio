const experiences = [
  {
    company: "Synergylabs Technology Pvt Ltd",
    title: "Java Full Stack Developer",
    period: "Nov 2024 – Present | Gurgaon",
    responsibilities: [
      "Developed and maintained REST APIs using Spring Boot and Golang for scalable SaaS platforms.",
      "Deployed backend services to AWS Elastic Beanstalk, utilizing S3 and RDS.",
    ],
  },
  {
    company: "Synergylabs Technology Pvt Ltd",
    title: "Java Developer Intern",
    period: "May 2024 – Nov 2024 | Gurgaon",
    responsibilities: [
      "Migrated legacy Spring Boot apps from Java 8 to Java 17 for performance and maintainability.",
      "Built authentication with JWT and developed approval/notification workflows.",
    ],
  },
  {
    company: "Maiora IT Service and Consulting LTD",
    title: "Java Developer Intern",
    period: "May 2022 – Nov 2023 | Bangalore",
    responsibilities: [
      "Designed REST APIs for enterprise web apps using Spring Boot.",
      "Integrated third-party APIs and contributed to Agile team ceremonies.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-6">Experience</h2>
      <div className="space-y-8 text-gray-700 dark:text-gray-300">
        {experiences.map((exp) => (
          <div key={exp.title + exp.period} className="bg-white dark:bg-gray-800 shadow-md rounded p-6">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
            <p className="text-sm mb-1">{exp.company}</p>
            <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {exp.responsibilities.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
