import React from "react";
import styled from "styled-components";

const MySlideUp = styled.div`
  width: 100%;
  height: 700px;
  background-color: red;
  position: fixed;
  bottom: 0;
  margin-bottom: -700px;
  z-index: 3;
`;

export default function SlideUp({ children, startAnimation }) {
  const transitionProperties = startAnimation
    ? { marginBottom: "-600px" }
    : { marginBottom: "-700px" };
  return <MySlideUp style={transitionProperties}>{children}</MySlideUp>;
}
