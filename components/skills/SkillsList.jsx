'use client';

import React from 'react';
import listOfSkills from './listOfSkills';
import { motion } from 'framer-motion';

const SkillsList = () => {
  return (
    <ul className="list-none w-full">
      {listOfSkills.map((skills) => (
        <li key={skills.name} className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full flex items-center mb-2"
          >
            <div className="w-1/5">{skills.name}</div>
            <LevelBar level={skills.skillLevel} />
          </motion.div>
          {skills.libraries && (
            <ul className="list-none w-full">
              {skills.libraries.map((lib) => (
                <li key={lib.name} className="w-full">
                  <motion.div
                    className="w-full flex items-center mb-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className="w-1/5 pl-6">{lib.name}</div>
                    <LevelBar level={lib.skillLevel} />
                  </motion.div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;

const LevelBar = ({ level }) => {
  return level === 25 ? (
    <div className="w-1/5 h-2 bg-orange-800/40 dark:bg-white/50 rounded-full transition"></div>
  ) : level === 50 ? (
    <div className="w-2/5 h-2 bg-orange-800/40 dark:bg-white/50 rounded-full transition"></div>
  ) : (
    <div className="w-3/5 h-2 bg-orange-800/40 dark:bg-white/50 rounded-full transition"></div>
  );
};
