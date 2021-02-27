import styled from 'styled-components';

export const Container = styled('div')`
  background-color: rgba(237, 176, 137, 0.5);
  position: absolute;
  width: 100%;
  top: 58px;
  transition: transform ease 250ms;
  ${({ open, distance }) =>
    open &&
    distance &&
    `
    transform: translate(0px, ${distance}px);;
  `}
`;

export const TabWrapper = styled('div')`
  position: absolute;
  width: 100%;
  top: -58px;
`;
