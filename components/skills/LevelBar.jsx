'use client';
import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const LevelBar = ({ level }) => {
  return (
    <div className="w-full">
      <div className="block sm:hidden text-stone-500 dark:text-white/60">
      {level === 25 ? 'Basic' : level === 50 ? 'Competent' : 'Experienced'}
      </div>
      <div className="w-full text-orange-800/60 dark:text-white/50 hidden sm:block">
        <motion.svg width="100%" height="12" initial="hidden" animate="visible">
          <motion.line
            x1="0"
            y1="10"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="10"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
          <motion.line
            x1="0"
            y1="9"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="9"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
          <motion.line
            x1="0"
            y1="8"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="8"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
          <motion.line
            x1="0"
            y1="7"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="7"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
          <motion.line
            x1="0"
            y1="6"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="6"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
          <motion.line
            x1="0"
            y1="5"
            x2={level === 25 ? '15%' : level === 50 ? '50%' : '75%'}
            y2="5"
            stroke="currentColor"
            custom={0.3}
            variants={draw}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default LevelBar;
