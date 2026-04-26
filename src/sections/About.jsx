import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/common/GlassCard";
import SectionReveal from "../components/common/SectionReveal";
import { PERSONAL_INFO, INTERPERSONAL_SKILLS } from "../constants";
import profileImage from "/images/profile.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <GlassCard className="p-8 md:p-20 overflow-hidden">
            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
              <div className="space-y-8">
                <motion.div
                  className="space-y-4 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-1 rounded-full bg-primary-500" />
                    <h2 className="text-xs font-medium uppercase tracking-[0.4em] text-primary-400">
                      Background
                    </h2>
                  </div>
                  <h3 className="text-heading-2 text-slate-900 dark:text-white">
                    Engineering Seamless Interfaces
                  </h3>
                </motion.div>

                <motion.p
                  className="text-body-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic border-l-4 border-primary-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  "{PERSONAL_INFO.summary}"
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.12 }}
                >
                  {INTERPERSONAL_SKILLS.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="group grid grid-cols-[auto_1fr] items-center gap-4 p-6 rounded-3xl bg-slate-950/90 border border-white/10 shadow-glass transition-all hover:-translate-y-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                      <div className="flex h-12 w-12 min-w-[3rem] min-h-[3rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white shadow-lg">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-caption text-white">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="absolute inset-0 -translate-x-6 -translate-y-6 rounded-[3rem] bg-gradient-to-br from-primary-500/20 via-violet-500/10 to-cyan-500/10 blur-3xl opacity-60" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-glass">
                  <motion.img
                    src={profileImage}
                    alt="Ashwani Singh Profile"
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
};

export default About;
