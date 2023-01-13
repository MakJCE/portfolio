import React from 'react';
//font
import { Oxygen } from '@next/font/google';
//components
import MainText from '../components/home/MainText';
import Portrait from '../components/home/Portrait';

const font = Oxygen({ weight: ['400','700'] });

const HomePage = () => {
  return (
    <section className={font.className}>
      <div className="flex justify-center gap-12 sm:gap-52 mt-14 flex-wrap">
        <MainText />
        <Portrait/>
      </div>
    </section>
  );
};

export default HomePage;
