import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../theme/theme-toggle';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <img 
            src="/logo.png" 
            alt="RS Media Solution" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "relative font-medium hover:text-primary transition-colors duration-300",
                  (location.pathname === link.path || 
                    (link.path !== '/' && location.pathname.startsWith(link.path)))
                    ? "text-primary" 
                    : scrolled || location.pathname !== "/" 
                      ? "text-gray-900 dark:text-white" 
                      : "text-white"
                )}
              >
                {link.name}
                {(location.pathname === link.path || 
                  (link.path !== '/' && location.pathname.startsWith(link.path))) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors duration-300"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={cn(
              "p-2 transition-colors",
              scrolled || location.pathname !== "/" 
                ? "text-gray-900 dark:text-white" 
                : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "py-2 font-medium hover:text-primary transition-colors",
                    location.pathname === link.path || 
                    (link.path !== '/' && location.pathname.startsWith(link.path))
                      ? "text-primary" 
                      : "text-gray-900 dark:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-center transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;