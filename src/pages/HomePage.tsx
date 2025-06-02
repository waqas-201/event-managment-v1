import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedEventsSection from '../components/home/FeaturedEventsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';
import { pageVariants } from '../lib/utils';

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Elegant Events | Professional Event Planning</title>
        <meta name="description" content="Make your events memorable with our professional event planning services" />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <FeaturedEventsSection />
      <TestimonialsSection />
      <CtaSection />
    </motion.div>
  );
};

export default HomePage;