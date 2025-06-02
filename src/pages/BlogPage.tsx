import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { pageVariants } from '../lib/utils';

const BlogPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Blog | Elegant Events</title>
        <meta name="description" content="Read our latest articles about event planning tips, trends, and industry insights" />
      </Helmet>
      
      <div className="pt-20">
        <h1>Blog Page</h1>
        {/* Content will be added in the next iteration */}
      </div>
    </motion.div>
  );
};

export default BlogPage;