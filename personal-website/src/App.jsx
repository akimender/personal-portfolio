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
import About from './components/About';
import Skills from './components/Skills';

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
      if (window.scrollY > 1400) {
        setIsProjectsVisible(true);
      }

      if (window.scrollY > 770) {
        setIsSkillsVisible(true);
      }

      if (window.scrollY > 70) {
        setIsAboutVisible(true);
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

        <div className="about-background-container">
          <About isAboutVisible={isAboutVisible} />
        </div>

        <div className="skills-background-container">
          <Skills isSkillsVisible={isSkillsVisible} />
        </div>

        <div className="portfolio-background-container">
          {/* Portfolio Display */}
          <PortfolioDisplay isProjectsVisible={isProjectsVisible} />
        </div>

        <ContactSection />
      </div>
      
    </>
  )
}

export default App
