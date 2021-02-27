import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #445464;
  height: 100vh;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Title = styled('p')`
  font-size: 24px;
  font-family: VT323, monospace;
  letter-spacing: 2px;
`;

export const Tip = styled('p')`
  font-size: 16px;
  position: absolute;
  background-color: #906655;
  color: white;
  padding: 10px;
  border-radius: 10px;
`;
