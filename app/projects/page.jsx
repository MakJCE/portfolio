import React from 'react';
import Portrait from '../../components/home/Portrait';
import ProjectsList from '../../components/projects/ProjectsList';

const ProjectsPage = () => {
  return (
    <section className=" w-full flex justify-between mt-8 flex-wrap">
      <div className="w-4/6">
        <ProjectsList/>
      </div>
      <div className="w-2/6">
        <Portrait />
      </div>
    </section>
  )
}

export default ProjectsPage