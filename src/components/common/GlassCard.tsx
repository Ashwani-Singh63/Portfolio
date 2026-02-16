
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div className={`
    backdrop-blur-xl 
    bg-white/80 dark:bg-slate-800/60 
    border border-slate-200/50 dark:border-slate-700/40 
    rounded-[2.5rem] 
    shadow-glass dark:shadow-glass-dark 
    hover:shadow-2xl transition-all duration-500 
    ${className}
  `}>
    {children}
  </div>
);

export default GlassCard;
