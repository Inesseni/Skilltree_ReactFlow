import React from "react";
import {
  MySlideUp,
  MySlideUpTitle,
  MySlideUpText,
  MySlideUpLink,
  MySlideUpImgContainer,
  MySlideUpIterateButton,
  SlideClose,
  SlideUpHeader,
} from "../library/MyStyledComponents";

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
      {/* HEADER---------------------------------------------- */}
      <SlideClose onClick={onclick}>x</SlideClose>
      <SlideUpHeader>
        <MySlideUpIterateButton onClick={onLeftClick}>
          {"<"}
        </MySlideUpIterateButton>
        <MySlideUpTitle onClick={onclick}>{title}</MySlideUpTitle>
        <MySlideUpIterateButton onClick={onRightClick}>
          {">"}
        </MySlideUpIterateButton>
      </SlideUpHeader>
      {/* CONTENT ---------------------------------------------- */}
      <MySlideUpText>{description}</MySlideUpText>
      {link !== undefined ? (
        <MySlideUpLink target="_blank" href={link}>
          {linktext}
        </MySlideUpLink>
      ) : null}
      {/* IMAGE---------------------------------------------- */}
      <MySlideUpImgContainer>
        <img style={{ width: "100%" }} src={image} alt="" />
      </MySlideUpImgContainer>
    </MySlideUp>
  );
}
