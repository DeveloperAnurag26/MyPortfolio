

import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Social from './Components/Social';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply/remove 'dark' class on <html> for Tailwind
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Hero />
      <Skills />
      <Projects />
      <Social />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
