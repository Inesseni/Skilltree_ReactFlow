import React from "react";
import styled from "styled-components";

const MyTitle = styled.p`
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0px 0px 0px 10px;
`;

const MyText = styled.p`
  text-align: right;
  font-size: 15px;
  color: white;
  width: 300px;
`;

const MyLink = styled.a`
  text-align: right;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;

export default function ID2_artClass({ title, description, link, linktext }) {
  return (
    <>
      <MyTitle>{title}</MyTitle>
      <MyText>{description}</MyText>
      <MyLink href={link}>{linktext}</MyLink>
    </>
  );
}
