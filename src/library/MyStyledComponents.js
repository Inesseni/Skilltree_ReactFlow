import styled from "styled-components";

export const MyStyledDiv = styled.div`
  background: linear-gradient(
    45deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Header = styled.div`
  height: 250px;
  padding-top: 50px;
  position: fixed;
`;

export const TreeWrapper = styled.div`
  pointer-events: none;
  margin-top: 300px;
  overflow: hidden;
  height: 2500px;
  width: 100%;
`;

export const MyH1 = styled.h1`
  text-align: left;
  font-size: ${(props) => props.width}px;
  font-weight: 600;
  color: white;
  margin: 0;
  margin-top: -20px;
  padding: 0px 0px 0px 10px;
`;
export const MyH2 = styled.h2`
  text-align: left;
  font-size: 40px;
  font-weight: 200;
  color: white;
  margin: 0;
  margin-top: 0px;
  padding: 0px 0px 0px 15px;
`;

export const MyTitle = styled.p`
  flex: 1;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0px 20px;
`;

export const MyTextDesktop = styled.p`
  flex: 1;
  text-align: right;
  font-size: 15px;
  color: white;
  padding: 0px 20px;
`;

export const MyLink = styled.a`
  text-align: right;
  font-size: 15px;
  color: white;
  cursor: pointer;
  padding: 0px 20px;
`;

export const DescriptionWrapper = styled.div`
  position: fixed;
  top: 400px;
  right: 0;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

export const MyText = styled.p`
  float: right;
  text-align: right;
  font-size: 20px;
  color: white;
`;

export const Image = styled.img`
  position: fixed;
  max-width: 700px;
  max-height: 600px;
  top: 0;
  left: 0;
  opacity: ${(props) => props.opacity};
  transition: opacity 1s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const ImageMobile = styled.img`
  max-height: 300px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const MySlideUp = styled.div`
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

export const MySlideUpTitle = styled.p`
  flex: 9;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin: 0;
  padding: 15px 20px;
`;

export const MySlideUpText = styled.p`
  flex: 1;
  text-align: left;
  font-size: 15px;
  color: black;
  padding: 0px 20px;
  text-align: center;
`;

export const MySlideUpLink = styled.a`
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

export const MySlideUpImgContainer = styled.div`
  margin: auto;
  width: 100%;
  height: auto;
`;

export const MySlideUpIterateButton = styled.div`
  flex: 1;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  color: black;
  margin: 0;
  padding: 15px 20px;
`;

export const SlideClose = styled.div`
  position: absolute;
  background-color: white;
  right: 0px;
  top: -40px;
  text-align: right;
  margin-right: 14px;
  padding: 5px 15px 8px 15px;
  border-radius: 20px;
`;

export const SlideUpHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
