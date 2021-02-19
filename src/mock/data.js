import {
  nanoid
} from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is ',
  name: 'Doriel',
  subtitle: 'Im a Fullstack Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Im a hard working and dedicated fullstack developer with a keen eye for detail, and with a constant hunger to gain as much knowledge/experince as can. I always try to better myself with every project I work on.",
  paragraphTwo: 'I belive that a positive curiosity is the key to success, the need to know more, to achieve more. aventualy will bring you more. ',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1SVCWxPyjv_d22mS93M8trJamkPByliXy/view?usp=drivesdk', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'Souto.png',
    title: 'Souto Manager, Employee interaction',
    info: 'To make work much easier and clearer to both manager and employee.',
    info2: 'as simple as that : manager make a board with tasks and his board"s members (his employees) needs to complete those tasks. ',
    url: '',
    repo: 'https://github.com/omer-dayan/souto.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'delivery.png',
    title: 'Delivery Fruit & Vegtables',
    info: 'Interaction between client and supllier make a list and order',
    info2: 'application made using react.js and server in node .js',
    url: 'https://fruitsshopvegtabeles.netlify.app',
    repo: 'https://github.com/Doriel1121/delivery.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memory.jpg',
    title: 'Memory game',
    info: 'Classic and friendly memory game',
    info2: 'The included technologies and packages are React.js , Jquery , React-router',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/doriel-aboya-3674081a2',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Doriel1121/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};