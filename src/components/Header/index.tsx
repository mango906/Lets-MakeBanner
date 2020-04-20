import React from 'react';
import styled from 'styled-components';

import { Icons } from '../Icons';

export const Header = () => {
  return (
    <Container>
      <a href="https://github.com/mango906/Lets-MakeBanner" target="_blank" rel="noopener noreferrer">
        <Icons type="github" />
      </a>
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
