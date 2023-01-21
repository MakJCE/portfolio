'use client';

import React from 'react';
import ArrowLogo from '../Logos/ArrowLogo';
import { motion } from 'framer-motion';

const EducationElement = ({ course }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1, x: 40, transition: { duration: 0.3 } }}
      key={course.title}
      className="mb-10 ml-4"
    >
      <time className="mb-1 text-sm font-normal leading-none text-orange-600/60 dark:text-gray-200">
        {course.year}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {course.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {course.description}
      </p>
      {course.source && (
        <a
          target="_blank"
          href={course.source}
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-orange-200 bg-white/70 border border-gray-200 rounded-lg hover:bg-white hover:text-orange-900 focus:z-10 focus:ring-2 focus:outline-none focus:ring-orange-700/30 focus:text-orange-900 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-orange-200 dark:hover:bg-gray-700 dark:focus:ring-orange-200/20 transition"
        >
          View more <ArrowLogo />
        </a>
      )}
    </motion.li>
  );
};

export default EducationElement;
