import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="skills" className="py-32 px-6 bg-slate-100/50 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white">My Tech Stack</h2>
            <motion.div 
              className="flex justify-center gap-2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary-500"></div>
              <div className="w-16 h-2 rounded-full bg-primary-500/20"></div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {SKILLS.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                variants={cardVariants}
              >
                <GlassCard className="p-10 group hover:-translate-y-4">
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                      {group.category}
                    </h3>
                  </div>
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                  >
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skill} 
                        className="px-5 py-3 bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 rounded-2xl text-xs font-black uppercase border border-slate-200 dark:border-slate-700 transition-all hover:bg-primary-600 hover:text-white hover:border-primary-600 hover:scale-105 shadow-sm"
                        variants={skillTagVariants}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Skills;
