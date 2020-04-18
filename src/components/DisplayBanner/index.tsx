import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { WHITE } from '../../utils/color';

interface Props {
  width: number;
  height: number;
  text: string;
  backgroundColor: string;
  style?: React.CSSProperties;
}

export const DisplayBanner = (props: Props) => {
  const { width, height, text, backgroundColor, style } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext("2d");

    ctx!.clearRect(0, 0, width, height);

    ctx!.font = "20px SF Pro";
    ctx!.textAlign = "center";
    ctx!.fillStyle = WHITE;

    ctx!.fillText(text, width / 2, height / 2);
  }, [width, height, text]);

  return <Container ref={canvasRef} style={style} width={width} height={height} backgroundColor={backgroundColor} />;
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
  backgroundColor: WHITE
};
