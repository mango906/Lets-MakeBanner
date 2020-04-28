import { Select } from 'antd';
import React, { useMemo } from 'react';
import styled from 'styled-components';

const { Option } = Select;

interface Props {
  data: string[];
  onChange: (value: unknown) => void;
}

export const SelectBox: React.FC<Props> = (props) => {
  const { data, onChange, ...restProps } = props;

  const options = useMemo(() => {
    return data.map((value, index) => (
      <Option key={index} value={value}>
        {value}
      </Option>
    ));
  }, [data]);

  return (
    <StyledSelect defaultValue="font size" {...restProps} onChange={onChange}>
      {options}
    </StyledSelect>
  );
};

const StyledSelect = styled(Select)`
  width: 120px;
`;
