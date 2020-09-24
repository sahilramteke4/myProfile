import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Sahil Ramteke',
  subtitle: "I'm the full-stack Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'P1.jpg',
  paragraphOne:
    'I belong to Nagpur, I have done my graduation from Government college of engineering aurangabad during the year of 2019',
  paragraphTwo:
    'I am quite good with computers and I generally go with C++. Now I am working with Amdocs as a Data Warehouse and Business Intelligence Developer',
  paragraphThree:
    'As I like web development, I possess some knowledge of HTML, CSS, javascript, react.js, nodejs, express.js and postgreSql. I have couple of hobbies like playing football, cooking, web series, animes etc. That is all about me!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'shoppingList.PNG',
    title: 'Shopping list',
    info:
      "It's a shopping list app where you can add the items in the list, and mark them if you brought it. Just add item name into the textbox and press enter, and your item will get added in the list.To mark the item as brought just click on the item name in the list and it will get cut out. To remove the item from the list click on the delete button beside the item name.",
    info2: 'The app is made with the javascript, DOM manipulation and bit of html and css.',
    url: 'https://sahilramteke4.github.io/shopping-list/',
    repo: 'https://github.com/sahilramteke4/shopping-list', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'backGroundGenerator.PNG',
    title: 'Background generator',
    info:
      "It's an app for the developers to select the beauitful background for their applications. There are color boxes, by clicking on them you can expicitly choose your color combinations. There is random button in the end, if you are not getting a good idea of which color to choose, just click on random button and let the app help you.",
    info2: 'The app made with html, css and javascript with DOM manipulations.',
    url: 'https://sahilramteke4.github.io/background_generator/',
    repo: 'https://github.com/sahilramteke4/background_generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'roboFriends.PNG',
    title: 'Robo friends',
    info:
      "It's the beautiful application, it consists of beauitful robo cards with a beautiful background and fonts. The search bar is like the cherry on the cake, one can search the specific robots in realtime as it searches everytime you add or remove a character from the search.",
    info2:
      "Robo friends is made with react.js and API's and npm for a bit more functionality and convinience.",
    url: 'https://sahilramteke4.github.io/robofriends/',
    repo: 'https://github.com/sahilramteke4/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smartBrain.PNG',
    title: 'Smart brains',
    info:
      'Smart brain is a app with ability of detecting faces. Just put the image url in the textbox and click the detect button and it will show the image and detects the face in the image. It also increases the score as you detects the new faces. It consist of a registration page, signin page and a home page.',
    info2:
      "Smart brain is made with technologies like react.js in the frontend and API's, node.js, express.js, sql and database postgreSql at the backend.",
    url: 'https://smart-brains-sb.herokuapp.com/',
    repo: 'https://github.com/sahilramteke4/smart-brain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'funFacts.PNG',
    title: 'Fun facts',
    info:
      'Fun facts is an app made with the combination of different APIs. It is fun and cool as it takes the input number and provides some fact related to that number, you can also get location of IIST, you can increase your knowledge of pokemon and having a good laugh with chuck norris jokes is like cherry on the cake.',
    info2:
      'It includes numberfact API, pokeAPI, chuckNorris API and IIST API, made with react and APIs and with some love.',
    url: 'https://sahilramteke4.github.io/funfacts/',
    repo: 'https://github.com/sahilramteke4/FunFacts', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '8055749262',
  btn: 'sahilramteke4@gmail.com',
  email: 'sahilramteke4@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/sahil-ramteke-4a2b14139',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/sahilramteke4/gatsby-simplefolio',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
