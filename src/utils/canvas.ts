type CanvasFontType = {
  textColor: string;
  fontSize: string;
  // fontFamily: string;
};

export const setTextOptions = (canvas: HTMLCanvasElement, text: string, params: CanvasFontType) => {
  const ctx = canvas.getContext("2d")!;
  const { textColor, fontSize } = params;
  ctx.font = `${fontSize}px`;
  ctx.fillStyle = textColor;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
};
