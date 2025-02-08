import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// COMPONENT IMPORTS
import FullNameTitleText from './components/FullNameTitleText';

function App() {
  const titleText = "Welcome to Andrew's Website".split(" ");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll position:', window.scrollY);
      if (window.scrollY > 10) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add event listener to handle scroll event
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Removes event listener after user scrolls
  }, []);

  return (
    <>
    
      {/* Animates out "Welcome to Andrew's Website" */}
      <FullNameTitleText titleText={titleText} isVisible={isVisible} />

      {/* Arrow down icon */}

      <div>
        <p>HELLO</p>
        <div className="flex justify-center">
          <img src={reactLogo} alt="React Logo" className="" />
          <img src={viteLogo} alt="Vite Logo" className="" />
        </div>
      </div>
    </>
  )
}

export default App
