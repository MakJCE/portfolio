import React from 'react';
import Link from 'next/link';
import routes from './routes.js';
import { Average_Sans } from '@next/font/google';
import NavCircle from '../sideBar/NavCircle'

const font = Average_Sans({ weight: ['400'] });

const SideBar = () => {
  return (
    <nav className={font.className}>
      <ul className="fixed h-screen w-24 flex flex-col gap-10 text-sm items-center">
        {routes.map((route) => (
          <li
            className="text-center text-clip"
            key={route.url}
          >
            <Link href={route.url} key={route.url}>
              <NavCircle label={route.label} Logo={route.logo} url={route.url}/>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
