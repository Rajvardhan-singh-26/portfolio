import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import UpcomingProjects from './components/UpcomingProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Optional additional styles if needed, but index.css handles most

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <UpcomingProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
