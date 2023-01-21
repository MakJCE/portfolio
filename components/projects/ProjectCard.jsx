'use client';
import React from 'react';
import ArrowLogo from '../Logos/ArrowLogo';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      key={project.name}
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 20,
        duration: 0.05
      }}
      className="py-3 px-4 card flex flex-col gap-3 bg-orange-900/[.13] dark:bg-white/[.13] border border-solid border-black/[.125] dark:border-white/[.125]"
    >
      <h3 className="text-orange-900 dark:text-white text-base">
        {project.name}
      </h3>
      <p className="text-stone-600 dark:text-white text-xs">
        {project.description}
      </p>
      <div className="flex justify-between">
        <div className="flex justify-start text-orange-900 dark:text-white">
          {project.stack.map((dep) => (
            <div title={dep.label} key={`${project.name}-${dep.label}`}>
              {dep.icon}
            </div>
          ))}
        </div>
        {project.source && (
          <a
            target="_blank"
            href={project.source}
            class="inline-flex items-center px-2 py-1 text-sm font-medium text-orange-900/60 bg-white/70 border border-gray-200 rounded-lg hover:bg-white hover:text-orange-900 focus:z-10 focus:ring-2 focus:outline-none focus:ring-orange-700/30 focus:text-orange-900 dark:bg-gray-800 dark:text-orange-200 dark:border-gray-600 dark:hover:text-orange-200 dark:hover:bg-gray-700 dark:focus:ring-orange-200/20 transition"
          >
            View <ArrowLogo />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
