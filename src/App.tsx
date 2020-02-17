import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { DisplayBanner } from "./components/DisplayBanner";

const App = () => {
  return (
    <Container>
      <Header />
      <DisplayBanner></DisplayBanner>
    </Container>
  );
};

const Container = styled("div")`
  min-height: 100vh;
  background-color: #000;
`;

export default App;
