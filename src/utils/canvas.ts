type PositionType = {
  x: number;
  y: number;
};

type CanvasSizeType = {
  width: number;
  height: number;
};

type CanvasFontType = {
  textColor: string;
  fontSize: string;
  position: PositionType;
  canvasSize: CanvasSizeType;
  fontFamily: string;
};

export const setTextOptions = (canvas: HTMLCanvasElement, text: string, params: CanvasFontType) => {
  const ctx = canvas.getContext("2d")!;
  const { textColor, fontSize, fontFamily, position, canvasSize } = params;

  ctx!.clearRect(0, 0, canvasSize.width, canvasSize.height);

  ctx!.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = textColor;
  ctx.textAlign = "center";
  ctx.fillText(text, position.x, position.y);
};
