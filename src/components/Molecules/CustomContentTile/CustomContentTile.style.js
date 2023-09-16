import styled from 'styled-components';

export const Container = styled('div')`
  background-color: ${props => props.theme.background.secondary};
  border: dashed 5px ${props => props.theme.borders.secondary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  color: ${props => props.theme.text.secondary};
`;

export const MainContent = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Details = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 700px) {
    width: auto;
  }
`;

export const Picture = styled('img')`
  height: auto;
  width: 45%;
  @media (max-width: 700px) {
    width: 100%;
  }
  flex-grow: 1;
  margin-right: 20px;
  margin-top: 18.26px;
`;

export const TagContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const TagPadding = styled('div')`
  padding: 2px;
`;

export const ContentContainer = styled('div')`
  margin-top: 5px;
  font-size: 12px;
`;

export const TLDRContent = styled('p')`
  margin: 0px;
`;
