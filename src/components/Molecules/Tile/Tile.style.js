import styled from 'styled-components';

export const Container = styled('div')`
  background-color: ${props => props.theme.background.secondary};
  border: dashed 5px ${props => props.theme.borders.secondary};
  min-height: 300px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin: 10px;
  @media (max-width: 300px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  color: ${props => props.theme.text.secondary};
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

export const TagContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;
