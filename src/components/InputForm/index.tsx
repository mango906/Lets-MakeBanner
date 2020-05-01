import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
import { GoTextSize } from 'react-icons/go';
import styled from 'styled-components';

import { WHITE } from '../../utils/color';
import { fontSizes } from '../../utils/option';
import { getContrastYIQ } from '../../utils/util';
import { ColorButton } from '../ColorButton';
import { Input } from '../Input';
import { SelectBox } from '../SelectBox';

const DEFAULT_FONT_SIZE = "24";

interface Props {
  onChange: (textColor: string, fontSize: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: React.FC<Props> = (props) => {
  const { onChange, onInputChange } = props;

  const [color, setColor] = useState(WHITE);
  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  useEffect(() => {
    onChange(color, fontSize);
  }, [color, fontSize, onChange]);

  const handleColorChange = useCallback((color) => {
    setColor(color.hex);
  }, []);

  const handleColorPicker = useCallback(() => {
    setColorPickerShow(!colorPickerShow);
  }, [colorPickerShow]);

  const handleFontSizeChange = useCallback((value) => {
    setFontSize(value.toString());
  }, []);

  const colorPicker = useMemo(() => {
    return colorPickerShow ? <SketchPicker color={color} onChange={handleColorChange} /> : null;
  }, [color, colorPickerShow, handleColorChange]);

  const btnBackgroundColor = useMemo(() => {
    return getContrastYIQ(color);
  }, [color]);

  return (
    <>
      <Wrapper>
        <Input name="value" onChange={onInputChange} placeholder="Let's make Banner!" />
        <StyledColorBtn
          color={btnBackgroundColor}
          onClick={handleColorPicker}
          icon={<GoTextSize color={color} size="24" />}
        />
        <StyledSelectBox data={fontSizes} onChange={handleFontSizeChange} />
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
