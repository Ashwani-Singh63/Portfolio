import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/common/GlassCard";
import SectionReveal from "../components/common/SectionReveal";
import { PERSONAL_INFO, INTERPERSONAL_SKILLS } from "../constants";
import profileImage from "/images/profile.jpg";

const About: React.FC = () => {
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
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <GlassCard className="p-8 md:p-20 group">
            <motion.div
              className="grid lg:grid-cols-12 gap-16 items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              <motion.div
                className="lg:col-span-7 space-y-8 order-2 lg:order-1"
                variants={containerVariants}
              >
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-1 bg-primary-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary-600">
                      Background
                    </h2>
                  </div>
                  <h3 className="text-5xl font-black text-slate-900 dark:text-white">
                    Engineering Seamless Interfaces
                  </h3>
                </motion.div>

                <motion.p
                  className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic border-l-4 border-primary-500 pl-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  "{PERSONAL_INFO.summary}"
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                  variants={containerVariants}
                >
                  {INTERPERSONAL_SKILLS.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-4 p-5 rounded-3xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 group-hover:border-primary-500/30 transition-colors"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary-500 shadow-sm"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
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
                      </motion.div>
                      <span className="text-sm font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:col-span-5 relative order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="absolute -inset-6 bg-primary-500/20 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <motion.div
                  className="relative rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl"
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={profileImage}
                    alt="Ashwani Singh Profile"
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </GlassCard>
        </SectionReveal>
      </div>
    </section>
  );
};

export default About;
