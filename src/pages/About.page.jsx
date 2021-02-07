import React from 'react';
import styled from 'styled-components';

const Home = styled('div')`
  display: grid;
  grid-template-rows: 20px 1fr;
`;

const render = () => (
  <Home>
    <h1>Home</h1>
  </Home>
);

export default render;
