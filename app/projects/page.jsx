import React from 'react';
import Portrait from '../../components/home/Portrait';
import ProjectsList from '../../components/projects/ProjectsList';

const ProjectsPage = () => {
  return (
    <section className=" w-full flex justify-between flex-wrap ml-4 sm:ml-0">
      <div className="w-4/6 min-w-[200px]">
        <ProjectsList/>
      </div>
      <div className="w-2/6 min-w-[200px]">
        <Portrait />
      </div>
    </section>
  )
}

export default ProjectsPage