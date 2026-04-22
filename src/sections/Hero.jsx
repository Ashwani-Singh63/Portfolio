import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
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
    <section className="min-h-screen flex items-center pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 dark:opacity-30 blur-3xl" />
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `url('/images/profile.jpg')`,
          backgroundPosition: 'center 20%',
          filter: 'blur(1px)'
        }}
      /> */}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary-500/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg rotate-45"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-3/4 w-20 h-20 border border-indigo-500/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500/40 rounded-full"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Animated Mesh Lines */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-primary-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,70 Q25,90 50,70 T100,70"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-purple-500"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-primary-500/5 via-transparent to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-purple-500/5 via-transparent to-transparent rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-slate-950/80 dark:via-slate-950/60 dark:to-slate-950/80" />

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-14 mt-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.div
          className="inline-flex hidden items-center gap-2 px-5 py-2 mb-8 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50 text-slate-700 dark:text-white font-bold text-[10px] tracking-[0.3em] uppercase"
          variants={itemVariants}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for New Opportunities
        </motion.div> */}

        <motion.h1
          className="text-hero-title text-slate-900 dark:text-white mb-6 md:mb-8 drop-shadow-sm"
          variants={nameVariants}
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.p
          className="text-hero-subtitle text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          A <span className="text-primary-600 dark:text-primary-400 font-black">Frontend Specialist</span> creating elegant, high-performance web solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          variants={itemVariants}
        >
          <motion.a
            href="#experience"
            className="group relative px-8 py-4 md:px-12 md:py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-[1.5rem] hover:scale-105 transition-all shadow-xl md:shadow-2xl flex items-center gap-3 md:gap-4 overflow-hidden w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 text-button">Explore My Work</span>
            <motion.svg
              className="w-4 h-4 md:w-5 md:h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
            <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 md:px-12 md:py-6 backdrop-blur-md bg-slate-200/30 dark:bg-slate-800/40 border border-slate-300/50 dark:border-slate-700 font-black rounded-[1.5rem] hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-all text-slate-800 dark:text-white w-full sm:w-auto text-button"
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
