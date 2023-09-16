import styled from 'styled-components';

export const About = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled('div')`
  border: dashed 5px ${props => props.theme.borders.secondary};
  background-color: ${props => props.theme.background.secondary};
  color: ${props => props.theme.text.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => props.theme.text.secondary};
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const LittleWords = styled('p')`
  font-size: 12px;
`;

export const TagContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const TagPadding = styled('div')`
  padding: 2px;
`;

export const VideoContainer = styled('div')`
  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
  }
`;
