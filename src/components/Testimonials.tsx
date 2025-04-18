import { motion } from 'framer-motion';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Pankaj Holkar',
    role: 'Co-Owner',
    company: 'Jay Bhadra Construction',
    image: 'https://res.cloudinary.com/dcpsngsld/image/upload/v1741415760/tfmf2t9rybrwojlcrsrz.jpg',
    testimonial:
      'Someshwar delivered a modern, responsive construction website for us with great attention to detail. His communication and delivery speed were impressive.'
  },
  {
    id: '2',
    name: 'Prashant Solanke',
    role: 'Co-Owner',
    company: 'Jay Bhadra Construction',
    image: 'https://res.cloudinary.com/dcpsngsld/image/upload/v1741450618/t14jmiv79ofrvftk98jw.jpg',
    testimonial:
      'We are highly satisfied with the website developed by Someshwar. It perfectly showcases our work and made our online presence much stronger.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}






