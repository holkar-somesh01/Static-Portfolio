import { Github, Linkedin, Heart, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-600 text-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text- dark:text-white">
              Someshwar Holkar
            </h3>
            <p className=" dark:text-gray-300">
              Full-stack developer specializing in MERN stack and React Native development.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text- dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text--900 dark:text-white">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/holkar-somesh01"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/someshwar-holkar-819503314"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/soma_patil.24"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="dark:text-gray-300 text-sm">
              © {currentYear} Someshwar Holkar. All rights reserved.
            </p>
            <p className="flex items-center dark:text-gray-300 text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Someshwar Holkar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}