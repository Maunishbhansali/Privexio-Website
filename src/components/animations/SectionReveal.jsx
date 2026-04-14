import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

/**
 * SectionReveal - Reveals sections with fade and slide effect when they come into view
 * Inspired by premium enterprise sites like circula.com
 */
export const SectionReveal = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  };

  const { initial, animate } = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
