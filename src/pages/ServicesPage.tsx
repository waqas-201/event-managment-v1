import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Utensils, PartyPopper, Building, Heart, Cake, Users, Globe } from 'lucide-react';
import { cn, pageVariants } from '../lib/utils';

const cuisineTypes = [
  {
    id: 'pakistani',
    title: 'Pakistani Cuisine',
    image: 'https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dishes: [
      'Biryani', 'Nihari', 'Karahi', 'Seekh Kebabs', 'Aloo Keema',
      'Haleem', 'Chapli Kebabs', 'Saag', 'Palak Paneer', 'Daal Chawal',
      'Chicken Tikka', 'Pakoras', 'Chicken Karahi', 'Pulao', 'Beef Korma'
    ]
  },
  {
    id: 'chinese',
    title: 'Chinese Cuisine',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dishes: [
      'Manchurian', 'Sweet and Sour Chicken', 'Chow Mein', 'Beef with Broccoli',
      'Szechuan Noodles', 'Spring Rolls', 'Hot and Sour Soup', 'Kung Pao Chicken',
      'Chicken with Cashew Nuts', 'Peking Duck', 'Shrimp Fried Rice'
    ]
  },
  {
    id: 'turkish',
    title: 'Turkish Cuisine',
    image: 'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dishes: [
      'Shawarma', 'Adana Kebab', 'Doner Kebab', 'Lahmacun', 'Pide',
      'Borek', 'Pilaf', 'Turkish Delight', 'Baklava', 'Manti',
      'Meze', 'Simit', 'Iskender Kebab', 'Menemen', 'Kumpir'
    ]
  },
  {
    id: 'indian',
    title: 'Indian Cuisine',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    dishes: [
      'Tikka Masala', 'Butter Chicken', 'Paneer Tikka', 'Rogan Josh',
      'Chana Masala', 'Tandoori Roti', 'Naan', 'Aloo Paratha',
      'Palak Paneer', 'Chole Bhature', 'Dal Makhani', 'Shahi Korma'
    ]
  }
];

const eventServices = [
  {
    id: 'weddings',
    title: 'Wedding Planning',
    description: 'Create your perfect wedding day with our comprehensive planning services.',
    icon: Heart,
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Venue Selection',
      'Decor & Styling',
      'Catering Services',
      'Entertainment',
      'Photography & Videography',
      'Guest Management'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional event management for your business gatherings and conferences.',
    icon: Building,
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Conference Planning',
      'Team Building Events',
      'Product Launches',
      'Award Ceremonies',
      'Corporate Dinners',
      'Business Meetings'
    ]
  },
  {
    id: 'private',
    title: 'Private Events',
    description: 'Personalized celebrations for your special moments.',
    icon: Users,
    image: 'https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Birthday Parties',
      'Anniversary Celebrations',
      'Family Reunions',
      'Graduation Parties',
      'Holiday Events',
      'Private Dinners'
    ]
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Trade Shows',
    description: 'Showcase your brand with our professional exhibition services.',
    icon: Globe,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      'Booth Design',
      'Exhibition Setup',
      'Product Displays',
      'Staff Training',
      'Lead Generation',
      'Event Marketing'
    ]
  }
];

const ServicesPage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState(cuisineTypes[0]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Our Services | Elegant Events</title>
        <meta name="description" content="Explore our comprehensive event planning and catering services including weddings, corporate events, and international cuisine options" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Event services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we offer comprehensive event planning and catering services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Services Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Event <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We offer a wide range of event planning services to make your special occasions truly memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Learn More
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Catering <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Experience a world of flavors with our international catering options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {cuisineTypes.map((cuisine) => (
              <motion.button
                key={cuisine.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCuisine(cuisine)}
                className={cn(
                  "p-4 rounded-lg text-left transition-colors",
                  selectedCuisine.id === cuisine.id
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <h3 className="text-lg font-serif font-bold mb-2">{cuisine.title}</h3>
                <p className={cn(
                  "text-sm",
                  selectedCuisine.id === cuisine.id
                    ? "text-white/90"
                    : "text-gray-600 dark:text-gray-400"
                )}>
                  {cuisine.dishes.length} Dishes Available
                </p>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedCuisine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="h-full">
                <img
                  src={selectedCuisine.image}
                  alt={selectedCuisine.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  {selectedCuisine.title} Menu
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCuisine.dishes.map((dish) => (
                    <div
                      key={dish}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <Utensils className="w-4 h-4 text-primary mr-2" />
                      {dish}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PartyPopper size={48} className="mx-auto text-primary mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Plan Your <span className="gradient-text">Event?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your event requirements and let us help you create an unforgettable experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Get Started
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;