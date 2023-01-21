import JavaScriptLogo from '../Logos/JavaScriptLogo';
import CssLogo from '../Logos/CssLogo';
import HtmlLogo from '../Logos/HtmlLogo';

const listOfProjects = [
  {
    name: 'Othello',
    description:
      'Also known as Reversi is a two-player strategy board game, in this case only to play one player against a bot.',
    stack: [
      {
        label: 'JavaScript',
        icon: <JavaScriptLogo height="30px" width="30px" />
      },
      { label: 'CSS', icon: <CssLogo height="30px" width="30px" /> },
      { label: 'HTML', icon: <HtmlLogo height="30px" width="30px" /> }
    ],
    source: 'a'
  },
  {
    name: 'dos',
    description: '',
    stack: [{ label: '', icon: '' }],
    source: ''
  },
  {
    name: 'tres',
    description: '',
    stack: [{ label: '', icon: '' }],
    source: ''
  },
  {
    name: 'cuatro',
    description: '',
    stack: [{ label: '', icon: '' }],
    source: ''
  }
];

export default listOfProjects;
