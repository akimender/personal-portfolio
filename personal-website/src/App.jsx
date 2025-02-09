import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion, useInView } from 'framer-motion';

// COMPONENT IMPORTS
import PortfolioDisplay from './components/PortfolioDisplay';
import Dashboard from './components/Dashboard';
import ContactSection from './components/ContactSection';
import IntroScreen from './components/IntroScreen';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener to handle scroll event
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Removes event listener after user scrolls
  }, []);

  return (
    <>
      <div className="main-container">
        <Dashboard />
        <div className="intro-background-container">
          <IntroScreen />
        </div>
        <div className="portfolio-background-container">
          {/* Portfolio Display */}
          <PortfolioDisplay isVisible={isVisible} />
        </div>

        <ContactSection />
      </div>
      
    </>
  )
}

export default App
