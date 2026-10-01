import './App.css';
import PortfolioDisplay from './components/PortfolioDisplay';
import Dashboard from './components/Dashboard';
import ContactSection from './components/ContactSection';
import IntroScreen from './components/IntroScreen';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="main-container">
      <Dashboard />
      <section id="home" className="intro-background-container">
        <IntroScreen />
      </section>

      <section id="about" className="about-background-container">
        <About />
      </section>

      <section id="skills" className="skills-background-container">
        <Skills />
      </section>

      <section id="projects" className="portfolio-background-container">
        <PortfolioDisplay />
      </section>

      <ContactSection />
    </div>
  );
}

export default App;
