import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Settings } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom web applications using the MERN stack with modern UI/UX design principles.',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using React Native and Expo.',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Scalable backend solutions with Node.js, Express, and MongoDB.',
    icon: 'Database'
  },
  {
    id: '4',
    title: 'API Integration',
    description: 'Third-party API integration and custom API development.',
    icon: 'Settings'
  }
];

const iconMap = {
  Globe,
  Smartphone,
  Database,
  Settings
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional development services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}