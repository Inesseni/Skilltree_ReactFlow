import ReactFlow from 'reactflow';
import styled from 'styled-components';
import React,{MouseEvent} from 'react';

import 'reactflow/dist/style.css';
import './App.css';

const myWidth = window.innerWidth;
const mycenter = myWidth/2 -50;
const myXOffset = 30;
const myYOffset = 50;



const nodes = [
  { id: '1', type: 'input', data: { label: 'Ines Skilltree', key: 'node1' }, position: { x: mycenter, y: myYOffset*1 } },
  { id: '2', data: { label: 'art class', key: 'node2' }, position: { x: mycenter - myXOffset*2, y: myYOffset*3 } },
  { id: '3', data: { label: 'gaming', key: 'node3' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*3 }},

  { id: '4',type: 'output', data: { label: 'art & design principles', key: 'node4' }, position: {  x: mycenter - myXOffset*4, y: myYOffset*5 }},
  { id: '5', data: { label: 'drawing', key: 'node5' }, position: {  x: mycenter - myXOffset*2, y: myYOffset*7 }},
  { id: '6', data: { label: 'university', key: 'node6' }, position: {  x: mycenter, y: myYOffset*5 }},

  { id: '7', data: { label: 'game design', key: 'node7' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*7 }},
  { id: '8', data: { label: 'game art', key: 'node8' }, position: {  x: mycenter, y: myYOffset*9 }},

  { id: '9', data: { label: 'Unity', key: 'node9' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*14 }},
  { id: '10', data: { label: 'Blender', key: 'node10' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*9 }},

  { id: '12', type: 'output', data: { label: '3D Modelling', key: 'node12' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*12.5 }},
  { id: '13', type: 'output', data: { label: '3D Animation', key: 'node13' }, position: {  x: mycenter + myXOffset*6, y: myYOffset*11 }},

  { id: '14', type: 'output', data: { label: 'C#', key: 'node14' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*16  }},
  { id: '15', data: { label: 'AR', key: 'node15' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*17.3  }},
  { id: '16', data: { label: 'VR', key: 'node16' }, position: {  x: mycenter - myXOffset*0, y: myYOffset*16  }},

  { id: '17', data: { label: 'Social AR', key: 'node17' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*19.3  }},
  { id: '18', data: { label: 'JavaScript', key: 'node18' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*20.5  }},
  { id: '19', data: { label: 'Front End', key: 'node19' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*22.5  }},

  { id: '20',className: "loading", type: 'output', data: { label: 'Three.js', key: 'node20' }, position: {  x: mycenter - myXOffset*0, y: myYOffset*25  }},
  { id: '21', data: { label: 'HTML / CSS', key: 'node21' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*27.5  }},
  { id: '22',className: "loading", type: 'output', data: { label: 'React (+Native)', key: 'node22' }, position: {  x: mycenter + myXOffset*2, y: myYOffset*29  }},

  { id: '23',className: "loading", data: { label: 'WebXR', key: 'node23' }, position: {  x: mycenter - myXOffset*0, y: myYOffset*19.9 }},
  { id: '24', type: 'output', data: { label: 'GitHub', key: 'node24' }, position: {  x: mycenter + myXOffset*4, y: myYOffset*26.3  }},
  { id: '25', type: 'output', data: { label: 'Figma', key: 'node25' }, position: {  x: mycenter + myXOffset*5.5, y: myYOffset*25  }},

  //left path
  { id: '26', data: { label: 'photography', key: 'node26' }, position: { x: mycenter - myXOffset * 4.5, y: myYOffset*9 }},
  { id: '27', data: { label: 'video', key: 'node27' }, position: { x: mycenter - myXOffset * 4.5, y: myYOffset*12 }},
  { id: '28', data: { label: 'Photoshop', key: 'node28' }, position: { x: mycenter - myXOffset * 2, y: myYOffset*10.7 }},
  { id: '29', data: { label: 'Texturing', key: 'node29' }, position: { x: mycenter , y: myYOffset*12.7 }},
  { id: '30',type: 'output', data: { label: '2D Animation', key: 'node30' }, position: { x: mycenter - myXOffset*2, y: myYOffset*14 }},
  { id: '31', data: { label: 'Youtube', key: 'node31' }, position: { x: mycenter - myXOffset*4.5, y: myYOffset*15.5 }},
  { id: '32', data: { label: 'Premiere / After effects', key: 'node32' }, position: { x: mycenter - myXOffset*7, y: myYOffset*14}},

  { id: '33',className: "loading", type: 'output', data: { label: 'teaching', key: 'node33' }, position: { x: mycenter - myXOffset*4.5, y: myYOffset*19}},
  { id: '34',className: "loading", type: 'output', data: { label: 'video editing', key: 'node34' }, position: { x: mycenter - myXOffset*7, y: myYOffset*17.5}},

];

