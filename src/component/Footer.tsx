const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-gray-900 text-center py-6 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">© {new Date().getFullYear()} Raushan Kumar. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:raushan725707@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            raushan725707@gmail.com
          </a>
          <a
            href="https://github.com/raushan725707"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raushan-kumar-1558032ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
