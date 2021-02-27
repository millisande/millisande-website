import styled from 'styled-components';

export const Container = styled('button')`
  background-color: #edb089;
  border-radius: 40px 40px 0px 0px;
  width: 100%;
  padding: 1px;
  text-align: center;
  border: none;
  outline: none;
`;

export const TitleWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

export const Title = styled('p')`
  font-size: 20px;
  color: white;
  font-family: VT323, monospace;
  display: inline;
  padding-right: 20px;
`;

export const Arrow = styled('p')`
  font-size: 20px;
  font-weight: 800;
  color: white;
  font-family: VT323, monospace;
  transform: ${props => `rotate(${props.rotation}deg)`};
`;
