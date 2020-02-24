import React from "react";
import styled from "styled-components";

interface Props {
  color: string;
  onClick: () => void;
}

export const ColorButton = (props: Props) => {
  const { color, onClick } = props;

  return <Wrapper color={color} onClick={onClick} />;
};

const Wrapper = styled("div")<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 3px;
`;
