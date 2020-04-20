import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

import { ColorButton } from './components/ColorButton';
import { DisplayBanner } from './components/DisplayBanner';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { InputForm } from './components/InputForm';
import useInput from './hooks/useInput';
import { BACKGROUNDCOLOR, WHITE } from './utils/color';
import { getRandomHexColor } from './utils/util';

const DEFAULT_VALUE = "Let's make Banner!";

const App = () => {
  const [state, onChange] = useInput({
    width: "700",
    height: "350",
    value: DEFAULT_VALUE
  });

  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [background, setBackground] = useState(getRandomHexColor);
  const [color, setColor] = useState(WHITE);

  const { width, height, value } = state;

  const handleColorPicker = useCallback(() => {
    setColorPickerShow(!colorPickerShow);
  }, [colorPickerShow]);

  const closeBackgroundPicker = useCallback(() => {
    setColorPickerShow(false);
  }, []);

  const handleBackgroundChange = useCallback((color) => {
    setBackground(color.hex);
  }, []);

  const backgroundPicker = useMemo(() => {
    return (
      colorPickerShow && (
        <ChromePicker color={background} onChange={handleBackgroundChange} onChangeComplete={closeBackgroundPicker} />
      )
    );
  }, [background, colorPickerShow, handleBackgroundChange, closeBackgroundPicker]);

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
        <DisplayBanner
          width={width}
          height={height}
          style={{ marginTop: 24 }}
          backgroundColor={background}
          text={value}
          textColor={color}
        />
        <StyledColorBtn onClick={handleColorPicker} color={background} />

        <InputForm />

        {backgroundPicker}
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
  background-color: ${BACKGROUNDCOLOR};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const BannerForm = styled.div``;

const StyledColorBtn = styled(ColorButton)`
  margin: 12px 0px;
`;

export default App;
