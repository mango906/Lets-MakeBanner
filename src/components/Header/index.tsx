import React from "react";
import styled from "styled-components";
import { Icons } from "../Icons";

export const Header = () => {
  return (
    <Container>
      <Icons type="github" />
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 50px;
`;
