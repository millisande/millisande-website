import styled from 'styled-components';

export const Container = styled('div')`
  background-color: #edb089;
  border: dashed 5px white;
  min-height: 300px;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  @media (max-width: 300px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Title = styled('p')`
  font-size: 14px;
  font-family: VT323, monospace;
  align-self: center;
  text-align: center;
`;

export const Info = styled('p')`
  font-size: 14px;
`;

export const Picture = styled('img')`
  width: 100%;
  height: auto;
`;
