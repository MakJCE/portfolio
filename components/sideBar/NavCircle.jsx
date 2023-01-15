'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavbarLogos from '../Logos/NavbarLogos';

const NavCircle = ({ label, Logo, url }) => {
  const pathname = usePathname();
  const navCircleStyle =
    'w-14 h-14 text-orange-800/50 dark:text-white/50 flex justify-center items-center radial-gradient-bg rounded-full border-2 border-solid border-orange-500/20 hover:border-orange-500/40 dark:border-orange-500/40 dark:hover:border-orange-500/60 group relative';
  const selectedCircleStyle =
    'w-14 h-14 text-orange-800 dark:text-white flex justify-center items-center radial-gradient-bg-hover rounded-full border-2 border-solid border-orange-900/40 hover:border-orange-500/60 dark:border-white/60 dark:hover:border-orange-500/80 group relative';
  return (
    <div className={pathname === url ? selectedCircleStyle : navCircleStyle}>
      <NavbarLogos label={label} width="30px" height="30px" />
      <span className="sidebar-tooltip group-hover:scale-100">{label}</span>
    </div>
  );
};

export default NavCircle;
