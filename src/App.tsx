import React from "react";
import styled from "styled-components";

import { Header } from "./components/Header";
import { DisplayBanner } from "./components/DisplayBanner";
import { Input } from "./components/Input";

import useInput from "./hooks/useInput";

const App = () => {
  const [state, onChange] = useInput({
    width: "700",
    height: "350"
  });

  const { width, height } = state;

  return (
    <Container>
      <Header />
      <Content>
        <BannerForm>
          <Input name="width" placeholder={"width(px)"} onChange={onChange} value={width} />
          <Input
            style={{ marginLeft: 5 }}
            name="height"
            placeholder={"height(px)"}
            onChange={onChange}
            value={height}
          />
        </BannerForm>
        <DisplayBanner width={width} height={height} style={{ marginTop: 24 }} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;

const BannerForm = styled.div``;

export default App;
