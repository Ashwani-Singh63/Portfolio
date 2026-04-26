import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { SKILLS } from '../constants';

const Skills = () => {
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
    <section id="skills" className="py-24 md:py-36 px-6 bg-slate-950/90">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary-500" />
              <div className="w-16 h-2 rounded-full bg-primary-500/20" />
            </motion.div>
            <motion.h2
              className="text-heading-1 mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              My Tech Stack
            </motion.h2>
            <motion.p
              className="text-body-lg text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A modern frontend stack built for rapid iteration, polished delivery, and accessible user experiences.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {SKILLS.map((group, groupIndex) => (
              <motion.div key={group.category} variants={cardVariants}>
                <GlassCard className="p-8 hover:-translate-y-3 transition-transform duration-500">
                  <div className="mb-8">
                    <h3 className="text-heading-6 text-white tracking-tight mb-2">
                      {group.category}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.35em] text-primary-300">
                      Key tools
                    </p>
                  </div>

                  <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 md:px-5 md:py-3 bg-slate-900/90 text-slate-200 rounded-full text-caption font-medium uppercase border border-white/10 shadow-sm transition-all hover:bg-primary-600 hover:text-white hover:scale-105"
                        variants={skillTagVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
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
