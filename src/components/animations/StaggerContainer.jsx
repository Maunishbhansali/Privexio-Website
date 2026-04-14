import React from 'react';
import { motion } from 'framer-motion';

/**
 * StaggerContainer - Animates children with staggered effect
 * Great for lists, grid items, etc.
 */
export const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const directionVariants = {
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const itemVariants = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {React.Children.map(children, (child) =>
        child ? (
          <motion.div variants={itemVariants} key={child.key}>
            {child}
          </motion.div>
        ) : null
      )}
    </motion.div>
  );
};

export default StaggerContainer;
