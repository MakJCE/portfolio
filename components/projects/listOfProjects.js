import JavaScriptLogo from '../Logos/JavaScriptLogo';
import CssLogo from '../Logos/CssLogo';
import HtmlLogo from '../Logos/HtmlLogo';
import ReactLogo from '../Logos/ReactLogo';
import NextLogo from '../Logos/NextjsLogo';
import TailwindLogo from '../Logos/TailwindLogo';

const listOfProjects = [
  {
    name: 'Othello',
    description:
      'Also known as Reversi is a two-player strategy board game. This time, made as a player against a bot challenge.',
    stack: [
      {
        label: 'JavaScript',
        icon: <JavaScriptLogo height="30px" width="30px" />
      },
      { label: 'CSS', icon: <CssLogo height="30px" width="30px" /> },
      { label: 'HTML', icon: <HtmlLogo height="30px" width="30px" /> }
    ],
    source: 'https://makjce.github.io/othello-web/index.html'
  },
  {
    name: 'My Portfolio',
    description: 'This website, where I demonstrate my skills, experience and dedication.',
    stack: [
      { label: 'React', icon: <ReactLogo height="25px" width="30px" /> },
      { label: 'Next Js', icon: <NextLogo height="25px" width="30px" /> },
      { label: 'Tailwind', icon: <TailwindLogo height="30px" width="30px" /> },
    ],
    source: ''
  },
  // {
  //   name: 'tres',
  //   description: '',
  //   stack: [{ label: '', icon: '' }],
  //   source: ''
  // },
  // {
  //   name: 'cuatro',
  //   description: '',
  //   stack: [{ label: '', icon: '' }],
  //   source: ''
  // }
];

export default listOfProjects;
