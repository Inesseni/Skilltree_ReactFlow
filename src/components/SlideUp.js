import React from "react";
import styled from "styled-components";

const MySlideUp = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;
  position: fixed;
  bottom: 0;
  margin-bottom: -700px;
  border-radius: 20px;
  z-index: 3;
  transition-propertiy: margin-bottom;
  transition-duration: 0.5s;
`;

const MyTitle = styled.p`
  flex: 9;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin: 0;
  padding: 15px 20px;
`;

const MyText = styled.p`
  flex: 1;
  text-align: left;
  font-size: 15px;
  color: black;
  padding: 0px 20px;
  text-align: center;
`;

const MyLink = styled.a`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  background-color: rgb(85, 85, 85);
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
  color: white;
  text-decoration: none;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const MyImgContainer = styled.div`
  margin: auto;
  width: 100%;
  height: auto;
`;

const IterateButton = styled.div`
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin: 0;
  padding: 15px 20px;
`;

export default function SlideUp({
  myMargin,
  onclick,
  title,
  description,
  link,
  linktext,
  image,
  onRightClick,
  onLeftClick,
}) {
  return (
    <MySlideUp style={{ marginBottom: myMargin }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IterateButton onClick={onLeftClick}>{"<"}</IterateButton>
        <MyTitle onClick={onclick}>{title}</MyTitle>
        <IterateButton onClick={onRightClick}>{">"}</IterateButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div>
          <MyText>{description}</MyText>
          {link !== undefined ? (
            <MyLink target="_blank" href={link}>
              {linktext}
            </MyLink>
          ) : null}
        </div>
      </div>
      <MyImgContainer>
        <img style={{ width: "100%" }} src={image} alt="" />
      </MyImgContainer>
    </MySlideUp>
  );
}
