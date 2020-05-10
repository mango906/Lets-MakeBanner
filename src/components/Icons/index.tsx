import React from 'react';

import * as icons from './interface';

type IconType = keyof typeof icons;

interface Props {
  type: IconType;
  color: string;
  size?: string | number;
}

export const Icons = (props: Props) => {
  const { type, color, size } = props;

  const SVGIcon = icons[type];

  return <SVGIcon size={size} color={color} style={{ fontSize: 30 }} />;
};

Icons.defaultProps = {
  color: "#eee"
};
