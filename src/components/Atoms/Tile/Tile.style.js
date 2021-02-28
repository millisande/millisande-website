import styled from 'styled-components';

export const Container = styled('div')`
  background-color: #edb089;
  border: dashed 5px white;
  height: 300px;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
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
  height: 100%;
`;

export const PictureWrapper = styled('div')`
  height: 50%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
