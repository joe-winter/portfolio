// import makersUiGame from `${import.meta.env.BASE_URL}assets/images/MakersUIGame/host-landing.png`;
import acebook from './assets/images/Acebook/home-page.png';
import battleships from './assets/images/Battleships/battleships.png';

import reactIcon from './assets/icons/react.svg';
import nodeIcon from './assets/icons/node.svg';
import socketioIcon from './assets/icons/socketio.svg';
import jestIcon from './assets/icons/jest.svg';
import playwrightIcon from './assets/icons/playwright.svg';
import tailwindIcon from './assets/icons/tailwind.svg';
import viteIcon from './assets/icons/vite.svg';
import jwtIcon from './assets/icons/jwt.svg';
import expressIcon from './assets/icons/express.svg';
import mongodbIcon from './assets/icons/mongodb.svg';
import vitestIcon from './assets/icons/vitest.svg';
import pythonIcon from './assets/icons/python.svg';
import pytestIcon from './assets/icons/pytest.svg';

const projects = [
  {
    id: 1,
    title: "MakersUIGame",
    description:
      "A multiplayer number guessing game with lobbies, round timers, real-time updates and deployed via Render with CI/CD using GitHub Actions.",
    github: "https://github.com/shammy642/MakersUIGame",
    link: "https://example.com/",
    technologies: [
      reactIcon,
      nodeIcon,
      socketioIcon,
      jestIcon,
      playwrightIcon,
      tailwindIcon,
      viteIcon,
    ],
    images: `${import.meta.env.BASE_URL}assets/images/MakersUIGame/host-landing.png`,
  },
  {
    id: 2,
    title: "Acebook",
    description:
      "A Facebook clone with React, Node.js, Express and MongoDB, featuring authentication, dynamic posts, profiles, friends, likes and messages.",
    github: "https://github.com/Alexia-May/acebook-watermelon-club",
    link: "https://example.com/",
    technologies: [
      reactIcon,
      nodeIcon,
      jwtIcon,
      expressIcon,
      mongodbIcon,
      vitestIcon,
      viteIcon,
    ],
    images: acebook,
  },
  {
    id: 3,
    title: "Battleships",
    description:
      "A Battleship game implemented in Python with PyTest for unit testing, featuring ship placement, turn-based gameplay, and hit/miss mechanics.",
    github: "https://github.com/joe-winter/battleships",
    technologies: [pythonIcon, pytestIcon],
    images: battleships,
  },
];

export default projects;
