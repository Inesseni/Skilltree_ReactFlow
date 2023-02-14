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
  height: 200px;
  padding-top: 50px;
  position: fixed;
`;

export const TreeWrapper = styled.div`
  pointer-events: none;
  margin-top: 300px;
  overflow: hidden;
  height: 2400px;
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

export const DescriptionWrapper = styled.div`
  position: fixed;
  top: 400px;
  right: 20px;
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
  max-height: 300px;
  top: 0;
  left: 0;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const ImageMobile = styled.img`
  max-height: 300px;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.2s;
  box-shadow: 8px 5px 2px 1px rgba(0, 0, 255, 0.2);
`;
