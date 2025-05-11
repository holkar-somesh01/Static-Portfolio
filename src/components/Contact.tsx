import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
});

type FormData = z.infer<typeof formSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const phoneNumber = "918482816761";
      const whatsappMessage = `New Contact Form Submission:
          Name: ${data.name}
          Email: ${data.email}
          Message: ${data.message}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      reset();
    } catch (error) {
      toast.error(`Submission failed, ${error}`)
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl overflow-hidden mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-8">
              {[
                { Icon: Mail, title: 'Email', value: 'someshwarsholkar22@gmail.com' },
                { Icon: Phone, title: 'Phone', value: '+91 8482816761' },
                { Icon: MapPin, title: 'Location', value: 'Chhatrapati Sambhajinagar, MH India' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={`${item.title === "Email" ? `mailto:${item.value}` : item.title === "Phone" ? `tel:${item.value}` : ""}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <item.Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  {...register('name')}
                  id="name"
                  className={`w-full px-4 py-3 pr-10 rounded-lg border-2 ${errors.name
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                    } dark:bg-gray-700 dark:text-white transition-all`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <AlertCircle className="absolute right-3 top-10 text-red-500 w-5 h-5" />
                )}
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${errors.email
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                    } dark:bg-gray-700 dark:text-white transition-all`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <AlertCircle className="absolute right-3 top-10 text-red-500 w-5 h-5" />
                )}
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={2}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                    } dark:bg-gray-700 dark:text-white transition-all`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <AlertCircle className="absolute right-3 top-10 text-red-500 w-5 h-5" />
                )}
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 transition-all duration-300 font-medium text-lg shadow-md"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}