import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

interface Props {
  type: string;
}

export const Icons = (props: Props) => {
  const { type } = props;

  return <Wrapper type={type} />;
};

const Wrapper = styled(Icon)`
  font-size: 30px;
  color: #eee;
`;
