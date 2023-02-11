import ReactFlow from "reactflow";
import styled from "styled-components";
import React, { useState } from "react";

import "reactflow/dist/style.css";
import "./App.css";

import Description from "./components/Description";

const myWidth = window.innerWidth;
const mycenter = myWidth / 2 - 50;
const myXOffset = 30;
const myYOffset = 50;
var focusedNode = 0;
var nodeClicked = false;

const descriptions = [
  {
    id: "0",
    title: "ART CLASS",
    text: "0  this is an example text oejfdoawjfkas oe op eoioejf eijfpöef",
  },
  {
    id: "1",
    title: "START",
    text: "Born and raised in bavaria!",
  },
  {
    id: "2",
    title: "ART CLASS",
    text: "Art has always been my biggest strength. \n I was part of the Leistungskurs and participated in art competitions and travels to the Bienalle in Venice.",
  },
  {
    id: "3",
    title: "GAMING",
    text: "My older brother showed me a lot of games growing up. Nintendos best on the gamecube, The Sims, Trackmania, Plants vs. Zombies, and many more.",
  },
  {
    id: "4",
    title: "ART & DESIGN BASICS",
    text: "I was lucky to have a great art teacher, she really sparked an interest in me about the old masters, modernism and color theory!",
  },
  {
    id: "5",
    title: "DRAWING",
    text: "When i was younger i was convinced: whenever i start a drawing, it turns into gold! Today i am more realistic about my art, but still get lost for hours drawing in the flow.",
  },
  {
    id: "6",
    title: "UNIVERSITY",
    text: "Following my passion for art and design, i studies Multimedia|VR-Design. I was fascinated by immersive media and wanted to teleport people into a different world!",
  },
  {
    id: "7",
    title: "GAME DESIGN",
    text: "During my studies i focused on game design and XR. Interactive immersive media often requires our full attention and is therefore a great tool for education and fun! I think that's why i was always drawn to it.",
  },
  {
    id: "8",
    title: "GAME ART",
    text: "Can't get enough of making game art! First released game: Purry furry adventurry!",
  },
  {
    id: "9",
    title: "UNITY",
    text: "When i started making games, i went to Unity classes at my university. Started out with PlayMaker, but soon switched to big-boy C# to make interactive 2D and 3D apps.",
  },
  {
    id: "10",
    title: "BLENDER",
    text: "I use Blender almost every day. Quickly modeling prototype assets for a new 3D application or stylized low poly game assets and animations, Blender is my baby.",
  },
  {
    id: "12",
    title: "Blenderrrrrrrrrrr",
    text: "I use Blender almost every day. Quickly modeling prototype assets for a new 3D application or stylized low poly game assets and animations, Blender is my baby.",
  },
  {
    id: "13",
    title: "3D MODELLING",
    text: "I love stylized low poly art and handpainted textures! I either model all the assets i need myself, or get them online and customize them for quick prototypes.",
  },
  {
    id: "14",
    title: "3D ANIMATION",
    text: "Although i don't do a lot of 3D animation these days i know how to rig, weight paint, animate and how to use the right tools to get fast results.",
  },
  {
    id: "15",
    title: "C#",
    text: "Although i initially hated programming and tried to find a way around it, i loved it at the end of my studies with the help of great mentors and by doing game jams!",
  },
  {
    id: "16",
    title: "AR",
    text: "AR is fascinating to me. You are still grounded in reality, it's widely used already and can be experienced and shared with others very easily.",
  },
  {
    id: "17",
    title: "VR",
    text: "I still want to teleport people! It's so much fun to create truly immersive worlds and see others experience it with awe! So happy i get to build VR apps as a freelancer now.",
  },
  {
    id: "18",
    title: "SOCIAL AR",
    text: "After my studies i started to make AR effects for social media like Instagram and Snapchat! I love how accesible it is for everyone and that people have lot of fun with it!",
  },
  {
    id: "19",
    title: "JAVASCRIPT",
    text: "In 2021 i started to learn a lot about JavaScript, since all the AR software i used for social AR is based on it. And it led me deeper into my programming adventures!",
  },
  {
    id: "20",
    title: "FRONT END",
    text: "Encouraged by my coding progress and curiosity, i started to get more into web & app development and built my first little web tools and websites!",
  },
  {
    id: "20",
    title: "THREE.JS",
    text: "Most interesting for me is Three.js at this point. I love seeing creative use of 3D in web and want to make beautiful interactive websites myself, accessible for all!",
  },
  {
    id: "21",
    title: "HTML/CSS",
    text: "Although i dabbled into HTML and CSS already in the past, i feel like i am now finally using it's full potential.",
  },
  {
    id: "22",
    title: "REACT / REACT NATIVE",
    text: "I'm lucky to have great friends that can teach me about react! It's so convenient and fun to design reusable components and beautiful web apps!",
  },
  {
    id: "23",
    title: "WEB XR",
    text: "My ultimate goal at the moment is to create a WebXR app and make AR & VR apps more accessible for everyone through their browser!",
  },
  {
    id: "24",
    title: "GITHUB",
    text: "Livesafer and a coders best friend! I learned to love GitHub .. the hard way.",
  },
  {
    id: "25",
    title: "FIGMA",
    text: "Part of my Front-End-Journey is to find tools that make my life easier. Figma falls into that category, i love how easy it is to set up a prototype and get an idea across!",
  },
  {
    id: "26",
    title: "PHOTOGRAPHY",
    text: "One of my ",
  },
];

