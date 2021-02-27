import styled from 'styled-components';

export const Container = styled('div')`
  background-color: rgba(95, 69, 54, 0.5);
  padding: 10px;
  position: absolute;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border: solid 1.5px #edb089;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  border: solid 1.5px #edb089;
`;

export const TabWrapper = styled('div')`
  transform: ${props => `rotate(${props.rotation}deg)`};
  position: absolute;
  width: 100%;
`;
