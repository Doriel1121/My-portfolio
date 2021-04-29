import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Doriel', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome', // e.g: Welcome to my website
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
  img: 'pro.png',
  paragraphOne:
    'Im a hard working and dedicated fullstack developer with a keen eye for detail, and with a constant hunger to gain as much knowledge/experince as can. I always try to better myself with every project I work on.',
  paragraphTwo:
    'I belive that a positive curiosity is the key to success, the need to know more, to achieve more. aventualy will bring you more. ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1SVCWxPyjv_d22mS93M8trJamkPByliXy/view?usp=drivesdk', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'souto-pouto.png',
    title: 'Souto Manager, Employee interaction',
    info: 'To make work much easier and clearer to both manager and employee.',
    info2:
      'as simple as that : manager make a board with tasks and his board"s members (his employees) needs to complete those tasks. ',
    url: '',
    repo: 'https://github.com/Doriel1121/souto.git', // if no repo, the button will not show up
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
    img: 'memory.png',
    title: 'Memory game',
    info: 'Classic and friendly memory game',
    info2: 'The included technologies and packages are React.js , Jquery , React-router',
    url: 'https://doriel1121.github.io/memory/',
    repo: 'https://github.com/Doriel1121/memory.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hair.png',
    title: 'Haircutter',
    info: 'An app to book a reservation to the barber',
    info2: 'Made by React.js and bootstrap as main design package',
    url: 'https://barberia.netlify.app',
    repo: 'https://github.com/Doriel1121/Haircutter.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awsome',
  btn: "Let's Talk",
  email: 'dorielaboya@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
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
