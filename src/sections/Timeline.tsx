import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { EXPERIENCES, EDUCATION } from '../constants';

const Timeline: React.FC = () => {
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
    <section id="experience" className="py-32 px-6 bg-slate-100/50 dark:bg-slate-950/20">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex flex-col gap-20">
            <div>
              <motion.div 
                className="flex items-center gap-4 mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">Experience</h2>
                <motion.div 
                  className="flex-grow h-2 bg-slate-200 dark:bg-slate-800 rounded-full"
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
                  <motion.div 
                    key={idx} 
                    className="space-y-8"
                    variants={itemVariants}
                  >
                    <GlassCard className="p-10 border-l-[12px] border-l-primary-600">
                      <div className="mb-6">
                        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                          <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{exp.role}</h3>
                          <motion.span 
                            className="px-4 py-1 bg-primary-600 text-white text-[10px] font-black rounded-full uppercase tracking-tighter"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            {exp.period}
                          </motion.span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-black text-lg">{exp.company}</p>
                      </div>
                      <motion.div 
                        className="space-y-4"
                        variants={containerVariants}
                      >
                        {exp.description.map((item, i) => (
                          <motion.p 
                            key={i} 
                            className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed pl-6 border-l border-slate-300 dark:border-slate-700"
                            variants={itemVariants}
                          >
                            {item}
                          </motion.p>
                        ))}
                      </motion.div>
                    </GlassCard>
                    
                    {/* Projects within Experience */}
                    {exp.projects && exp.projects.length > 0 && (
                      <motion.div 
                        className="space-y-12 pl-6 border-l-2 border-primary-500/30 dark:border-primary-500/20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <motion.h4 
                          className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider mb-8"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        >
                          Key Projects
                        </motion.h4>
                        <motion.div
                          className="space-y-8"
                          variants={containerVariants}
                        >
                          {exp.projects.map((project) => (
                            <SectionReveal key={project.id} delay={0.1}>
                              <motion.div 
                                className="group"
                                variants={projectVariants}
                                whileHover={{ x: 10 }}
                              >
                                <GlassCard className="p-8 hover:border-primary-500/50 transition-all">
                                  <div className="mb-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                      <h5 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                      </h5>
                                      <motion.span 
                                        className="px-3 py-1 bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 text-[9px] font-black rounded-full uppercase tracking-tighter whitespace-nowrap"
                                        whileHover={{ scale: 1.1 }}
                                      >
                                        {project.role}
                                      </motion.span>
                                    </div>
                                  </div>
                                  <motion.div 
                                    className="space-y-3 mb-6"
                                    variants={containerVariants}
                                  >
                                    {project.description.map((item, i) => (
                                      <motion.p 
                                        key={i} 
                                        className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-700"
                                        variants={itemVariants}
                                      >
                                        {item}
                                      </motion.p>
                                    ))}
                                  </motion.div>
                                  <motion.div 
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                  >
                                    {project.tags.map((tag) => (
                                      <motion.span 
                                        key={tag} 
                                        className="px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-[9px] font-black uppercase"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                      >
                                        {tag}
                                      </motion.span>
                                    ))}
                                  </motion.div>
                                </GlassCard>
                              </motion.div>
                            </SectionReveal>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.div 
                className="flex items-center gap-4 mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white">Education</h2>
                <motion.div 
                  className="flex-grow h-2 bg-slate-200 dark:bg-slate-800 rounded-full"
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
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                  >
                    <GlassCard className="p-10 bg-slate-50/50 dark:bg-slate-800/30 text-slate-900 dark:text-white">
                      <motion.span 
                        className="inline-block px-4 py-1.5 bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 text-[10px] font-black rounded-full mb-6 uppercase tracking-[0.2em]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {edu.period}
                      </motion.span>
                      <h3 className="text-2xl font-black mb-2 leading-tight">{edu.institution}</h3>
                      <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-4">{edu.degree}</p>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{edu.description}</p>
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
