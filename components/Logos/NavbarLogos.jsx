import React from 'react';
import AboutMeLogo from './AboutMeLogo';
import SkillsLogo from './SkillsLogo';
import EducationLogo from './EducationLogo';
import ProjectsLogo from './ProjectsLogo';

const NavbarLogos = ({ label, height, width }) => {
  return label === 'About Me' ? (
    <AboutMeLogo height={height} width={width} />
  ) : label === 'Skills' ? (
    <SkillsLogo height={height} width={width} />
  ) : label === 'Education' ? (
    <EducationLogo height={height} width={width} />
  ) : (
    <ProjectsLogo height={height} width={width} />
  );
};

export default NavbarLogos;
