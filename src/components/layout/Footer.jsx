import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.footer
      className="py-20 bg-slate-950/95 text-slate-300 border-t border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center lg:text-left">
          <h2 className="text-heading-2 text-white">
            ASHWANI<span className="text-primary-400">.</span>
          </h2>
          <p className="text-caption text-slate-500">Frontend Architect</p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="uppercase tracking-[0.3em] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 text-center lg:text-right">
            &copy; {new Date().getFullYear()} Ashwani Singh. Crafted for impact.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
