'use client';

import React from 'react';
import DarkModeButton from './DarkModeButton';
import { motion } from 'framer-motion';

const Portrait = ({ large = false }) => {
  const dimensions = large ? 'w-60 h-60' : 'w-32 h-32';
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      className={`flex flex-col items-center gap-2`}
    >
      <div className={`relative ${dimensions} rounded-full peer`}>
        <div
          className={`absolute ${dimensions} radial-gradient-stroke border-2 border-solid border-orange-500/10 dark:border-orange-500/[.40]`}
        ></div>
        <div
          className={`absolute ${dimensions} bg-[url('../public/portrait-no-bg.png')] bg-cover bg-center rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition duration-200`}
        ></div>
      </div>
      <DarkModeButton />
    </motion.div>
  );
};

export default Portrait;
