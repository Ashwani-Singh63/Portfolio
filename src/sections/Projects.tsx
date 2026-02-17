
import React from 'react';
import GlassCard from '../components/common/GlassCard';
import SectionReveal from '../components/common/SectionReveal';
import { EXPERIENCES } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <span className="text-primary-600 font-black text-xs uppercase tracking-[0.5em] mb-4">Case Studies</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center tracking-tighter text-slate-900 dark:text-white">Recent Projects</h2>
        </div>
        <div className="space-y-24 md:space-y-32 lg:space-y-48">
          {EXPERIENCES[0].projects?.map((project, idx) => (
            <SectionReveal key={project.id}>
              <div className={`group grid lg:grid-cols-12 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={`lg:col-span-7 relative ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative overflow-hidden rounded-[3rem] border-4 border-white dark:border-slate-800 shadow-2xl group-hover:shadow-primary-500/10 transition-all duration-700">
                    <img
                      src={`https://picsum.photos/seed/${project.title}/1600/1000`}
                      alt={project.title}
                      className="w-full aspect-[16/10] object-cover grayscale group-hover:grayscale-0 transition duration-1000 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <div className={`lg:col-span-5 relative z-10 ${idx % 2 === 0 ? 'lg:order-2 lg:-ml-24' : 'lg:order-1 lg:-mr-24'} -mt-12 lg:mt-0`}>
                  <GlassCard className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                      <span className="text-slate-100 dark:text-slate-900 text-6xl md:text-8xl font-black select-none">0{idx + 1}</span>
                    </div>
                    <div className="relative">
                      <h3 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-primary-600 transition-colors leading-tight text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-black mb-8 uppercase tracking-widest text-xs">{project.role}</p>
                      <div className="space-y-4 mb-10">
                        {project.description.map((item, i) => (
                          <p key={i} className="text-slate-600 dark:text-slate-300 font-medium text-sm leading-relaxed">{item}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-[10px] font-black uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
