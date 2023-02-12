import ReactFlow from "reactflow";
import React, {useState } from "react";

import "reactflow/dist/style.css";
import "./App.css";

import MyNodes from './library/MyNodes';
import MyEdges from './library/MyEdges';
import {MyStyledDiv, Header, TreeWrapper, MyH1, MyH2, DescriptionWrapper} from './library/MyStyledComponents';
import Description from "./components/Description";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var fontSizeH1 = clamp((window.innerWidth / 10), 80, 600);

function App() {

  const [myState, setMyState] = useState({
    selectedNode: 0,
    description: '',
    title: '',
    nodesCopy: MyNodes,
    focusedNode: null,
    nodeClicked: false,
  });


  const entered = (event, node) => {
    var newNode = {node}.node.id;
    setMyState({ ...myState, focusedNode : newNode})

    console.log(myState.nodeClicked)

    if(myState.nodeClicked) return;
    updateDescription(newNode);
  };


  const exit = (event, node) => {
    if(myState.nodeClicked) return;
    setMyState({ ...myState, title : "", description : ""})
  };

  
  const selected = (event, node) => {
    var newNode = {node}.node.id;

    ////Same node clicked
    if(newNode === myState.selectedNode){

      //copy nodes array and de-select all nodes
      let updatedNodes = [...myState.nodesCopy];
      updatedNodes.forEach((n) => {
        n.selected = false;
      });

      //update the selected node, if a node is clicked and the new (unselected) node Array
      setMyState({ ...myState, selectedNode : null, nodesCopy : updatedNodes, nodeClicked : false})

    ///// New node clicked
    }else{
      console.log("new node");

      let updatedNodes = [...myState.nodesCopy];
      updatedNodes.forEach((n) => {
      n.selected = n.id === node.id;
    });
    
      var nodee = myState.nodesCopy[newNode - 1];
      setMyState({ ...myState, description: nodee.text, title : nodee.title, selectedNode : nodee.id, nodesCopy : updatedNodes, nodeClicked : true})
    }
  };


  const updateDescription = (nodeId) => {
    var node = myState.nodesCopy[nodeId -1];
    setMyState({ ...myState, description: node.text, title: node.title});
  };

  return (
    <MyStyledDiv>
      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      <DescriptionWrapper>
        <Description description={myState.description} title={myState.title} />
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
