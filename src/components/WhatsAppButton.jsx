import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppButton - Sticky floating WhatsApp direct chat button
 * Visible on all pages, positioned bottom-right
 */
export const WhatsAppButton = ({ phoneNumber = '+1-226-868-8363' }) => {
  // Format phone number for WhatsApp URL (remove formatting)
  const whatsappNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Privexio!%20I'm%20interested%20in%20learning%20more%20about%20your%20services.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
