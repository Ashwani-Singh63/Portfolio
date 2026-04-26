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
      value: PERSONAL_INFO.email,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      href: PERSONAL_INFO.linkedin,
      label: 'LinkedIn',
      value: 'View profile',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: `tel:${PERSONAL_INFO.phone}`,
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ], []);

  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-slate-950/90">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <GlassCard className="p-8 md:p-20 overflow-hidden bg-slate-900/80 border border-white/10 shadow-glass">
            <motion.div
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display text-white mb-6 leading-none">
                Let's Build Something Modern
              </h2>
              <p className="text-body-lg text-slate-400 max-w-2xl mx-auto mb-16">
                I'm seeking the next frontend opportunity to bring user-focused products to life with robust React architecture and polished interactions.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {contactLinks.map(({ href, label, icon, value, target, rel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  className="group rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 text-center transition-all hover:-translate-y-2 hover:border-primary-500/30"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Contact via ${label}`}
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-xl">
                    {icon}
                  </div>
                  <p className="text-caption uppercase tracking-[0.35em] text-primary-300 mb-2">{label}</p>
                  <p className="text-body text-white">{value}</p>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 text-slate-500 font-medium text-caption"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mt-20">
                <span className="block h-px w-20 bg-white/10" />
                <span>Available for new frontend opportunities</span>
                <span className="block h-px w-20 bg-white/10" />
              </div>
            </motion.div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
