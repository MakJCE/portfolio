import React from 'react';
import Portrait from '../../components/home/Portrait';
import Timeline from '../../components/education/Timeline';

const EducationPage = () => {
  return (
    <section className=" w-full flex justify-between mt-8 flex-wrap">
      <div className="w-4/6">
        <Timeline />
      </div>
      <div className="w-2/6">
        <Portrait />
      </div>
    </section>
  );
};

export default EducationPage;
