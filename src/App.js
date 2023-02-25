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
  const [selected, setSelected] = useState(undefined)
  const [hoveredNode, setHoveredNode] = useState(undefined)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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

  const entered = (event, node) => {
    if (selected !== undefined) return;
    setHoveredNode(node.id)
  };


  const exit = (event, node) => {
    setHoveredNode(undefined)
  };

  const selectedOrHoveredNode = MyNodes.find((n) => n.id === (selected ?? hoveredNode ?? -1))
  return (
    <MyStyledDiv>
      {isMobile === false && (
        <Image style={{
          top: cursorPosition.y - 250,
          left: cursorPosition.x - 500,
        }}
          src={selectedOrHoveredNode !== undefined
            ? selectedOrHoveredNode.imgLink
            : undefined}
          alt=""
          opacity={selectedOrHoveredNode !== undefined ? 1 : 0} />
      )}
      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>

      </Header>

      <DescriptionWrapper mobile={isMobile}>
        {selectedOrHoveredNode !== undefined
          ? <Description description={selectedOrHoveredNode.text} title={selectedOrHoveredNode.title} />
          : null
        }
        { /*
        {isMobile === false && (
        <img src={myState.imageLink} alt="" opacity={opacity} />
      )}
         <img src={myState.nodesCopy[1].imgLink} alt="" /> */ }
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={MyNodes.map((n) => n.id === selected ? { ...n, selected: true } : n)}
          edges={MyEdges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          nodesDraggable={false}
          onNodeMouseEnter={entered}
          onNodeMouseLeave={exit}
          onNodeClick={(_, node) => setSelected(node.id === selected ? undefined : node.id)}
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
