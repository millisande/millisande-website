import styled from 'styled-components';

export const Container = styled('div')`
  background-color: rgba(237, 176, 137, 0.5);
  position: absolute;
  width: 100%;
  top: ${props => `${props.distance + 58}px`};
  transition: transform ease 2s;
  ${({ open, distance }) =>
    open &&
    distance &&
    `
    transform: translate(0px, ${-distance}px);
  `}
`;

export const TabWrapper = styled('div')`
  position: absolute;
  width: 100%;
  top: -58px;
`;

export const ContentWrapper = styled('div')`
  transition: height ease 2s, transform ease 250ms;
  height: ${props => (props.open ? `${props.distance}px` : `0px`)};
  overflow: hidden;
`;
