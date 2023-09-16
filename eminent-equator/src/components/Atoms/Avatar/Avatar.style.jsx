import styled from 'styled-components';

export const Container = styled('div')`
  border-radius: 52px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 4px solid ${props => props.theme.borders.primary}};
`;

export const Picture = styled('img')`
  width: 100%;
`;
