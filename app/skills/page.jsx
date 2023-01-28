import React from 'react';
import Portrait from '../../components/home/Portrait';
import SkillsList from '../../components/skills/SkillsList';

const SkillsPage = () => {
  return (
    <section className=" w-full flex justify-center sm:justify-between flex-wrap">
      <div className="w-4/6 min-w-[200px]">
        <div className="w-full text-stone-500/80 dark:text-orange-300 flex">
          <div className="w-1/4 block sm:hidden text-lg text-orange-900 dark:text-orange-300">Skills</div>
          <div className="w-1/4 hidden sm:block"></div>
          <div className="w-1/4 hidden sm:block">Basic</div>
          <div className="w-1/4 hidden sm:block">Competent</div>
          <div className="w-1/4 hidden sm:block">Experienced</div>
        </div>
        <div className="w-full h-0.5 mb-6 bg-orange-800/60 dark:bg-white"></div>
        <SkillsList />
      </div>
      <div className="w-2/6 min-w-[200px]">
        <Portrait />
      </div>
    </section>
  );
};

export default SkillsPage;
