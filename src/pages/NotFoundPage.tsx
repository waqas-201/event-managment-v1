import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, PartyPopper, Home } from 'lucide-react';
import { pageVariants } from '../lib/utils';

const NotFoundPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                y: [0, -10, 0, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="inline-block"
            >
              <PartyPopper size={80} className="mx-auto text-primary" />
            </motion.div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 gradient-text">404</h1>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Event Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Oops! It seems the event you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Home size={18} />
                Go Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                <Calendar size={18} />
                Plan an Event
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;