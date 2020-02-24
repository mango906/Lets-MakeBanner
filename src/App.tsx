import React, { useState, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";

import { Header } from "./components/Header";
import { DisplayBanner } from "./components/DisplayBanner";
import { Input } from "./components/Input";

import useInput from "./hooks/useInput";
import { ColorButton } from "./components/ColorButton";

const App = () => {
  const [state, onChange] = useInput({
    width: "700",
    height: "350"
  });

  const [colorPickerShow, setColorPickerShow] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("");

  const { width, height } = state;

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setBackground(`#${randomColor}`);
  }, []);

  const handleColorPicker = useCallback(() => {
    setColorPickerShow(!colorPickerShow);
  }, [colorPickerShow]);

  const closeColorPicker = useCallback(() => {
    setColorPickerShow(false);
  }, []);

  const handleBackgroundChange = useCallback((color) => {
    setBackground(color.hex);
  }, []);

  const sketchPicker = useMemo(() => {
    return (
      colorPickerShow && (
        <ChromePicker color={background} onChange={handleBackgroundChange} onChangeComplete={closeColorPicker} />
      )
    );
  }, [background, colorPickerShow, handleBackgroundChange, closeColorPicker]);

  const eventBubbling = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  }, []);

  return (
    <Container>
      <Header />
      <Content onClick={eventBubbling}>
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
        <ColorButton onClick={handleColorPicker} color={background} />
        {sketchPicker}
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
