import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className = "", delay = 0, threshold = 0.2, direction = "up" }) => {
  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
      default: return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
    }
  };

  const variants = {
    ...getVariants(),
    visible: {
      ...getVariants().visible,
      transition: { duration: 0.6, ease: "easeOut", delay }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
