import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, PartyPopper } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 dark:bg-primary/80 z-10"></div>
        <img
          src="https://images.pexels.com/photos/2941367/pexels-photo-2941367.jpeg"
          alt="Pakistani wedding celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PartyPopper size={48} className="mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Let's Make Your Next Event Extraordinary
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Whether you're planning a wedding, corporate event, or special celebration, 
              our team of experts is ready to bring your vision to life. Let's create unforgettable memories together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  Get Started
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;