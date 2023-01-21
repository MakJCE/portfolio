import React from 'react';
import listOfCourses from './listOfCourses';
import EducationElement from './EducationElement';

const Timeline = () => {
  return (
    <ol className="relative border-l border-orange-300 dark:border-gray-300">
      {listOfCourses.map((course) => (
        <div>
          <div className="absolute w-3 h-3 bg-orange-300 dark:bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-orange-900 "></div>
          <EducationElement course={course} key={course.title} />
        </div>
      ))}
    </ol>
  );
};

export default Timeline;
