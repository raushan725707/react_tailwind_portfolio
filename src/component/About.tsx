
import raushanimg from '../assets/raushanimg.jpg'
const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>


<div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={raushanimg}
          alt="Raushan Kumar"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />

<div>
      <p className="text-lg leading-7 text-gray-700 dark:text-gray-300">
        I'm <strong>Raushan Kumar</strong>, a passionate <strong>Java Full Stack Developer</strong> with 1+ years of experience in building and deploying scalable web applications using
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> Spring Boot, React (TypeScript), AWS</span> and modern UI frameworks like
        <span className="text-blue-600 dark:text-blue-400 font-semibold"> Tailwind CSS</span>. I enjoy solving real-world problems through clean code, system design, and teamwork.
      </p>
      <p className="mt-4 text-lg leading-7 text-gray-700 dark:text-gray-300">
        I’ve contributed to multiple enterprise and SaaS platforms, working on APIs, authentication, cloud deployment, and front-end components. I'm a quick learner and always eager to adapt to new technologies that make development faster and cleaner.
      </p>
      </div>
      </div>
    </section>
  );
};

export default About;
