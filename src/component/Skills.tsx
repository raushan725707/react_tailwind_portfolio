const skills = {
  Languages: ["Java", "JavaScript", "TypeScript", "SQL"],
  "Backend Frameworks": ["Spring Boot", "Spring Security", "JPA", "Hibernate", "REST APIs"],
  Frontend: ["React", "React Router", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
  Cloud: ["AWS (EC2, S3, RDS, Elastic Beanstalk)"],
  Databases: ["PostgreSQL", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{category}</h3>
            <ul className="list-disc ml-5 space-y-1">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
