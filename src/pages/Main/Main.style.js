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

export const About = styled('div')`
  height: 400px;
  min-width: 450px;
  width: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const AboutWrapper = styled('div')`
  border: dashed 5px white;
  background-color: #edb089;
  color: white;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #445464;
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
  padding: 25px;
  text-align: center;
`;

export const ButtonWrapper = styled('div')`
  align-self: center;
`;
