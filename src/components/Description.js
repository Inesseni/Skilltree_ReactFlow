import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const MyTitle = styled.p`
  flex: 1;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0px 20px;
`;

const MyText = styled.p`
  flex: 1;
  text-align: right;
  font-size: 15px;
  color: white;
  padding: 0px 20px;
`;

const MyLink = styled.a`
  text-align: right;
  font-size: 15px;
  color: white;
  cursor: pointer;
  padding: 0px 20px;
`;

/*
export const ImageMobile = styled.img`
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
  width: 100%;
  margin: 0px 20px;
`;
*/

export default function ID2_artClass({ title, description, link, linktext }) {
  return (
    <>
      {isMobile === false && (
        <>
          <MyTitle>{title}</MyTitle>
          <MyText>{description}</MyText>
          <MyLink target="_blank" href={link}>
            {linktext}
          </MyLink>
        </>
      )}
    </>
  );
}
