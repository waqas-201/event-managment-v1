import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { pageVariants } from '../lib/utils';

const BlogPostPage = () => {
  const { slug } = useParams();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Blog Post | Elegant Events</title>
        <meta name="description" content="Read our detailed insights about event planning" />
      </Helmet>
      
      <div className="pt-20">
        <h1>Blog Post: {slug}</h1>
        {/* Content will be added in the next iteration */}
      </div>
    </motion.div>
  );
};

export default BlogPostPage;