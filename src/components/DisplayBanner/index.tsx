import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { WHITE } from '../../utils/color';

interface Props {
  width: number;
  height: number;
  text: string;
  backgroundColor: string;
  textColor: string;
  style?: React.CSSProperties;
}

export const DisplayBanner = (props: Props) => {
  const { width, height, text, backgroundColor, textColor, style } = props;
  const [drawable, setDrawable] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initDraw = useCallback(() => {
    setDrawable(true);
  }, []);

  const finishDraw = useCallback(() => {
    setDrawable(false);
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current!.getContext("2d");

    ctx!.clearRect(0, 0, width, height);

    ctx!.font = "20px SF Pro";
    ctx!.textAlign = "center";
    ctx!.fillStyle = textColor;

    ctx!.fillText(text, width / 2, height / 2);
  }, [width, height, text, textColor]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!drawable) return;

      const ctx = canvasRef.current!.getContext("2d");

      ctx!.clearRect(0, 0, width, height);

      ctx!.font = "20px SF Pro";
      ctx!.textAlign = "center";
      ctx!.fillStyle = textColor;

      const x = e.pageX - canvasRef.current!.offsetLeft;
      const y = e.pageY - canvasRef.current!.offsetTop;

      ctx!.fillText(text, x, y);
    },
    [width, height, text, drawable, textColor]
  );

  return (
    <Container
      ref={canvasRef}
      style={style}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      onMouseDown={initDraw}
      onMouseMove={handleMove}
      onMouseUp={finishDraw}
      onMouseOut={finishDraw}
    />
  );
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
