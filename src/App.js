import ReactFlow from "reactflow";
import React, { useState, useEffect } from "react";

import "reactflow/dist/style.css";
import "./App.css";

import MyNodes from './library/MyNodes';
import MyEdges from './library/MyEdges';
import { MyStyledDiv, Header, TreeWrapper, MyH1, MyH2, DescriptionWrapper, Image, ImageWrapper } from './library/MyStyledComponents';
import Description from "./components/Description";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var fontSizeH1 = clamp((window.innerWidth / 10), 80, 600);

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
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
      <Image style={{
        top: cursorPosition.y - 250,
        left: cursorPosition.x - 500,
      }}
        src={selectedOrHoveredNode !== undefined
          ? selectedOrHoveredNode.imgLink
          : undefined}
        alt=""
        opacity={selectedOrHoveredNode !== undefined ? 1 : 0} />
      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      <DescriptionWrapper>
        {selectedOrHoveredNode !== undefined
          ? <Description description={selectedOrHoveredNode.text} title={selectedOrHoveredNode.title} />
          : null
        }
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={MyNodes.map((n) => n.id === selected ? { ...n, selected: true } : n)}
          edges={MyEdges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
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
 * 
 *TODO:
 - can i scale the node when hover over it?
 - smooth scroll?

 ----
  //console.log({ name: 'onNodeMouseEnter', event, node } )
  //console.log({node}.node.id);
*/
