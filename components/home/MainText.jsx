import React from 'react';
import CVLogo from '../../components/Logos/CVLogo';
import GitHubLogo from '../../components/Logos/GitHubLogo';
import LinkedinLogo from '../../components/Logos/LinkedinLogo';

const MainText = () => {
  return (
    <section className="flex flex-col gap-5 ">
      <h1 className="text-4xl text-center sm:text-left font-bold text-orange-700 dark:text-slate-50">
        Hi, I’m Jhonny
      </h1>
      <div className="flex flex-col gap-1">
        <p className="text-center sm:text-left text-orange-900 dark:text-slate-50">
          Developer
        </p>
        <p className="text-center sm:text-left text-orange-900 dark:text-slate-50">
          Frontend Oriented
        </p>
      </div>
      <div className="flex gap-3 justify-center sm:justify-start">
        <a href="/CV_EN_2023.pdf" download>
          <CVLogo
            height="40px"
            width="40px"
            className="text-orange-700/30 hover:text-orange-700 dark:text-slate-50/30 dark:hover:text-slate-50 transition cursor-pointer hover:translate-y-1"
          />
        </a>
        <a href="https://github.com/MakJCE" target="_blank" rel="noreferrer">
          <GitHubLogo
            height="40px"
            width="40px"
            className="text-orange-700/30 hover:text-orange-700 dark:text-slate-50/30 dark:hover:text-slate-50 transition cursor-pointer hover:translate-y-1"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jhonnycamachoencinas/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo
            height="40px"
            width="40px"
            className="text-orange-700/30 hover:text-orange-700 dark:text-slate-50/30 dark:hover:text-slate-50 transition cursor-pointer hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  );
};

export default MainText;
