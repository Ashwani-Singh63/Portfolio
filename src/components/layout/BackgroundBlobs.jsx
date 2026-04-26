import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs = memo(() => {
  const blobVariants = useMemo(
    () => ({
      animate: {
        x: [0, 20, -20, 0],
        y: [0, -30, 25, 0],
        scale: [1, 1.05, 0.95, 1],
        transition: {
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-primary-500/15 rounded-full blur-[110px]"
        variants={blobVariants}
        animate="animate"
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-[15%] right-[-5%] w-72 h-72 bg-fuchsia-500/12 rounded-full blur-[110px]"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </div>
  );
});

BackgroundBlobs.displayName = 'BackgroundBlobs';

export default BackgroundBlobs;
