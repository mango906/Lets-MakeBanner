import React from "react";
import styled from "styled-components";

interface Props {
  placeholder?: string;
  style?: React.CSSProperties;
}

export const Input = (props: Props) => {
  const { style, placeholder } = props;

  return <Wrapper style={style} placeholder={placeholder} />;
};

const Wrapper = styled.input`
  font-size: 14px;
  height: 42px;
  padding: 0px 16px;
  border: 1px solid #e9ecef;
  outline: none;
  border-radius: 3px;
`;