const edges = [
  //ines skilltree
  { source: '1', target: '2', key: 'edge1_2' },
  { source: '1', target: '3', key: 'edge2_3' },

  //art class
  { source: '2', target: '4', key: 'edge2_4' },
  { source: '2', target: '5', key: 'edge2_5' },
  { source: '2', target: '6', key: 'edge2_6' },

  //gaming
  { source: '3', target: '7', key: 'edge3_7' },

  //university
  { source: '6', target: '7', key: 'edge6_7' },

  //drawing
  { source: '5', target: '8', key: 'edge5_8' },
  { source: '5', target: '26', key: 'edge5_26' },

  //photography
  { source: '26', target: '27', key: 'edge26_27' },
  { source: '26', target: '28', key: 'edge26_28' },
  { source: '28', target: '29', key: 'edge28_29' },
  { source: '8', target: '29', key: 'edge8_29' },
  { source: '28', target: '30', key: 'edge27_30' },

  //video
  { source: '27', target: '30', key: 'edge27_30' },
  { source: '27', target: '31', key: 'edge27_31' },
  { source: '27', target: '32', key: 'edge27_32' },

  //youtube
  { source: '31', target: '33', key: 'edge31_33' },
  { source: '31', target: '34', key: 'edge31_34' },
  { source: '32', target: '34', key: 'edge31_34' },


  //gamedesign
  { source: '7', target: '8', key: 'edge7_8' },
  { source: '7', target: '9', key: 'edge7_9' },
  { source: '7', target: '10', key: 'edge7_10'},
  { source: '7', target: '11', key: 'edge7_11'},

  //Blender
  { source: '10', target: '12', key: 'edge11_12'},
  { source: '10', target: '13', key: 'edge7_11'},

  //Unity
  { source: '9', target: '14', key: 'edge9_14'},
  { source: '9', target: '15', key: 'edge9_15'},
  { source: '9', target: '16', key: 'edge9_16'},

  //AR
  { source: '15', target: '17', key: 'edge15_17'},
  { source: '17', target: '18', key: 'edge17_18'},
  { source: '18', target: '19', key: 'edge18_19'},
  { source: '15', target: '19', key: 'edge15_19'},

  ///VR
 // { source: '16', target: '19', key: 'edge16_19'},
  { source: '16', target: '23', key: 'edge16_23'},
  { source: '23', target: '20', key: 'edge16_23'},

  //Javascript
  { source: '19', target: '20', key: 'edge19_20'},

  //FrontEnd
  { source: '19', target: '21', key: 'edge19_21'},
  { source: '19', target: '24', key: 'edge19_24'},
  { source: '19', target: '25', key: 'edge19_25'},
  { source: '21', target: '22', key: 'edge21_22'},


];




const MyStyledDiv = styled.div`
  background-color: blue;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const TreeWrapper = styled.div`
  background-color: white;
  display: flex;
  flex: 1;

  //max-width: 400px;
  height: 100vh;
`;



const entered = (event) => {
  console.log(event.getNode);
};


function App() {

  return (
    <MyStyledDiv>
      <TreeWrapper>
        <ReactFlow nodes={nodes} edges={edges} panOnDrag={false} panOnScroll={false} preventScrolling={false} onNodeMouseEnter={entered}/>
      </TreeWrapper>
    </MyStyledDiv>
  );
}

export default App;


/**
 * 
 *TODO:
 - can i scale the node when hover over it?
 - maybe also show a pop up when hovering?
 - box shadow?
 - hintergrund bild
 */