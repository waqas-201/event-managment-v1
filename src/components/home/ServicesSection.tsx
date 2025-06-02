import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Heart, Briefcase, Cake, Building, Users, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const services = [
  {
    id: 'wedding',
    title: 'Wedding Planning',
    description: 'Create your dream wedding with our expert planners who handle every detail from venues to vendors.',
    icon: Heart,
    color: 'text-pink-500',
    bgColor: 'bg-pink-100 dark:bg-pink-950',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Impress clients and colleagues with professional corporate events that reflect your brand values.',
    icon: Briefcase,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100 dark:bg-blue-950',
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    description: 'Celebrate another year with a customized birthday experience that creates lasting memories.',
    icon: Cake,
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-950',
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Trade Shows',
    description: 'Showcase your products and services with engaging exhibition displays that attract attention.',
    icon: Building,
    color: 'text-teal-500',
    bgColor: 'bg-teal-100 dark:bg-teal-950',
  },
  {
    id: 'private',
    title: 'Private Parties',
    description: 'Host exclusive gatherings with personalized themes, catering, and entertainment options.',
    icon: Users,
    color: 'text-amber-500',
    bgColor: 'bg-amber-100 dark:bg-amber-950',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive event planning services tailored to your specific needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className={cn("w-14 h-14 rounded-lg mb-5 flex items-center justify-center", service.bgColor)}>
                  <service.icon className={cn("w-7 h-7", service.color)} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn More
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
            <ChevronRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;