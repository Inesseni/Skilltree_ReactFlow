const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const myWidth = window.innerWidth;
const mycenter = myWidth / 2 - 40;

const myXOffset = clamp(window.innerWidth / 20, 25, 35);
const myYOffset = clamp(window.innerWidth / 0.2, 50, 70);

const nodes = [
  {
    id: "0",
    key: "node0",
    className: "first",
    type: "input",
    data: { label: "start game in 1993", key: "node0" },
    position: { x: mycenter - 20, y: 0 },
    title: "START",
    text: "Born and raised in bavaria!",
    imgLink: require("./img/1b.jpg"),
  },
  {
    id: "1",
    key: "node1",
    className: "first",
    type: "input",
    data: { label: "start game in 1993", key: "node1c" },
    position: { x: mycenter - 20, y: 0 },
    title: "START",
    text: "Born and raised in bavaria",
    imgLink: require("./img/1b.jpg"),
  },

  {
    id: "2",
    key: "node2",
    data: { label: "art class", key: "node2" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 3 },
    title: "ART CLASS",
    text: "Art has always been my biggest strength. \n I was part of the Leistungskurs and participated in art competitions and travels to the Bienalle in Venice.",
    imgLink: require("./img/2b.jpg"),
  },
  {
    id: "3",
    key: "node3",
    data: { label: "gaming", key: "node3" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 3 },
    title: "GAMING",
    text: "My older brother would always give me CDs with games to play or i'd go to the local library to borrow them. This sparked a great interest in games and interactive media.",
    imgLink: require("./img/3.jpg"),
  },

  {
    id: "4",
    key: "node4",
    type: "output",
    data: { label: "art & design basics", key: "node4" },
    position: { x: mycenter - myXOffset * 4, y: myYOffset * 5 },
    title: "ART & DESIGN BASICS",
    text: "I was lucky to have a great art teacher who taught me about art genres and masterpieces and eventually pushed me to consider art and design as a career path.",
    imgLink: require("./img/4.jpg"),
  },
  {
    id: "5",
    key: "node5",
    data: { label: "drawing", key: "node5" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 7 },
    title: "DRAWING",
    text: "I was drawing my whole life. It always felt naturally to me and i still enjoy sketching and documenting my day in little drawings.",
    imgLink: require("./img/5.jpg"),
  },
  {
    id: "6",
    key: "node6",
    data: { label: "university", key: "node6" },
    position: { x: mycenter, y: myYOffset * 5 },
    title: "UNIVERSITY",
    text: "Following my passion for art and design, i studies Multimedia|VR-Design. I was fascinated by immersive media and wanted to teleport people into a different world!",
    imgLink: require("./img/6.jpg"),
    link: "https://portfolio.adobe.com/682518fb-db29-44f6-ae04-78cc66fc71cb/editor/university-projects-in-unity",
    linktext: "University Projects",
  },

  {
    id: "7",
    key: "node7",
    data: { label: "game design", key: "node7" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 7 },
    title: "GAME DESIGN",
    text: "During my studies i focused on game design and XR. Interactive immersive media often requires our full attention and is therefore a great tool for education and fun! I think that's why i was always drawn to it.",
    imgLink: require("./img/7.JPG"),
    link: "https://ineshilz.myportfolio.com/vr-platformer-game-prototype",
    linktext: "ENERWARS: VR Platformer Prototype",
  },
  {
    id: "8",
    key: "node8",
    data: { label: "game art", key: "node8" },
    position: { x: mycenter, y: myYOffset * 9 },
    title: "GAME ART",
    text: "2021 i released my first official game on steam! I collaborated with Robin Gerndt who did the programming in Unreal engine and the composed the soundtrack. I drew all the game assets and frame-by-frame animations.",
    imgLink: require("./img/8.jpg"),
    link: "https://ineshilz.myportfolio.com/crappy-cat-game",
    linktext: "Purry furry Adventurry on steam",
  },

  {
    id: "9",
    key: "node9",
    data: { label: "Unity", key: "node9" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 14 },
    title: "UNITY",
    text: "I started making games in 2018 with Unity PlayMaker, since i didn't know anything about programming at first. Pretty quickly i switched to C# to make interactive 2D and 3D apps.",
    imgLink: require("./img/9.JPG"),
    link: "https://portfolio.adobe.com/682518fb-db29-44f6-ae04-78cc66fc71cb/editor/university-projects-in-unity",
    linktext: "University Projects",
  },
  {
    id: "10",
    key: "node10",
    data: { label: "Blender", key: "node10" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 9 },
    title: "BLENDER",
    text: "I use Blender almost every day to quickly create prototype assets for 3D applications, stylized low poly game assets and animations.",
    imgLink: require("./img/10.jpg"),
  },

  {
    id: "11",
    key: "node11",
    type: "output",
    data: { label: "3D Modelling", key: "node12" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 12.5 },
    title: "3D MODELLING",
    text: "I love stylized low poly art and handpainted textures! I either model all the assets i need myself, or get them online and customize them for quick prototypes.",
    imgLink: require("./img/11.jpg"),
  },
  {
    id: "12",
    key: "node12",
    type: "output",
    data: { label: "3D Animation", key: "node13" },
    position: { x: mycenter + myXOffset * 6, y: myYOffset * 11 },
    title: "3D ANIMATION",
    text: "Although i don't do a lot of 3D animation anymore i know how to rig, weight paint, animate and how to use the right tools to get fast results.",
    imgLink: require("./img/12.jpg"),
  },

  {
    id: "13",
    key: "node13",
    type: "output",
    data: { label: "C#", key: "node14" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 16 },
    title: "C#",
    text: "Although i initially hated programming and tried to find a way around it, i totally fell in love with it with the help of great mentors and a lot of game jams!",
    imgLink: require("./img/13.png"),
  },
  {
    id: "14",
    key: "node14",
    data: { label: "AR", key: "node15" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 17.3 },
    title: "AR",
    text: "Most of my work is in AR these days. It has so much potential, is widely used already and can be experienced and shared with others very easily.",
    imgLink: require("./img/14.jpg"),
    link: "https://ineshilz.myportfolio.com/ar",
    linktext: "View AR projects",
  },
  {
    id: "15",
    key: "node15",
    data: { label: "VR", key: "node16" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 16 },
    title: "VR",
    text: "VR is still one of the most interesting technologies for me. The possibility to tranport the players/users into different world and immerse them in a story is super fascinating.",
    imgLink: require("./img/15.png"),
    link: "https://ineshilz.myportfolio.com/vr",
    linktext: "View VR projects",
  },

  {
    id: "16",
    key: "node16",
    data: { label: "Social AR", key: "node17" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 19.3 },
    title: "SOCIAL AR",
    text: "After my studies i started to make AR effects for social media like Instagram and Snapchat! I love how accesible it is for everyone and that people have lot of fun with it!",
    imgLink: require("./img/16.jpg"),
    link: "https://lensstudio.snapchat.com/creator/F1cYXucDAIl9uze0JG0RmA",
    linktext: "View Snapchat portfolio",
  },
  {
    id: "17",
    key: "node17",
    data: { label: "JavaScript", key: "node18" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 20.5 },
    title: "JAVASCRIPT",
    text: "In 2021 i started to learn a lot about JavaScript, since all the AR software i used for social AR is based on it.",
    imgLink: require("./img/17.png"),
  },
  {
    id: "18",
    key: "node18",
    data: { label: "Front End", key: "node19" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 22.5 },
    title: "FRONT END",
    text: "Encouraged by my coding progress and the search for a challenge, i started to get more into web & app development and built my first little web tools and websites!",
    imgLink: require("./img/18.jpg"),
    link: "https://ineshilz.myportfolio.com/front-end-development",
    linktext: "View Front-End projects",
  },

  {
    id: "19",
    key: "node19",
    className: "loading",
    type: "output",
    data: { label: "Three.js", key: "node20" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 25 },
    title: "THREE.JS",
    text: "I am probably learning something new about three.js while you are reading this. I love seeing creative use of 3D in web and want to make beautiful interactive websites.",
    imgLink: require("./img/19.jpg"),
  },
  {
    id: "20",
    key: "node20",
    data: { label: "HTML / CSS", key: "node21" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 26.5 },
    title: "HTML/CSS",
    text: "I occasionally used HTML and CSS in the past. Now i am able to combine it with Javascript and use it to it's full potential.",
    imgLink: require("./img/20.jpg"),
  },
  {
    id: "21",
    key: "node21",
    className: "loading",
    type: "output",
    data: { label: "React (+Native)", key: "node22" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 28 },
    title: "REACT / REACT NATIVE",
    text: "I'm lucky to have great friends that can teach me about react! It's so convenient and fun to design reusable components and beautiful web apps!",
    imgLink: require("./img/21.jpg"),
  },
  /*
  {
    id: "22",
    key: "node22",
    className: "loading",
    data: { label: "WebXR", key: "node23" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 19.9 },
    title: "WEB XR",
    text: "My ultimate goal at the moment is to create a WebXR app and make AR & VR apps more accessible for everyone through their browser!",
  },*/
  {
    id: "23",
    key: "node23",
    type: "output",
    data: { label: "GitHub", key: "node24" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 25 },
    title: "GITHUB",
    text: "I learned to love GitHub .. the hard way. Source control is super important no matter how big the project is.",
    imgLink: require("./img/23.jpg"),
    link: "https://github.com/Inesseni",
    linktext: "My GitHub",
  },
  /*
  {
    id: "24",
    key: "node24",
    type: "output",
    data: { label: "Figma", key: "node25" },
    position: { x: mycenter + myXOffset * 5.5, y: myYOffset * 25 },
    title: "FIGMA",
    text: "Part of my Front-End-Journey is to find tools that make my life easier. Figma falls into that category, i love how easy it is to set up a prototype and get an idea across!",
  },*/

  ///////////left path
  {
    id: "25",
    key: "node25",
    data: { label: "photography", key: "node26" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 9 },
    title: "PHOTOGRAPHY",
    text: "Taking photos has been a way to document the world and myself, and was a big part of my creative experiments and expressions during my teenage years.",
    imgLink: require("./img/25.jpg"),
  },
  {
    id: "26",
    key: "node26",
    data: { label: "video", key: "node27" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 12 },
    title: "VIDEO",
    text: "In the age of social media i mostly use video to document my projects and post about my progress online.",
    link: "https://www.instagram.com/inidewin_/",
    linktext: "My Instagram account",
  },
  {
    id: "27",
    key: "node27",
    data: { label: "Photoshop", key: "node28" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 10.7 },
    title: "PHOTOSHOP",
    text: "Photoshop was one of the first tools i used to alter my photos and create digital art. Today i mostly use it to create and edit 2D assets for my projects.",
    imgLink: require("./img/27b.jpg"),
  },
  {
    id: "28",
    key: "node28",
    data: { label: "Texturing", key: "node29" },
    position: { x: mycenter, y: myYOffset * 12.7 },
    title: "TEXTURING",
    text: "My Photoshop and drawing skills come in handy when i need to create textures for 3D Models!",
    imgLink: require("./img/28.jpg"),
  },
  {
    id: "29",
    key: "node29",
    type: "output",
    data: { label: "2D Animation", key: "node30" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 14 },
    title: "2D ANIMATION",
    text: "Little stop motion clips turned into gifs turned into frame-by-frame animations. To this day i love drawing animations by hand.",
    imgLink: require("./img/29.jpg"),
  },
  {
    id: "30",
    key: "node30",
    data: { label: "Youtube", key: "node31" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 15.5 },
    title: "YOUTUBE",
    text: "In 2022 i uploaded videos of my projects more often, until i eventually started recording myself doing tutorials and talking about AR. ",
    imgLink: require("./img/30.jpg"),
    link: "https://www.youtube.com/@ineshilz/featured",
    linktext: "My YouTube channel",
  },
  {
    id: "31",
    key: "node31",
    data: { label: "Premiere / After effects", key: "node32" },
    position: { x: mycenter - myXOffset * 7, y: myYOffset * 14 },
    title: "PREMIERE / AFTER EFFECTS",
    text: "While i first edited all of my videos on the phone, i eventually switched to Premiere Pro and After Effects to level up my editing skills.",
    imgLink: require("./img/31.png"),
  },

  {
    id: "32",
    key: "node32",
    className: "loading",
    type: "output",
    data: { label: "teaching", key: "node33" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 19 },
    title: "TEACHING",
    text: "Watching YouTube tutorials myself for years, i decided to give it a try and share some of my knowledge. It's been super nice to see that it is helpful to people!.",
    imgLink: require("./img/32.png"),
    link: "https://www.youtube.com/playlist?list=PLQ4NDgEDy3Uku7KOwBORu-EuF7rtKAhVS",
    linktext: "AR tutorials playlist",
  },
  {
    id: "33",
    key: "node33",
    className: "loading",
    type: "output",
    data: { label: "video editing", key: "node34" },
    position: { x: mycenter - myXOffset * 7, y: myYOffset * 17.5 },
    title: "VIDEO EDITING",
    text: "I try to improve my video quality with every new video. Engaging and fun editing that keeps people hooked is something i want to get better at!",
    imgLink: require("./img/33.jpg"),
  },
];

export default nodes;
