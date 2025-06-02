import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Phone, Mail, MapPin } from 'lucide-react';
import { pageVariants } from '../lib/utils';

const contactInfo = {
  phone: '+92 333 2369979',
  phone2: '+92 334 3245055',
  email: 'info@rsmedia.com.pk',
  address: 'Sharae Faisal, Karachi, Pakistan',
};

const mapCenter = {
  lat: 24.8607,
  lng: 67.0011,
};

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Contact Us | RS Media Solution</title>
        <meta name="description" content="Get in touch with RS Media Solution for all your event planning needs in Pakistan" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact us"
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
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can make your next event extraordinary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                  />
                  {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                  />
                  {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800"
                  />
                  {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone}</p>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] rounded-lg overflow-hidden">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={mapCenter}
                    zoom={15}
                  >
                    <Marker position={mapCenter} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;