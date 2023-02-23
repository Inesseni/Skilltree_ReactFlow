/**
 * Hey Elliot :)
 * 1. How can i "preload" all thge images ? they load very slow on mobile 
 * 2. On mobile, if i double click a node, the text gets set to " " correctly, but the deselectAll() function doesn'T trigger and the last node
 *    still looks selected (see line 95)
  3.  On desktop, there is a fade in/out animation when you enter or leave a node. but it's buggy and only happens when you move slowly?
      If you move the mouse fast, it jumps opacity to 1 instantly ??
 */




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
} from "./library/MyStyledComponents";
import Description from "./components/Description";
import { isMobile } from "react-device-detect";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var fontSizeH1 = clamp(window.innerWidth / 10, 40, 600);

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
    imageLink: null,
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

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

  // effect whenever you focus a new node
  useEffect(() => {
    if (myState.nodeClicked) return;
    if (myState.focusedNode) {
      updateDescription(myState.focusedNode.id);
      setOpacity(1);
    } else {
      updateDescription();
      setOpacity(0);
    }
  }, [myState.focusedNode]);

  ////// function if the user clicks on a label
  const selected = (event, node) => {
    var newNode = { node }.node.id;

    if (newNode === myState.selectedNode) {
      ////Same node clicked

      deselectAll(); // is an extra function because i want to get the same effect when clicking on the background
    } else {
      ///// New node clicked

      //copy nodes array and set the new selected one to selected
      let updatedNodes = [...myState.nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = n.id === node.id;
      });

      var nodee = myState.nodesCopy[newNode];
      setMyState({
        ...myState,
        description: nodee.text,
        title: nodee.title,
        selectedNode: nodee.id,
        nodesCopy: updatedNodes,
        nodeClicked: true,
        imageLink: nodee.imgLink,
      });
    }
  };

  const deselectAll = () => {
    //copy nodes array and de-select all nodes
    let updatedNodes = [...myState.nodesCopy];
    updatedNodes.forEach((n) => {
      n.selected = false;
    });

    setMyState({
      ...myState,
      selectedNode: null,
      nodesCopy: updatedNodes,
      nodeClicked: false,
      imageLink: null,
      title: "",
      description: "",
      imageLink: null,
    });
  };

  const backgroundClicked = () => {
    if (myState.focusedNode) return;
    if (isMobile) return;
    deselectAll();
  };

  const updateDescription = (nodeId) => {
    if (!nodeId) {
      // clear everything
      setMyState({
        ...myState,
        title: "",
        description: "",
        imageLink: null,
      });
    } else {
      // set new text
      var nodee = myState.nodesCopy[nodeId];
      setMyState({
        ...myState,
        description: nodee.text,
        title: nodee.title,
        imageLink: nodee.imgLink,
      });
    }
  };

  return (
    <MyStyledDiv onClick={backgroundClicked}>
      {isMobile === false && (
        <Image
          style={{
            top: cursorPosition.y - 150,
            left: cursorPosition.x - 320,
          }}
          src={myState.imageLink}
          alt=""
          opacity={opacity}
        />
      )}

      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
        
      </Header>

      <DescriptionWrapper mobile={isMobile}>
        <Description
          description={myState.description}
          title={myState.title}
          image={myState.imageLink}
          opacity={opacity}
        />
        { /*
        {isMobile === false && (
        <img src={myState.imageLink} alt="" opacity={opacity} />
      )}
         <img src={myState.nodesCopy[1].imgLink} alt="" /> */ }
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={myState.nodesCopy}
          edges={MyEdges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          onNodeMouseEnter={(event, node) =>
            setMyState({ ...myState, focusedNode: node })
          }
          onNodeMouseLeave={(event, node) =>
            setMyState({ ...myState, focusedNode: null })
          }
          onNodeClick={selected}
          nodesDraggable={false}
        />
      </TreeWrapper>
    </MyStyledDiv>
  );
}

export default App;

/**
  //console.log({ name: 'onNodeMouseEnter', event, node } )
  //console.log({node}.node.id);
*/
