import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer 
      className="py-24 bg-slate-900 text-white relative z-10 border-t border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <motion.div 
          className="text-center md:text-left"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black tracking-tighter mb-2">
            ASHWANI<span className="text-primary-500">.</span>
          </h2>
          <p className="text-slate-400 font-bold text-sm tracking-wide">Pioneering Frontend Architect</p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { name: 'About', href: '#about' },
            { name: 'Stack', href: '#skills' },
            { name: 'Experience', href: '#experience' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              className="hover:text-primary-400 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
        
        <motion.p 
          className="text-[10px] font-black uppercase tracking-widest text-slate-400"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Ashwani Singh. Built with Purpose.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
