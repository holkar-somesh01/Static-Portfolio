import { motion } from 'framer-motion';
import { Code2, Smartphone, Database, Server } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code2, description: 'HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap, Electron.js' },
  { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Expo' },
  { name: 'Backend Development', icon: Server, description: 'Node.js, Express.js, Micro-Services, ' },
  { name: 'Database Management', icon: Database, description: 'MongoDB, Firebase' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold overflow-hidden text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in the MERN stack and React Native.
            I love building scalable web applications and mobile apps that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}