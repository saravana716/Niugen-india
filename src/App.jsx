import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import PlotAvailabilityPage from './pages/PlotAvailabilityPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';
import './index.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/plot-availability" element={<PlotAvailabilityPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if it's the first time loading in this session
    const hasVisited = sessionStorage.getItem('hasVisitedNiugen');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisitedNiugen', 'true');
      // Hide splash screen after 9.5 seconds to match the 9.0s loading bar animation
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 9500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SplashScreen key="splash" />
          ) : (
            <motion.div 
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Navbar />
              <AnimatedRoutes />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
