import React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  onClick: () => void;
  icon?: any;
}

export const ColorButton = (props: Props) => {
  const { color, onClick, icon } = props;

  return (
    <StyledButton color={color} onClick={onClick}>
      {icon && icon}
    </StyledButton>
  );
};

const StyledButton = styled("button")<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 3px;
`;
