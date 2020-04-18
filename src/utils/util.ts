export const getRandomHexColor = () => `#${`0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6)}`;

export const getContrastYIQ = (hexColor: string) => {
  const splicedColor = hexColor.slice(1, hexColor.length);
  const r = parseInt(splicedColor.substr(0, 2), 16);
  const g = parseInt(splicedColor.substr(2, 2), 16);
  const b = parseInt(splicedColor.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 144) / 1000;
  return yiq >= 131.5 ? "black" : "white";
};
