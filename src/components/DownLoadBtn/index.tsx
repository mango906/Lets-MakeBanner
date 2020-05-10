import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { Icons } from '../Icons';

type Props = {
  onClick?: () => void;
};

export const DownLoadBtn: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <Button onClick={onClick}>
      <Icons size="24" color="#fff" type="download" />
    </Button>
  );
};

const Button = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  background-color: #000;
  margin-top: 12px;
`;
