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
  MyTitle,
  MyTextDesktop,
  MyLink,
} from "./library/MyStyledComponents";
import SlideUp from "./components/SlideUp";
import { isMobile } from "react-device-detect";

// clamp function to reuse
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
// adjust the H1 size to window width
var fontSizeH1 = clamp(window.innerWidth / 10, 60, 600);
// set the variable here for easy access - doesn't change
var slideUpMarge = -200;
var slideDownMarge = -740;

// TITLE ANIMATION --------------------------------------------------------------------------
// just for fun :)
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

// MOUSE POSITION ------------------------------------------------------------------------------
// TODO: change to CSS only? this seems quite expensive / re-renders the site every time i move the mouse??
function useMouse() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  });
  return mousePosition;
}

// APP ---------------------------------------------------------------------------------------
function App() {
  const [selected, setSelected] = useState(undefined); // set if we click on a node
  const [hoveredNode, setHoveredNode] = useState(undefined); // set if we hover over a node
  const [slideMargin, setSlideMargin] = useState(slideDownMarge); // how far up the SlideUp Panel will move
  const { x, y } = useMouse(); // cursor position

  // HOVER BEHAVIOUR-------------------------------------------------------------------------
  const entered = (event, node) => {
    // if we are NOT on desktop or already clicked on a node, return.
    // i don't want to change the image or information in this case.
    // If we are on Desktop and don't have a node selected currently, set the hoveredNode and display their image and info of the node.
    if (isMobile || selected !== undefined) return;
    setHoveredNode(node.id);
  };
  const exit = (event, node) => {
    // if we stop hovering over a node, set hoveredNode to undefined
    setHoveredNode(undefined);
  };

  // EFFECTS -----------------------------------------------------------------------------------
  useEffect(() => {
    // if "selected" variable changes, and it didn't change to "undefined",
    // move the slideUp panel up and scroll to the selected node.
    // elde, set the margin to null
    if (selectedOrHoveredNode === undefined) return;
    setSlideMargin(slideUpMarge);
    window.scroll({
      top: isMobile
        ? selectedOrHoveredNode.position.y + 220
        : selectedOrHoveredNode.position.y - 100,
      left: 0,
      behavior: "smooth",
    });
  }, [selected]);

  // set this variable to the node that is either selected of hovered over
  const selectedOrHoveredNode = MyNodes.find(
    (n) => n.id === (selected ?? hoveredNode ?? -1)
  );

  // UI ---------------------------------------------------------------------------------------
  return (
    <MyStyledDiv>
      {/*Header - always shows but font size adjusts to window width*/}
      <Header>
        <MyH1 width={fontSizeH1}>SKILLTREE</MyH1>
        <MyH2>Ines Hilz</MyH2>
      </Header>

      {/*This Section only shows on Desktop*/}
      {isMobile === false && selectedOrHoveredNode !== undefined && (
        <>
          {/* This image follows the cursor position */}
          <Image
            style={{
              top: y - 100,
              left: x - 300,
            }}
            opacity={1}
            src={selectedOrHoveredNode.imgLink}
            alt="Image that correlates to the text written"
          />
          <DescriptionWrapper>
            <MyTitle>{selectedOrHoveredNode.title}</MyTitle>
            <MyTextDesktop>{selectedOrHoveredNode.text}</MyTextDesktop>
            <MyLink target="_blank" href={selectedOrHoveredNode.link}>
              {selectedOrHoveredNode.linktext}
            </MyLink>
          </DescriptionWrapper>
        </>
      )}

      {/*This Section only shows on Mobile, slidePanel shows up from the bottom*/}
      {isMobile === true && selectedOrHoveredNode !== undefined && (
        <SlideUp
          myMargin={slideMargin}
          onclick={() => {
            // click on the header or the "x" closes the panel again
            setSlideMargin(slideDownMarge);
          }}
          onRightClick={() => {
            // click on right arrow selects the next node in manually set order
            const nextIndex = selectedOrHoveredNode.next;
            setSelected(MyNodes[nextIndex].id);
          }}
          onLeftClick={(_, node) => {
            // click on left arrow selects the previous node in manually set order
            const nextIndex = selectedOrHoveredNode.prev;
            setSelected(MyNodes[nextIndex].id);
          }}
          title={selectedOrHoveredNode.title}
          description={selectedOrHoveredNode.text}
          image={selectedOrHoveredNode.imgLink}
          link={selectedOrHoveredNode.link}
          linktext={selectedOrHoveredNode.linktext}
        ></SlideUp>
      )}

      {/*This is the actual node tree ----------------------------------------------------------*/}
      <TreeWrapper>
        <ReactFlow
          nodes={MyNodes.map((n) =>
            n.id === selected ? { ...n, selected: true } : n
          )}
          edges={MyEdges}
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          nodesDraggable={false}
          nodesConnectable={false}
          onNodeMouseEnter={entered}
          onNodeMouseLeave={exit}
          onNodeClick={(_, node) => {
            setSelected(node.id === selected ? undefined : node.id);
          }}
        />
      </TreeWrapper>
    </MyStyledDiv>
  );
}

export default App;
