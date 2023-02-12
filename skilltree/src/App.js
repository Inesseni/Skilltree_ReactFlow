import ReactFlow from "reactflow";
import React, { useState } from "react";

import "reactflow/dist/style.css";
import "./App.css";

import MyNodes from './library/MyNodes';
import MyEdges from './library/MyEdges';
import {MyStyledDiv, Header, TreeWrapper, MyH1, MyH2, DescriptionWrapper} from './library/MyStyledComponents';
import Description from "./components/Description";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

var fontSizeH1 = clamp((window.innerWidth / 10), 80, 600);
var focusedNode = 0;
var nodeClicked = false;


function App() {
  const [description, setDescription] = React.useState("");
  const [titlee, setTitle] = React.useState("");
  const [selectedNode, setSelectedNode] = React.useState(null);
  const [nodesCopy, setNodesCopy] = useState(MyNodes);


  const entered = (event, node) => {
    focusedNode = { node }.node.id;
    console.log(focusedNode);
    if (nodeClicked) return;

    setDescription(MyNodes[focusedNode -1].text);
    setTitle(MyNodes[focusedNode-1].title);
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
      nodeClicked = false;
      setDescription("");
      setTitle("");
    } else {
      nodeClicked = true;
      setDescription(MyNodes[focusedNode-1].text);
      setTitle(MyNodes[focusedNode-1].title);
    }
  };

  return (
    <MyStyledDiv>
      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      <DescriptionWrapper>
        <Description description={description} title={titlee} />
      </DescriptionWrapper>

      <TreeWrapper>
        <ReactFlow
          nodes={nodesCopy}
          edges={MyEdges}
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
 - smooth scroll?



 ----

  //console.log({ name: 'onNodeMouseEnter', event, node } )
  //console.log({node}.node.id);
*/
