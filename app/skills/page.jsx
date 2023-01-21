import React from 'react';
import Portrait from '../../components/home/Portrait';
import SkillsList from '../../components/skills/SkillsList';

const SkillsPage = () => {
  return (
    <section className=" w-full flex justify-between mt-8 flex-wrap">
      <div className="w-4/6">
        <div className="w-full flex text-stone-500/80 dark:text-orange-300">
          <div className="w-1/4"></div>
          <div className="w-1/4">Basic</div>
          <div className="w-1/4">Competent</div>
          <div className="w-1/4">Experienced</div>
        </div>
        <div className="w-full h-0.5 mb-6 bg-orange-800/60 dark:bg-white"></div>
        <SkillsList />
      </div>
      <div className="w-2/6">
        <Portrait />
      </div>
    </section>
  );
};

export default SkillsPage;
