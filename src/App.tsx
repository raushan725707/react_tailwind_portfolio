import Header from "../src/component/Header";
import About from "../src/component/About";
import Skills from "../src/component/Skills";
import Experience from "../src/component/Experience";
import Projects from "../src/component/Projects";
import Footer from "../src/component/Footer";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans min-h-screen transition-colors duration-300">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
        <main className="max-w-6xl mx-auto px-4 py-10 space-y-20">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
