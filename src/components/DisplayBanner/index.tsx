import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { setTextOptions } from '../../utils/canvas';
import { WHITE } from '../../utils/color';

interface Props {
  width: number;
  height: number;
  text: string;
  backgroundColor: string;
  textColor: string;
  fontSize: string;
  style?: React.CSSProperties;
}

type PositionType = {
  x: number;
  y: number;
};

export const DisplayBanner = (props: Props) => {
  const { width, height, text, backgroundColor, textColor, fontSize, style } = props;
  const [drawable, setDrawable] = useState(false);
  const [position, setPosition] = useState<PositionType>({
    x: width / 2,
    y: height / 2
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initDraw = useCallback(() => {
    setDrawable(true);
  }, []);

  const finishDraw = useCallback(() => {
    setDrawable(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const params = {
      textColor,
      fontSize,
      fontFamily: "SF Pro",
      position,
      canvasSize: {
        width,
        height
      }
    };

    setTextOptions(canvas, text, params);
  }, [textColor, text, position, width, height, fontSize]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (!drawable) return;

      const x = e.pageX - canvasRef.current!.offsetLeft;
      const y = e.pageY - canvasRef.current!.offsetTop;

      setPosition({ x, y });
    },
    [drawable]
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
