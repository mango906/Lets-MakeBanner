export const getRandomHexColor = () => `#${`0${(~~(Math.random() * 16777215)).toString(16)}`.slice(-6)}`;
