import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { fadeIn } from '../../lib/utils';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/2788492/pexels-photo-2788492.jpeg"
        >
          <source 
            src="https://player.vimeo.com/external/477260057.hd.mp4?s=6b1c32d2e99c1c598c6517bad28b6734c3e681f1&profile_id=175&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn("up", 0.3)}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
            Crafting Unforgettable <span className="text-primary">Event</span> Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            From corporate gatherings to dream weddings, we bring your vision to life with elegance and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
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
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Our Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2 
        }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center pt-4">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;