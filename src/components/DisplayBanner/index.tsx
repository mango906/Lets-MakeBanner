import React, { useEffect } from "react";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  backgroundColor: string;
}

export const DisplayBanner = (props: Props) => {
  const { width, height, backgroundColor } = props;
  return <Container width={width} height={height} backgroundColor={backgroundColor}></Container>;
};

const Container = styled("div")<{
  width: number;
  height: number;
  backgroundColor: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.backgroundColor};
`;

DisplayBanner.defaultProps = {
  width: 700,
  height: 350,
  backgroundColor: "#fff"
};
