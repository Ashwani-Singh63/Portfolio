import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { EXPERIENCES, EDUCATION } from '../constants';

const Timeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950/90">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="space-y-24">
            <div className="space-y-10">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-heading-2 text-white">Experience</h2>
                <motion.div
                  className="flex-grow h-2 rounded-full bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.div
                className="space-y-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {EXPERIENCES.map((exp, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <GlassCard className="p-10 border border-white/10 bg-slate-900/80 shadow-glass">
                      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-6">
                        <div className="space-y-3">
                          <p className="text-caption uppercase tracking-[0.3em] text-primary-300">{exp.company}</p>
                          <h3 className="text-heading-5 text-white">{exp.role}</h3>
                        </div>
                        <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-caption uppercase tracking-[0.3em] text-primary-200">
                          {exp.period}
                        </span>
                      </div>
                      <div className="space-y-4">
                        {exp.description.map((item, i) => (
                          <motion.p
                            key={i}
                            className="text-body-sm text-slate-300 leading-relaxed pl-5 border-l-2 border-primary-500/30"
                            variants={itemVariants}
                          >
                            {item}
                          </motion.p>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="space-y-10">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-heading-2 text-white">Education</h2>
                <motion.div
                  className="flex-grow h-2 rounded-full bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                {EDUCATION.map((edu, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <GlassCard className="p-8 border border-white/10 bg-slate-900/80 shadow-glass">
                      <span className="inline-flex px-4 py-2 mb-5 rounded-full bg-primary-500/15 text-primary-200 text-caption uppercase tracking-[0.3em] font-medium">
                        {edu.period}
                      </span>
                      <h3 className="text-heading-6 text-white mb-3">{edu.institution}</h3>
                      <p className="text-body-lg font-medium text-primary-300 mb-3">{edu.degree}</p>
                      <p className="text-body-sm text-slate-400">{edu.description}</p>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Timeline;
