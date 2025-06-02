import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Quote } from 'lucide-react';
import { pageVariants } from '../lib/utils';

const clients = [
  { 
    id: 1, 
    name: 'HBL', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Habib_Bank_Limited_logo.png'
  },
  { 
    id: 2, 
    name: 'Jazz', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Jazz_Pakistan_logo.png'
  },
  { 
    id: 3, 
    name: 'K-Electric', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/K-Electric_logo.png'
  },
  { 
    id: 4, 
    name: 'PSL', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Pakistan_Super_League_Logo.png'
  },
  { 
    id: 5, 
    name: 'Ufone', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Ufone_logo.png'
  },
  { 
    id: 6, 
    name: 'NBP', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/National_Bank_of_Pakistan_logo.png'
  },
  { 
    id: 7, 
    name: 'PIA', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pakistan_International_Airlines_logo.png'
  },
  { 
    id: 8, 
    name: 'Engro', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Engro_Corporation_logo.png'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'Marketing Director, HBL',
    quote: 'RS Media Solution delivered an exceptional experience for our annual corporate event. Their attention to detail and professionalism was outstanding.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    role: 'Events Manager, Jazz',
    quote: 'The team\'s creativity and execution for our product launch event exceeded our expectations. They truly understand the Pakistani market.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Zain Ahmed',
    role: 'CEO, Tech Startup',
    quote: 'From concept to execution, RS Media Solution brought our vision to life. Their team\'s dedication to excellence is unmatched.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const ClientsPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Our Clients | RS Media Solution</title>
        <meta name="description" content="See the prestigious organizations we've worked with across Pakistan" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our clients"
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
              Our <span className="text-secondary">Clients</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trusted by Pakistan's leading organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Happy Clients', value: '100+' },
              { label: 'Events Completed', value: '500+' },
              { label: 'Cities Covered', value: '10+' },
              { label: 'Team Members', value: '50+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Logos */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're proud to work with some of Pakistan's most respected organizations
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 z-10"></div>
          
          <div className="marquee">
            <div className="marquee-content">
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="inline-block mx-8"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 md:h-20 w-auto object-contain filter dark:brightness-0 dark:invert"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg"
              >
                <Quote className="text-primary/30 w-12 h-12 mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ClientsPage;