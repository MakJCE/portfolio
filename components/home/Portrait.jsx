import React from 'react';
import DarkModeButton from './DarkModeButton';

const Portrait = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-60 h-60 rounded-full peer">
        <div className="absolute w-60 h-60 radial-gradient-stroke border-2 border-solid border-orange-500/10 dark:border-orange-500/[.40]"></div>
        <div className="absolute w-60 h-60 bg-[url('../public/portrait-no-bg.png')] bg-cover bg-center rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition duration-200"></div>
      </div>
      <DarkModeButton />
    </div>
  );
};

export default Portrait;
