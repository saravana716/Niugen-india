import React from 'react';
import { motion } from 'framer-motion';
import logoImage from '../assets/NIU GEN INDIA INFRAS LOGO.png';
import './SplashScreen.css';

const SplashScreen = ({ finishLoading }) => {
  return (
    <motion.div
      className="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      onAnimationComplete={() => {
        // We will call finishLoading from the parent after a timeout, 
        // but this exit animation will be triggered by AnimatePresence
      }}
    >
      <motion.div
        className="splash-logo-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={logoImage} alt="Niu Gen India Infras" className="splash-logo" />

        <motion.div
          className="loading-bar-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="loading-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 9.0, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
