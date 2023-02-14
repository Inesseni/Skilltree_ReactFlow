import React from "react";
import styled from "styled-components";

const MyTitle = styled.p`
  flex: 1;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0px 0px 0px 10px;
`;

const MyText = styled.p`
  flex: 1;
  text-align: right;
  font-size: 15px;
  color: white;
  margin: 0;
  padding: 20px 0px 20px 10px;
`;

const MyLink = styled.a`
  text-align: right;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;

export const ImageMobile = styled.img`
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
`;

export default function ID2_artClass({
  title,
  description,
  link,
  linktext,
  image,
  opacity,
}) {
  return (
    <>
      <MyTitle>{title}</MyTitle>
      <MyText>{description}</MyText>
      <MyLink href={link}>{linktext}</MyLink>
      <ImageMobile src={image} alt="" opacity={opacity}></ImageMobile>
    </>
  );
}
