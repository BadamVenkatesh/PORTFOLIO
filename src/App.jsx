import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <CustomCursor />
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero imageSrc="/badam.jpg" />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
