import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 px-6">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50 text-slate-700 dark:text-white font-bold text-[10px] tracking-[0.3em] uppercase"
          variants={itemVariants}
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for New Opportunities
        </motion.div>
        
        <motion.h1 
          className="text-7xl md:text-[10rem] font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.85] drop-shadow-sm"
          variants={nameVariants}
        >
          {PERSONAL_INFO.name}
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-4xl text-slate-600 dark:text-slate-400 font-semibold mb-12 max-w-3xl mx-auto leading-tight"
          variants={itemVariants}
        >
          A <span className="text-primary-600 dark:text-primary-400 font-black">Frontend Specialist</span> creating elegant, high-performance web solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          variants={itemVariants}
        >
          <motion.a 
            href="#experience" 
            className="group relative px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-[1.5rem] hover:scale-105 transition-all shadow-2xl flex items-center gap-4 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.svg 
              className="w-5 h-5 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </motion.svg>
            <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
          <motion.a 
            href="#contact" 
            className="px-12 py-6 backdrop-blur-md bg-slate-200/30 dark:bg-slate-800/40 border border-slate-300/50 dark:border-slate-700 font-black rounded-[1.5rem] hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-all text-slate-800 dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
