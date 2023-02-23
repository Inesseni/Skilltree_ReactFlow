const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const myWidth = window.innerWidth;
const mycenter = myWidth / 2 - 40;

const myXOffset = clamp(window.innerWidth / 20, 25, 35);
const myYOffset = clamp(window.innerWidth / 0.2, 50, 70);

const nodes = [
  {
    id: "0",
    className: "first",
    type: "input",
    data: { label: "start game in 1993", key: "node1" },
    position: { x: mycenter - 20, y: 0 },
    title: "START",
    text: "Born and raised in bavaria!",
    imgLink: require("./img/1.jpg"),
  },
  {
    id: "1",
    className: "first",
    type: "input",
    data: { label: "start game in 1993", key: "node1" },
    position: { x: mycenter - 20, y: 0 },
    title: "START",
    text: "Born and raised in bavaria!",
    imgLink: require("./img/1.jpg"),
  },
  {
    id: "2",
    data: { label: "art class", key: "node2" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 3 },
    title: "ART CLASS",
    text: "Art has always been my biggest strength. \n I was part of the Leistungskurs and participated in art competitions and travels to the Bienalle in Venice.",
    imgLink: require("./img/2.jpg"),  
  },
  {
    id: "3",
    data: { label: "gaming", key: "node3" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 3 },
    title: "GAMING",
    text: "My older brother would always give me CDs with cool games to play or i went to the local library to borrow them. Unreal tournament, Sacred, The Sims, Trackmania, Plants vs. Zombies, and many more.",
    imgLink: require("./img/3.jpeg") },

  {
    id: "4",
    type: "output",
    data: { label: "art & design basics", key: "node4" },
    position: { x: mycenter - myXOffset * 4, y: myYOffset * 5 },
    title: "ART & DESIGN BASICS",
    text: "I was lucky to have a great art teacher, she really sparked an interest in me about the old masters, modernism and color theory!",
    imgLink: require("./img/4.jpg")},
  {
    id: "5",
    data: { label: "drawing", key: "node5" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 7 },
    title: "DRAWING",
    text: "When i was younger i was convinced: whenever i start a drawing, it turns into gold! Today i am more realistic about my art, but still get lost for hours drawing in the flow.",
    imgLink: require("./img/5.jpg")},
  {
    id: "6",
    data: { label: "university", key: "node6" },
    position: { x: mycenter, y: myYOffset * 5 },
    title: "UNIVERSITY",
    text: "Following my passion for art and design, i studies Multimedia|VR-Design. I was fascinated by immersive media and wanted to teleport people into a different world!",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F6.jpg?alt=media&token=ad336b28-4324-49ec-87e9-3dca03d2b420",
  },

  {
    id: "7",
    data: { label: "game design", key: "node7" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 7 },
    title: "GAME DESIGN",
    text: "During my studies i focused on game design and XR. Interactive immersive media often requires our full attention and is therefore a great tool for education and fun! I think that's why i was always drawn to it.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F7.JPG?alt=media&token=deed0448-8ce9-4614-9cee-a64730c096b2",
  },
  {
    id: "8",
    data: { label: "game art", key: "node8" },
    position: { x: mycenter, y: myYOffset * 9 },
    title: "GAME ART",
    text: "Can't get enough of making game art! First released game: Purry furry adventurry!",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F8.jpg?alt=media&token=2d36b2b3-d65d-4a51-95cd-f41da278ffb0",
  },

  {
    id: "9",
    data: { label: "Unity", key: "node9" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 14 },
    title: "UNITY",
    text: "When i started making games, i went to Unity classes at my university. Started out with PlayMaker, but soon switched to big-boy C# to make interactive 2D and 3D apps.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F9.JPG?alt=media&token=3cb42e4a-ebc5-4e17-be3d-bad7e5aaf90c",
    link: "https://portfolio.adobe.com/682518fb-db29-44f6-ae04-78cc66fc71cb/editor/university-projects-in-unity",
  },
  {
    id: "10",
    data: { label: "Blender", key: "node10" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 9 },
    title: "BLENDER",
    text: "I use Blender almost every day. Quickly modeling prototype assets for a new 3D application or stylized low poly game assets and animations, Blender is my baby.",
  },

  {
    id: "11",
    type: "output",
    data: { label: "3D Modelling", key: "node12" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 12.5 },
    title: "3D MODELLING",
    text: "I love stylized low poly art and handpainted textures! I either model all the assets i need myself, or get them online and customize them for quick prototypes.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F11.jpg?alt=media&token=6bc00359-ea6a-4bb8-a0fb-9a8ad2160fc9",
  },
  {
    id: "12",
    type: "output",
    data: { label: "3D Animation", key: "node13" },
    position: { x: mycenter + myXOffset * 6, y: myYOffset * 11 },
    title: "3D ANIMATION",
    text: "Although i don't do a lot of 3D animation anymore i know how to rig, weight paint, animate and how to use the right tools to get fast results.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F12.jpg?alt=media&token=7537b07e-2b50-4865-8ff2-d8d588a73aee",
  },

  {
    id: "13",
    type: "output",
    data: { label: "C#", key: "node14" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 16 },
    title: "C#",
    text: "Although i initially hated programming and tried to find a way around it, i loved it at the end of my studies with the help of great mentors and by doing game jams!",
  },
  {
    id: "14",
    data: { label: "AR", key: "node15" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 17.3 },
    title: "AR",
    text: "AR is fascinating to me. You are still grounded in reality, it's widely used already and can be experienced and shared with others very easily.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F14.jpg?alt=media&token=f558dbe5-44b4-448c-9bf0-66b790366b9c",
  },
  {
    id: "15",
    data: { label: "VR", key: "node16" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 16 },
    title: "VR",
    text: "I still want to teleport people! It's so much fun to create truly immersive worlds and see others experience it with awe! So happy i get to build VR apps as a freelancer now.",
  },

  {
    id: "16",
    data: { label: "Social AR", key: "node17" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 19.3 },
    title: "SOCIAL AR",
    text: "After my studies i started to make AR effects for social media like Instagram and Snapchat! I love how accesible it is for everyone and that people have lot of fun with it!",
  },
  {
    id: "17",
    data: { label: "JavaScript", key: "node18" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 20.5 },
    title: "JAVASCRIPT",
    text: "In 2021 i started to learn a lot about JavaScript, since all the AR software i used for social AR is based on it. And it led me deeper into my programming adventures!",
  },
  {
    id: "18",
    data: { label: "Front End", key: "node19" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 22.5 },
    title: "FRONT END",
    text: "Encouraged by my coding progress and curiosity, i started to get more into web & app development and built my first little web tools and websites!",
  },

  {
    id: "19",
    className: "loading",
    type: "output",
    data: { label: "Three.js", key: "node20" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 25 },
    title: "THREE.JS",
    text: "Most interesting for me is Three.js at this point. I love seeing creative use of 3D in web and want to make beautiful interactive websites myself, accessible for all!",
  },
  {
    id: "20",
    data: { label: "HTML / CSS", key: "node21" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 27.5 },
    title: "HTML/CSS",
    text: "Although i dabbled into HTML and CSS already in the past, i feel like i am now finally using it's full potential.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F20.jpg?alt=media&token=0b642243-104b-41c9-9193-a7772058e6fa",
  },
  {
    id: "21",
    className: "loading",
    type: "output",
    data: { label: "React (+Native)", key: "node22" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 29 },
    title: "REACT / REACT NATIVE",
    text: "I'm lucky to have great friends that can teach me about react! It's so convenient and fun to design reusable components and beautiful web apps!",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F21.jpg?alt=media&token=a1ecb00f-ff5f-4323-afb6-76453e6d94b2",
  },

  {
    id: "22",
    className: "loading",
    data: { label: "WebXR", key: "node23" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 19.9 },
    title: "WEB XR",
    text: "My ultimate goal at the moment is to create a WebXR app and make AR & VR apps more accessible for everyone through their browser!",
  },
  {
    id: "23",
    type: "output",
    data: { label: "GitHub", key: "node24" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 26.3 },
    title: "GITHUB",
    text: "Livesafer and a coders best friend! I learned to love GitHub .. the hard way.",
  },
  {
    id: "24",
    type: "output",
    data: { label: "Figma", key: "node25" },
    position: { x: mycenter + myXOffset * 5.5, y: myYOffset * 25 },
    title: "FIGMA",
    text: "Part of my Front-End-Journey is to find tools that make my life easier. Figma falls into that category, i love how easy it is to set up a prototype and get an idea across!",
  },

  ///////////left path
  {
    id: "25",
    data: { label: "photography", key: "node26" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 9 },
    title: "PHOTOGRAPHY",
    text: "Taking photos has been a way to document the world and myself, and was always a big part of my creative experiments.",
    imgLink:
      "https://scontent-ham3-1.xx.fbcdn.net/v/t31.18172-8/774330_565551576806689_1249498654_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=01JqgNV5rEIAX-Zy4Fz&_nc_ht=scontent-ham3-1.xx&oh=00_AfADTw669r6cPLglFJ9QOgr8q2WhKP8XYG-hBNU1vBm7Ag&oe=6410A175",
  },
  {
    id: "26",
    data: { label: "video", key: "node27" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 12 },
    title: "VIDEO",
    text: "What a better way to document stuff with 24 photos per second? I love making tiny video clips about every project to share on social media.",
  },
  {
    id: "27",
    data: { label: "Photoshop", key: "node28" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 10.7 },
    title: "PHOTOSHOP",
    text: "Started to edit my photos, created (very cool) collages and experimented with all the functionality Adobe has to offer.",
    imgLink:
      "https://scontent-ham3-1.xx.fbcdn.net/v/t1.18169-9/1902952_814418188586692_845048319_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=quIKdIL6vygAX8BS6_8&_nc_ht=scontent-ham3-1.xx&oh=00_AfA4_FpAV9CapnPXZJILECUfICZ3HkQglgON5RqYc2pSzQ&oe=6410A8B4",
    //https://scontent-ham3-1.xx.fbcdn.net/v/t31.18172-8/13483062_1329413753753797_3860708358604064989_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=5iwUcMIorsUAX_N5SoW&_nc_ht=scontent-ham3-1.xx&oh=00_AfDXsf0JSVa-E6MammvA3kD-WgPNP2ssEY3VBlUOTnztEw&oe=64109D59
  },
  {
    id: "28",
    data: { label: "Texturing", key: "node29" },
    position: { x: mycenter, y: myYOffset * 12.7 },
    title: "TEXTURING",
    text: "My Photoshop and drawing skills come in handy when i need to create textures for 3D Models!",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F28.jpg?alt=media&token=40655c47-6035-44fb-a822-54e13f59593f",
  },
  {
    id: "29",
    type: "output",
    data: { label: "2D Animation", key: "node30" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 14 },
    title: "2D ANIMATION",
    text: "Little stop motion clips turned into gifs turned into frame-by-frame animations. To this day i love drawing animations by hand, but also use tools like spine.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/Skilltree%2F29.jpg?alt=media&token=55510a62-e48c-4cab-ba0d-43115a501a13",
  },
  {
    id: "30",
    data: { label: "Youtube", key: "node31" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 15.5 },
    title: "YOUTUBE",
    text: "2022 i started to upload videos of my projects more often to youtube, until i finally started doing tutorials on social AR! Planning to do more topics and tools soon.",
  },
  {
    id: "31",
    data: { label: "Premiere / After effects", key: "node32" },
    position: { x: mycenter - myXOffset * 7, y: myYOffset * 14 },
    title: "PREMIERE / AFTER EFFECTS",
    text: "I can't edit my videos on my phone forever.. i already learned a thing or two about this great tools during university which helps a whol lot!",
  },

  {
    id: "32",
    className: "loading",
    type: "output",
    data: { label: "teaching", key: "node33" },
    position: { x: mycenter - myXOffset * 4.5, y: myYOffset * 19 },
    title: "TEACHING",
    text: "It is so rewarding to see that my tutorials are helpful to people! I really like sharing my knowledge and want to lean more into teaching this year.",
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/storyPics%2Fmithorns.png?alt=media&token=0c5f8450-0af0-42ab-9425-33592960537e",
  },
  {
    id: "33",
    className: "loading",
    type: "output",
    data: { label: "video editing", key: "node34" },
    position: { x: mycenter - myXOffset * 7, y: myYOffset * 17.5 },
    title: "VIDEO EDITING",
    text: "I'm trying to improve my video quality with every new video. Engaging and fun editing that keeps people hooked is something i want to get better at!",
  },
];

export default nodes;
