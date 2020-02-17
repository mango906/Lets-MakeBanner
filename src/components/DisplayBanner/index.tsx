import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  backgroundColor: string;
  style?: React.CSSProperties;
}

export const DisplayBanner = (props: Props) => {
  const { width, height, backgroundColor, style } = props;
  return <Container style={style} width={width} height={height} backgroundColor={backgroundColor} />;
};

const Container = styled.canvas<{
  width: number;
  height: number;
  backgroundColor: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.backgroundColor};
  margin: 0 auto;
`;

DisplayBanner.defaultProps = {
  backgroundColor: "#fff"
};
