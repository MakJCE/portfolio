'use client';

import React, { useState } from 'react';

const DarkModeButton = () => {
  const [mode, setMode] = useState(true);
  function handleChange(event) {
    if (document.querySelector('html').classList.contains('dark'))
      document.querySelector('html').classList.remove('dark');
    else document.querySelector('html').classList.add('dark');
    setMode((prev) => !prev);
  }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={mode}
        className="sr-only peer"
        onClick={handleChange}
      />
      <div className="w-12 h-7 bg-orange-500/25 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-orange-stroke rounded-full peer-checked:after:translate-x-full peer-checked:after:border-orange-stroke after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-black after:bg-[url('../public/sun-icon.svg')] dark:after:bg-[url('../public/moon-icon.svg')] after:bg-center after:bg-[length:16px_16px] after:bg-no-repeat after:border-orange-400 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-neutral-700"></div>
      {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Dark Mode
      </span> */}
    </label>
  );
};

export default DarkModeButton;
