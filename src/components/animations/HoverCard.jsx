import React from 'react';
import { motion } from 'framer-motion';

/**
 * HoverCard - Card with smooth hover and scale animation
 * Used for service cards, case study cards, etc.
 */
export const HoverCard = ({ 
  children, 
  className = '',
  hoverScale = 1.02,
  hoverYOffset = -8
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale, 
        y: hoverYOffset,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
