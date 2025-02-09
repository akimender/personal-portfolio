import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion, useInView } from 'framer-motion';

// COMPONENT IMPORTS
import FullNameTitleText from './components/FullNameTitleText';
import PortfolioDisplay from './components/PortfolioDisplay';
import Dashboard from './components/Dashboard';

function App() {
  const titleText = "Welcome to Andrew's Website!".split(" ");
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
          {/* Animates out "Welcome to Andrew's Website" */}
          <FullNameTitleText titleText={titleText} />
        </div>
        {/* Portfolio Display */}
        <PortfolioDisplay isVisible={isVisible} />
      </div>
    </>
  )
}

export default App
