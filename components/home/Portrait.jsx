import React from 'react';
import DarkModeButton from './DarkModeButton';

const Portrait = ({ large = false }) => {
  const dimensions = large ? 'w-60 h-60' : 'w-32 h-32';
  return (
    <div className={`flex flex-col items-center gap-2`}>
      <div className={`relative ${dimensions} rounded-full peer`}>
        <div
          className={`absolute ${dimensions} radial-gradient-stroke border-2 border-solid border-orange-500/10 dark:border-orange-500/[.40]`}
        ></div>
        <div
          className={`absolute ${dimensions} bg-[url('../public/portrait-no-bg.png')] bg-cover bg-center rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition duration-200`}
        ></div>
      </div>
      <DarkModeButton />
    </div>
  );
};

export default Portrait;
