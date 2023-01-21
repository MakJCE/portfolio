import React from 'react';
import listOfProjects from './listOfProjects';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {listOfProjects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
