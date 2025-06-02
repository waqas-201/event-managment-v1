import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber: string;
}

const WhatsAppWidget = ({ phoneNumber }: WhatsAppWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const sendWhatsAppMessage = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="glass-card dark:glass-card-dark mb-4 p-4 rounded-lg shadow-lg w-64"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Need assistance?</h3>
              <button
                onClick={toggleWidget}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Chat with us on WhatsApp for quick responses to your event planning questions.
            </p>
            <button
              onClick={sendWhatsAppMessage}
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Start Chatting</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleWidget}
        className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;