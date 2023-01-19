import React from 'react';
import ArrowLogo from '../Logos/ArrowLogo';
import listOfCourses from './listOfCourses';

const Timeline = () => {
  return (
    <ol className="relative border-l border-orange-300 dark:border-gray-300">
      {listOfCourses.map((course) => (
        <li key={course.title} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-orange-300 dark:bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 "></div>
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
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-orange-900 focus:z-10 focus:ring-2 focus:outline-none focus:ring-orange-700/30 focus:text-orange-900 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-orange-200 dark:hover:bg-gray-700 dark:focus:ring-orange-200/20"
            >
              View more <ArrowLogo />
            </a>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
