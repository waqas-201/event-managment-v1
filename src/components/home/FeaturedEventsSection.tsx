import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'PSL Opening Ceremony',
    description: 'Spectacular opening ceremony of Pakistan Super League at National Stadium Karachi',
    image: 'https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg',
    category: 'sports',
  },
  {
    id: 2,
    title: 'Traditional Pakistani Wedding',
    description: 'Elegant Mehndi ceremony with traditional decorations in Lahore',
    image: 'https://images.pexels.com/photos/2941367/pexels-photo-2941367.jpeg',
    category: 'wedding',
  },
  {
    id: 3,
    title: 'Tech Summit Islamabad',
    description: 'Annual technology conference bringing together industry leaders',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg',
    category: 'corporate',
  },
  {
    id: 4,
    title: 'Karachi Eat Festival',
    description: 'Pakistan\'s biggest food festival celebrating culinary diversity',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    category: 'festival',
  },
  {
    id: 5,
    title: 'Pakistan Day Parade',
    description: 'Grand celebration of Pakistan Day with military parade',
    image: 'https://images.pexels.com/photos/2788492/pexels-photo-2788492.jpeg',
    category: 'national',
  },
];

const FeaturedEventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

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
    <section className="py-20 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Featured</span> Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of stunning events we've had the pleasure of bringing to life.
            Each event is carefully crafted to exceed expectations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="min-w-full px-4"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col justify-center"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {event.description}
                      </p>
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View Case Study
                        <ChevronRight size={18} className="ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;