const nodes = [
  {
    id: "1",
    className: "first",
    type: "input",
    data: { label: "start game in 1993", key: "node1" },
    position: { x: mycenter - 20, y: 0 },
  },
  {
    id: "2",
    data: { label: "art class", key: "node2" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 3 },
  },
  {
    id: "3",
    data: { label: "gaming", key: "node3" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 3 },
  },

  {
    id: "4",
    type: "output",
    data: { label: "art & design basics", key: "node4" },
    position: { x: mycenter - myXOffset * 4, y: myYOffset * 5 },
  },
  {
    id: "5",
    data: { label: "drawing", key: "node5" },
    position: { x: mycenter - myXOffset * 2, y: myYOffset * 7 },
  },
  {
    id: "6",
    data: { label: "university", key: "node6" },
    position: { x: mycenter, y: myYOffset * 5 },
  },

  {
    id: "7",
    data: { label: "game design", key: "node7" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 7 },
  },
  {
    id: "8",
    data: { label: "game art", key: "node8" },
    position: { x: mycenter, y: myYOffset * 9 },
  },

  {
    id: "9",
    data: { label: "Unity", key: "node9" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 14 },
  },
  {
    id: "10",
    data: { label: "Blender", key: "node10" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 9 },
  },

  {
    id: "12",
    type: "output",
    data: { label: "3D Modelling", key: "node12" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 12.5 },
  },
  {
    id: "13",
    type: "output",
    data: { label: "3D Animation", key: "node13" },
    position: { x: mycenter + myXOffset * 6, y: myYOffset * 11 },
  },

  {
    id: "14",
    type: "output",
    data: { label: "C#", key: "node14" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 16 },
  },
  {
    id: "15",
    data: { label: "AR", key: "node15" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 17.3 },
  },
  {
    id: "16",
    data: { label: "VR", key: "node16" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 16 },
  },

  {
    id: "17",
    data: { label: "Social AR", key: "node17" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 19.3 },
  },
  {
    id: "18",
    data: { label: "JavaScript", key: "node18" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 20.5 },
  },
  {
    id: "19",
    data: { label: "Front End", key: "node19" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 22.5 },
  },

  {
    id: "20",
    className: "loading",
    type: "output",
    data: { label: "Three.js", key: "node20" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 25 },
  },
  {
    id: "21",
    data: { label: "HTML / CSS", key: "node21" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 27.5 },
  },
  {
    id: "22",
    className: "loading",
    type: "output",
    data: { label: "React (+Native)", key: "node22" },
    position: { x: mycenter + myXOffset * 2, y: myYOffset * 29 },
  },

  {
    id: "23",
    className: "loading",
    data: { label: "WebXR", key: "node23" },
    position: { x: mycenter - myXOffset * 0, y: myYOffset * 19.9 },
  },
  {
    id: "24",
    type: "output",
    data: { label: "GitHub", key: "node24" },
    position: { x: mycenter + myXOffset * 4, y: myYOffset * 26.3 },
  },
  {
    id: "25",
    type: "output",
    data: { label: "Figma", key: "node25" },
    position: { x: mycenter + myXOffset * 5.5, y: myYOffset * 25 },
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

const edges = [
  //ines skilltree
  { source: "1", target: "2", key: "edge1_2" },
  { source: "1", target: "3", key: "edge2_3" },

  //art class
  { source: "2", target: "4", key: "edge2_4" },
  { source: "2", target: "5", key: "edge2_5" },
  { source: "2", target: "6", key: "edge2_6" },

  //gaming
  { source: "3", target: "7", key: "edge3_7" },

  //university
  { source: "6", target: "7", key: "edge6_7" },

  //drawing
  { source: "5", target: "8", key: "edge5_8" },
  { source: "5", target: "26", key: "edge5_26" },

  //photography
  { source: "26", target: "27", key: "edge26_27" },
  { source: "26", target: "28", key: "edge26_28" },
  { source: "28", target: "29", key: "edge28_29" },
  { source: "8", target: "29", key: "edge8_29" },
  { source: "28", target: "30", key: "edge27_30" },

  //video
  { source: "27", target: "30", key: "edge27_30" },
  { source: "27", target: "31", key: "edge27_31" },
  { source: "27", target: "32", key: "edge27_32" },

  //youtube
  { source: "31", target: "33", key: "edge31_33" },
  { source: "31", target: "34", key: "edge31_34" },
  { source: "32", target: "34", key: "edge31_34" },

  //gamedesign
  { source: "7", target: "8", key: "edge7_8" },
  { source: "7", target: "9", key: "edge7_9" },
  { source: "7", target: "10", key: "edge7_10" },
  { source: "7", target: "11", key: "edge7_11" },

  //Blender
  { source: "10", target: "12", key: "edge11_12" },
  { source: "10", target: "13", key: "edge7_11" },

  //Unity
  { source: "9", target: "14", key: "edge9_14" },
  { source: "9", target: "15", key: "edge9_15" },
  { source: "9", target: "16", key: "edge9_16" },

  //AR
  { source: "15", target: "17", key: "edge15_17" },
  { source: "17", target: "18", key: "edge17_18" },
  { source: "18", target: "19", key: "edge18_19" },
  { source: "15", target: "19", key: "edge15_19" },

  ///VR
  // { source: '16', target: '19', key: 'edge16_19'},
  { source: "16", target: "23", key: "edge16_23" },
  { source: "23", target: "20", key: "edge16_23" },

  //Javascript
  { source: "19", target: "20", key: "edge19_20" },

  //FrontEnd
  { source: "19", target: "21", key: "edge19_21" },
  { source: "19", target: "24", key: "edge19_24" },
  { source: "19", target: "25", key: "edge19_25" },
  { source: "21", target: "22", key: "edge21_22" },
];

const MyStyledDiv = styled.div`
  background: linear-gradient(
    45deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Header = styled.div`
  height: 200px;
  padding-top: 50px;
  position: fixed;
`;

const TreeWrapper = styled.div`
  pointer-events: none;
  margin-top: 300px;
  overflow: hidden;
  height: 1800px;
  width: 100%;
`;

const MyH1 = styled.h1`
  text-align: left;
  font-size: 150px;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0px 0px 0px 10px;
`;
const MyH2 = styled.h2`
  text-align: left;
  font-size: 40px;
  font-weight: 200;
  color: white;
  margin: 0;
  margin-top: -30px;
  padding: 0px 0px 0px 15px;
`;

const DescriptionWrapper = styled.div`
  position: fixed;
  top: 400px;
  right: 20px;
  float: right;
  min-width: 200px;
  min-height: 200px;
  inline-size: min-content;
`;

const MyText = styled.p`
  text-align: right;
  font-size: 20px;
  color: white;
`;

function App() {
  const [description, setDescription] = React.useState("");
  const [titlee, setTitle] = React.useState("");
  const [selectedNode, setSelectedNode] = React.useState(0);
  const [nodesCopy, setNodesCopy] = useState(nodes);

  const entered = (event, node) => {
    //console.log({ name: 'onNodeMouseEnter', event, node } )
    //console.log({node}.node.id);
    focusedNode = { node }.node.id;
    console.log(focusedNode);
    if (nodeClicked) return;
    if (descriptions[focusedNode] != null) {
      setDescription(descriptions[focusedNode].text);
      setTitle(descriptions[focusedNode].title);
    } else {
      setDescription({ node }.node.id);
    }
  };

  const exit = (event, node) => {
    if (nodeClicked) return;
    setDescription("");
    setTitle("");
  };

  const selected = (event, node) => {
    if (selectedNode === node.id) {
      setSelectedNode(null);

      // make a copy of nodes and update the selected property of all nodes to false
      let updatedNodes = [...nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = false;
      });
      setNodesCopy(updatedNodes);
    } else {
      setSelectedNode(node.id);

      // make a copy of nodes and update the selected property of the selected node to true, and all others to false
      let updatedNodes = [...nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = n.id === node.id;
      });
      setNodesCopy(updatedNodes);
    }

    if (selectedNode === focusedNode) {
      //setSelectedNode("");
      nodeClicked = false;
      setDescription("");
      setTitle("");
    } else {
      nodeClicked = true;
      //setSelectedNode(focusedNode);

      if (!descriptions[focusedNode]) {
        setDescription("");
        setTitle("");
      } else {
        setDescription(descriptions[focusedNode].text);
        setTitle(descriptions[focusedNode].title);
      }
    }
  };

  return (
    <MyStyledDiv>
      <Header>
        <MyH1>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      <DescriptionWrapper>
        <Description description={description} title={titlee} />
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={nodesCopy}
          edges={edges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          onNodeMouseEnter={entered}
          onNodeMouseLeave={exit}
          onNodeClick={selected}
        />
      </TreeWrapper>
    </MyStyledDiv>
  );
}

export default App;

/**
 * 
 *TODO:
 - can i scale the node when hover over it?
 - event listener resize window -> adjust H1 size und myXOffset?
 - smooth scroll?

*/
