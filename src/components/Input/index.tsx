import React from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
  style?: React.CSSProperties;
  onChange?: () => void;
  name?: string;
  value?: string;
}

export const Input = (props: Props) => {
  const { style, placeholder, onChange, name, value, ...restProps } = props;

  return (
    <StyledInput onChange={onChange} style={style} placeholder={placeholder} name={name} value={value} {...restProps} />
  );
};

const StyledInput = styled.input`
  font-size: 14px;
  height: 32px;
  padding: 0px 16px;
  border: 1px solid #e9ecef;
  outline: none;
  border-radius: 3px;
`;
