import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { pageVariants } from '../lib/utils';

const portfolioItems = [
  {
    id: 1,
    title: 'HBL Annual Conference 2023',
    category: 'Corporate Events',
    image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg',
    videoUrl: 'https://www.youtube.com/embed/example1',
  },
  {
    id: 2,
    title: 'Traditional Mehndi Celebration',
    category: 'Wedding Events',
    image: 'https://images.pexels.com/photos/2941367/pexels-photo-2941367.jpeg',
    videoUrl: 'https://www.youtube.com/embed/example2',
  },
  {
    id: 3,
    title: 'PSL Opening Ceremony',
    category: 'Sports Events',
    image: 'https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg',
    videoUrl: 'https://www.youtube.com/embed/example3',
  },
  {
    id: 4,
    title: 'Karachi Eat Festival',
    category: 'Food Events',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    videoUrl: 'https://www.youtube.com/embed/example4',
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Portfolio | RS Media Solution</title>
        <meta name="description" content="Explore our portfolio of successfully executed events across Pakistan" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Portfolio showcase"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-secondary">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Showcasing our finest work across Pakistan's most prestigious events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-secondary text-sm font-medium mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video mb-4">
                    <iframe
                      src={item.videoUrl}
                      title={item.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Details
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioPage;