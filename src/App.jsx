import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Blog from './sections/Blog';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const key = location.hash || 'root';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900 text-slate-200 font-sans">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;