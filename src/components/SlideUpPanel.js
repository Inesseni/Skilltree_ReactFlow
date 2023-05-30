import React from "react";
import styled from "styled-components";

const MyTestdiv = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  position: fixed;
`;

export default function SlideUpPanel({}) {
  return (
    <>
      <MyTestdiv>
        <p>Hallooooooo</p>
      </MyTestdiv>
    </>
  );
}
