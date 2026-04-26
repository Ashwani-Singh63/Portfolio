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
    <section className="min-h-screen relative overflow-hidden px-6 pt-28 pb-20">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 blur-3xl" />
      <div className="absolute inset-0 bg-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_20%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-xs uppercase tracking-[0.4em] text-primary-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend Design + Performance
            </motion.span>

            <motion.h1
              className="text-display text-white max-w-4xl leading-tight"
              variants={nameVariants}
            >
              I build <span className="text-gradient">modern</span> frontend experiences for fast-moving products.
            </motion.h1>

            <motion.p
              className="text-body-lg text-slate-300 max-w-3xl"
              variants={itemVariants}
            >
              {PERSONAL_INFO.summary} I design accessible, responsive interfaces with React and Tailwind, and ship polished products that scale.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-button uppercase text-slate-950 shadow-2xl shadow-primary-500/20 transition-transform hover:-translate-y-1 hover:bg-primary-400"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900/80 px-8 py-4 text-button uppercase text-white transition-all hover:border-primary-400 hover:text-primary-400"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              variants={itemVariants}
            >
              {['Fast interfaces', 'Component-driven', 'Responsive across devices'].map((label) => (
                <motion.div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-5 text-center shadow-glass"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-slate-400 text-xs uppercase tracking-[0.35em] mb-2">{label}</p>
                  <p className="text-body text-white">Polished experience</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-400" />
              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <p className="text-caption text-primary-300">Featured</p>
                  <h2 className="text-heading-3 text-white">Ready for your next product launch</h2>
                </div>
                <p className="text-slate-300 text-body-lg leading-relaxed">
                  I help teams move faster by shipping production-ready UI and performance-first frontends that feel premium.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/10">
                    <p className="text-caption uppercase tracking-[0.3em] text-slate-400">Core stack</p>
                    <p className="mt-3 text-white font-medium">React · Tailwind · Vite</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/10">
                    <p className="text-caption uppercase tracking-[0.3em] text-slate-400">Approach</p>
                    <p className="mt-3 text-white font-medium">Performance-first, accessible, modern</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
