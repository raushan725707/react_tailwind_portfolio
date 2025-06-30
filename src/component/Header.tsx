type HeaderProps = {
  toggleDarkMode: () => void;
};

const Header = ({ toggleDarkMode }: HeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Raushan Kumar</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">About</a>
          <a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-300">Skills</a>
          <a href="#experience" className="hover:text-blue-500 dark:hover:text-blue-300">Experience</a>
          <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300">Projects</a>
          <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</a>
          <a
    href="/Raushan_Kumar_Java_Fullstack_Resume.docx"

  download
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm mt-4"
>
  📄 Download Resume
</a>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-xs hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Toggle Dark Mode
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
