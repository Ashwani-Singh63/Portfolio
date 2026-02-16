import React from 'react';
import { motion } from 'framer-motion';

const BackgroundBlobs = () => {
  const blobVariants = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -50, 20, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div 
        className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[100px]"
        variants={blobVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute top-[25%] right-[-5%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px]"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-[-5%] left-[15%] w-[45%] h-[45%] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px]"
        variants={blobVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
    </div>
  );
};

export default BackgroundBlobs;
