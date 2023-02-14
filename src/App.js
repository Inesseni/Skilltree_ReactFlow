import ReactFlow from "reactflow";
import React, { useState, useEffect } from "react";

import "reactflow/dist/style.css";
import "./App.css";

import MyNodes from "./library/MyNodes";
import MyEdges from "./library/MyEdges";
import {
  MyStyledDiv,
  Header,
  TreeWrapper,
  MyH1,
  MyH2,
  DescriptionWrapper,
  Image,
  ImageMobile,
} from "./library/MyStyledComponents";
import Description from "./components/Description";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var fontSizeH1 = clamp(window.innerWidth / 10, 80, 600);

function recursiveAnimateTitle(string) {
  let firstLetter = string[0];
  let title = document.querySelector("title");
  title.innerHTML += firstLetter;
  if (string.length > 1) {
    setTimeout(function () {
      recursiveAnimateTitle(string.substring(1));
    }, 100);
  }
}

function animateTitle(string) {
  document.querySelector("title").innerHTML = "";
  recursiveAnimateTitle(string);
}

animateTitle("SKILLTREE");

function App() {
  const [myState, setMyState] = useState({
    selectedNode: 0,
    description: "",
    title: "",
    nodesCopy: MyNodes,
    focusedNode: null,
    nodeClicked: false,
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [image, setImage] = useState(myState.nodesCopy[1].imgLink);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  ////// function if the cursor enters a label
  const entered = (event, node) => {
    var newNode = { node }.node.id;
    setMyState({ ...myState, focusedNode: newNode });

    if (myState.nodeClicked) return;
    var newImg = myState.nodesCopy[newNode - 1].imgLink;
    setImage(newImg);
    if (image != null) {
      setOpacity(1);
    }
    updateDescription(newNode);
  };

  ////// function if the cursor exits a label
  const exit = (event, node) => {
    if (myState.nodeClicked) return;
    setMyState({ ...myState, title: "", description: "" });

    setOpacity(0);
  };

  ////// function if the user clicks on a label
  const selected = (event, node) => {
    var newNode = { node }.node.id;

    if (newNode === myState.selectedNode) {
      ////Same node clicked

      //copy nodes array and de-select all nodes
      let updatedNodes = [...myState.nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = false;
      });

      //update the selected node, if a node is clicked and the new (unselected) node Array
      setMyState({
        ...myState,
        selectedNode: null,
        nodesCopy: updatedNodes,
        nodeClicked: false,
      });
    } else {
      ///// New node clicked
      let updatedNodes = [...myState.nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = n.id === node.id;

        var newImg = myState.nodesCopy[newNode - 1].imgLink;
        setImage(newImg);
      });

      var nodee = myState.nodesCopy[newNode - 1];
      setMyState({
        ...myState,
        description: nodee.text,
        title: nodee.title,
        selectedNode: nodee.id,
        nodesCopy: updatedNodes,
        nodeClicked: true,
      });
    }
  };

  const updateDescription = (nodeId) => {
    var node = myState.nodesCopy[nodeId - 1];
    setMyState({ ...myState, description: node.text, title: node.title });
  };

  return (
    <MyStyledDiv>
      <Image
        style={{
          top: cursorPosition.y - 250,
          left: cursorPosition.x - 500,
        }}
        src={image}
        alt=""
        opacity={opacity}
      />

      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      <DescriptionWrapper>
        <Description
          description={myState.description}
          title={myState.title}
          image={image}
          opacity={opacity}
        />
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={myState.nodesCopy}
          edges={MyEdges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          onNodeMouseEnter={entered}
          onNodeMouseLeave={exit}
          onNodeClick={selected}
          nodesDraggable={false}
        />
      </TreeWrapper>
    </MyStyledDiv>
  );
}

export default App;

/**
 * 
 *TODO:
 - show images static on mobile
 - can i scale the node when hover over it?
 - smooth scroll?
 ----
  //console.log({ name: 'onNodeMouseEnter', event, node } )
  //console.log({node}.node.id);
*/
