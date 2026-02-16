import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import BackgroundBlobs from './components/layout/BackgroundBlobs';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import { useTheme } from './hooks/useTheme';
import { useScroll } from './hooks/useScroll';

const App: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const { showScrollTop, scrollToTop } = useScroll();

  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 scroll-smooth selection:bg-primary-500 selection:text-white">
      <BackgroundBlobs />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative z-10 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 p-5 rounded-3xl bg-primary-600 text-white shadow-2xl hover:bg-primary-700"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
