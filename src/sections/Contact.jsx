import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { PERSONAL_INFO } from '../constants';

const Contact = memo(() => {
  // Memoize animation variants to prevent recreation on every render
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }), []);

  const contactLinks = useMemo(() => [
    {
      href: `mailto:${PERSONAL_INFO.email}`,
      label: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      href: `tel:${PERSONAL_INFO.phone}`,
      label: 'Phone',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      href: PERSONAL_INFO.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ], []);

  return (
    <section id="contact" className="py-24 md:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <GlassCard className="p-8 md:p-24 relative overflow-hidden text-center bg-slate-900/5 dark:bg-slate-800/40">
            <motion.div
              className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-primary-400 via-primary-600 to-indigo-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ willChange: 'transform' }}
            />

            <motion.h2
              className="text-display text-slate-900 dark:text-white mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ willChange: 'transform, opacity' }}
            >
              Let's Create<br />Something Epic
            </motion.h2>

            <motion.p
              className="text-body-lg text-slate-600 dark:text-slate-400 mb-16 md:mb-20 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ willChange: 'transform, opacity' }}
            >
              I'm currently looking for new adventures in frontend development. If you think I'm a good fit, let's talk!
            </motion.p>

            <motion.div
              className=" flex flex-col md:flex-row gap-10 justify-center mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-primary-600 transition-all flex flex-col items-center gap-4 md:gap-6 flex-1 shadow-lg hover:shadow-primary-500/40 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className="w-20 h-20 rounded-[1.5rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary-600 group-hover:bg-white group-hover:scale-110 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: 'transform' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div className="text-center group-hover:text-white">
                    <p className="text-caption mb-2 opacity-60">Shoot an Email</p>
                    <p className="text-body-sm font-black tracking-tight text-slate-900 dark:text-white group-hover:text-white">{PERSONAL_INFO.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-blue-600 transition-all flex flex-col items-center gap-4 md:gap-6 flex-1 shadow-lg hover:shadow-blue-500/40 hover:-translate-y-2"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className="w-20 h-20 rounded-[1.5rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 group-hover:bg-white group-hover:scale-110 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ willChange: 'transform' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.div>
                <div className="text-center group-hover:text-white">
                    <p className="text-caption mb-2 opacity-60">Professional Profile</p>
                    <p className="text-body font-black tracking-tight text-slate-900 dark:text-white group-hover:text-white">LinkedIn Connect</p>
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-4 text-slate-500 font-black text-caption"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ willChange: 'opacity' }}
            >
              <motion.span
                className="block w-20 h-px bg-slate-300 dark:bg-slate-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ willChange: 'transform' }}
              />
              <motion.span
                className="block w-20 h-px bg-slate-300 dark:bg-slate-700"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ willChange: 'transform' }}
              />
            </motion.div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
