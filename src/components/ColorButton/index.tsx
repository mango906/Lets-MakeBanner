import React from 'react';
import styled from 'styled-components';

interface Props {
  color: string;
  onClick: () => void;
  icon?: any;
}

export const ColorButton = (props: Props) => {
  const { color, icon, onClick, ...restProps } = props;

  return (
    <StyledButton color={color} onClick={onClick} {...restProps}>
      {icon && icon}
    </StyledButton>
  );
};

const StyledButton = styled("button")<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-radius: 3px;
`;
