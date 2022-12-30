import React from 'react';
import routes from './routes.js';
import { Average_Sans } from '@next/font/google';

const font = Average_Sans({ weight: ['400'] });

const SideBar = () => {
  return (
    <nav className={font.className}>
      <ul className="flex flex-col gap-16 text-sm">
        {routes.map((route) => (
          <li className="text-center text-clip overflow-hidden" key={route.url}>
            {route.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
