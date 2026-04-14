import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * CTAButton - Primary call-to-action button with hover animation
 */
export const CTAButton = ({
  text,
  href = '#',
  onClick,
  variant = 'default',
  size = 'lg',
  className = '',
  external = false,
  fullWidth = false,
}) => {
  const buttonClasses = `${className} ${fullWidth ? 'w-full' : ''}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        size={size}
        variant={variant}
        className={buttonClasses}
        onClick={onClick}
      >
        {text}
      </Button>
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  if (href && href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return <Link to={href}>{buttonContent}</Link>;
};

export default CTAButton;
