import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text.primary};
  height: 91vh;
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

export const About = styled('div')`
  height: 400px;
  max-width: 450px;
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 550px) {
    width: calc(100vw - 58px);
  }
`;

export const AboutWrapper = styled('div')`
  border: dashed 5px ${props => props.theme.borders.secondary};
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.primary};
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.text.secondary};
`;

export const List = styled('div')`
  height: calc(100vh - 58px);
  width: 85vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

export const AboutWords = styled('p')`
  text-align: center;
`;

export const TagContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 10px;
`;
