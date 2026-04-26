import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const NAME = 'Ashwani';
const REVEAL_INTERVAL_MS = 110;
const HIDE_DELAY_MS = 700;

const Preloader = ({ onFinish }) => {
  const letters = useMemo(() => NAME.split(''), []);
  const [visibleCount, setVisibleCount] = useState(0);
  const progress = Math.round((visibleCount / letters.length) * 100);
  const statusText = visibleCount < letters.length ? 'Preparing your interface' : 'Launching portfolio';

  useEffect(() => {
    if (visibleCount >= letters.length) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setVisibleCount((count) => Math.min(count + 1, letters.length));
    }, REVEAL_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [visibleCount, letters.length]);

  useEffect(() => {
    if (visibleCount !== letters.length) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onFinish();
    }, HIDE_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [visibleCount, letters.length, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/90" />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 rounded-[2rem] border border-white/10 bg-slate-900/90 px-8 py-10 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.18),transparent_25%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        <motion.div
          className="relative flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-[2rem] border border-primary-500/10" />
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <motion.div
            className="flex items-center justify-center rounded-full bg-slate-950/80 px-6 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
            initial={{ scale: 0.95 }}
            animate={{ scale: [0.95, 1.02, 0.95] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="inline-flex items-center justify-center gap-1 text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white">
              {letters.map((char, index) => {
                const isVisible = index < visibleCount;
                return (
                  <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 24, scale: 0.82 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.82 }}
                    transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.05 }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <div className="w-full max-w-md space-y-4 relative">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
            <span>{statusText}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span>{visibleCount < letters.length ? 'Fine-tuning every pixel...' : 'Ready in a moment'}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
