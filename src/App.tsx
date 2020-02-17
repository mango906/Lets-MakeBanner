import React from "react";
import styled from "styled-components";

import { Input } from "./components/Input";
import { Header } from "./components/Header";
import { DisplayBanner } from "./components/DisplayBanner";

const App = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Input placeholder={"width(px)"} />
        <Input placeholder={"height(px)"} />
        <DisplayBanner style={{ marginTop: 24 }} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #000;
`;

const Content = styled.div``;

export default App;
