'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const ParallaxLayer = ({
  className,
  children,
  from = -40,
  to = 40,
  style,
  ...rest
}) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax relative to this element entering/leaving the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);
  const springY = useSpring(y, { stiffness: 140, damping: 26, mass: 0.35 });

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{ ...style, y: springY, willChange: 'transform' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
