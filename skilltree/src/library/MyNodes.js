const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const myWidth = window.innerWidth;
const mycenter = myWidth / 2 - 40;

const myXOffset = clamp((window.innerWidth / 20), 25, 35);
const myYOffset = clamp((window.innerWidth / 0.20), 50, 70);

const nodes = [
    {
      id: "1",
      className: "first",
      type: "input",
      data: { label: "start game in 1993", key: "node1" },
      position: { x: mycenter - 20, y: 0 },
      title: "START",
      text: "Born and raised in bavaria!",
    },
    {
      id: "2",
      data: { label: "art class", key: "node2" },
      position: { x: mycenter - myXOffset * 2, y: myYOffset * 3 },
      title: "ART CLASS",
      text: "Art has always been my biggest strength. \n I was part of the Leistungskurs and participated in art competitions and travels to the Bienalle in Venice.",
    },
    {
      id: "3",
      data: { label: "gaming", key: "node3" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 3 },
      title: "GAMING",
      text: "My older brother showed me a lot of games growing up. Nintendos best on the gamecube, The Sims, Trackmania, Plants vs. Zombies, and many more.",
    },
  
    {
      id: "4",
      type: "output",
      data: { label: "art & design basics", key: "node4" },
      position: { x: mycenter - myXOffset * 4, y: myYOffset * 5 },
      title: "ART & DESIGN BASICS",
      text: "I was lucky to have a great art teacher, she really sparked an interest in me about the old masters, modernism and color theory!",
    },
    {
      id: "5",
      data: { label: "drawing", key: "node5" },
      position: { x: mycenter - myXOffset * 2, y: myYOffset * 7 },
      title: "DRAWING",
      text: "When i was younger i was convinced: whenever i start a drawing, it turns into gold! Today i am more realistic about my art, but still get lost for hours drawing in the flow.",
    },
    {
      id: "6",
      data: { label: "university", key: "node6" },
      position: { x: mycenter, y: myYOffset * 5 },
      title: "UNIVERSITY",
      text: "Following my passion for art and design, i studies Multimedia|VR-Design. I was fascinated by immersive media and wanted to teleport people into a different world!",
    },
  
    {
      id: "7",
      data: { label: "game design", key: "node7" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 7 },
      title: "GAME DESIGN",
      text: "During my studies i focused on game design and XR. Interactive immersive media often requires our full attention and is therefore a great tool for education and fun! I think that's why i was always drawn to it.",
    },
    {
      id: "8",
      data: { label: "game art", key: "node8" },
      position: { x: mycenter, y: myYOffset * 9 },
      title: "GAME ART",
      text: "Can't get enough of making game art! First released game: Purry furry adventurry!",
    },
  
    {
      id: "9",
      data: { label: "Unity", key: "node9" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 14 },
      title: "UNITY",
      text: "When i started making games, i went to Unity classes at my university. Started out with PlayMaker, but soon switched to big-boy C# to make interactive 2D and 3D apps.",
    },
    {
      id: "10",
      data: { label: "Blender", key: "node10" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 9 },
      title: "BLENDER",
      text: "I use Blender almost every day. Quickly modeling prototype assets for a new 3D application or stylized low poly game assets and animations, Blender is my baby.",
    },
  
    {
      id: "12",
      type: "output",
      data: { label: "3D Modelling", key: "node12" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 12.5 },
      title: "3D MODELLING",
      text: "I love stylized low poly art and handpainted textures! I either model all the assets i need myself, or get them online and customize them for quick prototypes.",
    },
    {
      id: "13",
      type: "output",
      data: { label: "3D Animation", key: "node13" },
      position: { x: mycenter + myXOffset * 6, y: myYOffset * 11 },
      title: "3D ANIMATION",
      text: "Although i don't do a lot of 3D animation these days i know how to rig, weight paint, animate and how to use the right tools to get fast results.",
    },
  
    {
      id: "14",
      type: "output",
      data: { label: "C#", key: "node14" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 16 },
      title: "C#",
      text: "Although i initially hated programming and tried to find a way around it, i loved it at the end of my studies with the help of great mentors and by doing game jams!",
    },
    {
      id: "15",
      data: { label: "AR", key: "node15" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 17.3 },
      title: "AR",
      text: "AR is fascinating to me. You are still grounded in reality, it's widely used already and can be experienced and shared with others very easily.",
    },
    {
      id: "16",
      data: { label: "VR", key: "node16" },
      position: { x: mycenter - myXOffset * 0, y: myYOffset * 16 },
      title: "VR",
      text: "I still want to teleport people! It's so much fun to create truly immersive worlds and see others experience it with awe! So happy i get to build VR apps as a freelancer now.",
    },
  
    {
      id: "17",
      data: { label: "Social AR", key: "node17" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 19.3 },
      title: "SOCIAL AR",
      text: "After my studies i started to make AR effects for social media like Instagram and Snapchat! I love how accesible it is for everyone and that people have lot of fun with it!",
    },
    {
      id: "18",
      data: { label: "JavaScript", key: "node18" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 20.5 },
      title: "JAVASCRIPT",
      text: "In 2021 i started to learn a lot about JavaScript, since all the AR software i used for social AR is based on it. And it led me deeper into my programming adventures!",
    },
    {
      id: "19",
      data: { label: "Front End", key: "node19" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 22.5 },
      title: "FRONT END",
      text: "Encouraged by my coding progress and curiosity, i started to get more into web & app development and built my first little web tools and websites!",
    },
  
    {
      id: "20",
      className: "loading",
      type: "output",
      data: { label: "Three.js", key: "node20" },
      position: { x: mycenter - myXOffset * 0, y: myYOffset * 25 },
      title: "THREE.JS",
      text: "Most interesting for me is Three.js at this point. I love seeing creative use of 3D in web and want to make beautiful interactive websites myself, accessible for all!",
    },
    {
      id: "21",
      data: { label: "HTML / CSS", key: "node21" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 27.5 },
      title: "HTML/CSS",
      text: "Although i dabbled into HTML and CSS already in the past, i feel like i am now finally using it's full potential.",
    },
    {
      id: "22",
      className: "loading",
      type: "output",
      data: { label: "React (+Native)", key: "node22" },
      position: { x: mycenter + myXOffset * 2, y: myYOffset * 29 },
      title: "REACT / REACT NATIVE",
      text: "I'm lucky to have great friends that can teach me about react! It's so convenient and fun to design reusable components and beautiful web apps!",
    },
  
    {
      id: "23",
      className: "loading",
      data: { label: "WebXR", key: "node23" },
      position: { x: mycenter - myXOffset * 0, y: myYOffset * 19.9 },
      title: "WEB XR",
      text: "My ultimate goal at the moment is to create a WebXR app and make AR & VR apps more accessible for everyone through their browser!",
    },
    {
      id: "24",
      type: "output",
      data: { label: "GitHub", key: "node24" },
      position: { x: mycenter + myXOffset * 4, y: myYOffset * 26.3 },
      title: "GITHUB",
      text: "Livesafer and a coders best friend! I learned to love GitHub .. the hard way.",
    },
    {
      id: "25",
      type: "output",
      data: { label: "Figma", key: "node25" },
      position: { x: mycenter + myXOffset * 5.5, y: myYOffset * 25 },
      title: "FIGMA",
      text: "Part of my Front-End-Journey is to find tools that make my life easier. Figma falls into that category, i love how easy it is to set up a prototype and get an idea across!",
    },
  
    //left path
    {
      id: "26",
      data: { label: "photography", key: "node26" },
      position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 9 },
    },
    {
      id: "27",
      data: { label: "video", key: "node27" },
      position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 12 },
    },
    {
      id: "28",
      data: { label: "Photoshop", key: "node28" },
      position: { x: mycenter - myXOffset * 2, y: myYOffset * 10.7 },
    },
    {
      id: "29",
      data: { label: "Texturing", key: "node29" },
      position: { x: mycenter, y: myYOffset * 12.7 },
    },
    {
      id: "30",
      type: "output",
      data: { label: "2D Animation", key: "node30" },
      position: { x: mycenter - myXOffset * 2, y: myYOffset * 14 },
    },
    {
      id: "31",
      data: { label: "Youtube", key: "node31" },
      position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 15.5 },
    },
    {
      id: "32",
      data: { label: "Premiere / After effects", key: "node32" },
      position: { x: mycenter - myXOffset * 7, y: myYOffset * 14 },
    },
  
    {
      id: "33",
      className: "loading",
      type: "output",
      data: { label: "teaching", key: "node33" },
      position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 19 },
    },
    {
      id: "34",
      className: "loading",
      type: "output",
      data: { label: "video editing", key: "node34" },
      position: { x: mycenter - myXOffset * 7, y: myYOffset * 17.5 },
    },
  ];

  export default nodes;