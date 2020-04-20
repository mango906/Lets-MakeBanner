import React, { useCallback, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import { GoTextSize } from 'react-icons/go';
import styled from 'styled-components';

import { WHITE } from '../../utils/color';
import { fontSize } from '../../utils/option';
import { getContrastYIQ } from '../../utils/util';
import { ColorButton } from '../ColorButton';
import { Input } from '../Input';
import { SelectBox } from '../SelectBox';

const DEFAULT_VALUE = "Let's make Banner!";

export const InputForm = () => {
  const [color, setColor] = useState(WHITE);
  const [colorPickerShow, setColorPickerShow] = useState(false);

  const handleColorChange = useCallback((color) => {
    setColor(color.hex);
  }, []);

  const handleColorPicker = useCallback(() => {
    setColorPickerShow(!colorPickerShow);
  }, [colorPickerShow]);

  const colorPicker = useMemo(() => {
    return colorPickerShow ? <SketchPicker color={color} onChange={handleColorChange} /> : null;
  }, [color, colorPickerShow, handleColorChange]);

  const btnBackgroundColor = useMemo(() => {
    return getContrastYIQ(color);
  }, [color]);

  return (
    <>
      <Wrapper>
        <Input value={DEFAULT_VALUE} />
        <StyledColorBtn
          color={btnBackgroundColor}
          onClick={handleColorPicker}
          icon={<GoTextSize color={color} size="24" />}
        />
        <StyledSelectBox data={fontSize} />
      </Wrapper>
      {colorPicker}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColorBtn = styled(ColorButton)`
  margin-left: 12px;
`;

const StyledSelectBox = styled(SelectBox)`
  margin-left: 12px;
`;
