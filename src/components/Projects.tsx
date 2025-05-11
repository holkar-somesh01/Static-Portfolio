import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../utils/Project';

const categories = ['All', 'MERN', 'React Native', 'Static'] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
        >
          Featured Projects
        </motion.h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards or Empty Message */}
        {filteredProjects.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 text-lg mt-20"
          >
            🚧 No Projects Created Yet in this Category. Stay tuned!
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-4 justify-start">
                    {project.githubLink && (
                      <div>
                        {project.Repo ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" cursor-pointer flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        ) : (
                          <div className="cursor-not-allowed flex items-center px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-md text-sm font-medium">
                            <Github className="w-4 h-4 mr-2" />
                            Unavailable
                          </div>
                        )}
                      </div>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                    <span className={`cursor-default text-center px-2 py-1 rounded text-xs ${project.newCategory === "Client" ? "bg-gray-100 text-gray-600" : "bg-green-100 text-green-600 "}`}>
                      {project.newCategory}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
