import styled from 'styled-components';

const setDimensions = (rotation, open) => {
  const heightOrWidth = open ? '79px' : '58px';
  if (rotation > 269 && rotation < 360) {
    return `
      border-radius: 40px 0px 0px 40px;
      height: 100%;
      width: ${heightOrWidth};
      `;
  }
  if (rotation > 179) {
    return `
      border-radius: 0px 0px 40px 40px;
      width: 100%;
      height: ${heightOrWidth};
      `;
  }
  if (rotation > 89) {
    return `
      border-radius: 0px 40px 40px 0px;
      height: 100%;
      width: ${heightOrWidth};
      `;
  }
  return `
      border-radius: 40px 40px 0px 0px;
      height: ${heightOrWidth};
      width: 100%;
      `;
};

export const Container = styled('button')`
  background-color: ${props => props.theme.background.secondary};
  padding: 1px;
  text-align: center;
  border: none;
  outline: none;
  ${({ rotation, open }) => setDimensions(rotation, open)};
  color: ${props => props.theme.button.primary};
  &:hover {
    color: ${props => props.theme.button.hover.primary};
  }
`;

export const TitleWrapper = styled('div')`
  display: flex;
  justify-content: center;
  ${({ rotation }) =>
    rotation &&
    `
    transform: rotate(${rotation}deg);
  `}
`;

export const Title = styled('p')`
  font-size: 20px;
  font-family: VT323, monospace;
  display: inline;
  padding-right: 20px;
`;

export const Arrow = styled('p')`
  font-size: 20px;
  font-weight: 800;
  font-family: VT323, monospace;
  transform: ${props => `rotate(${props.rotation}deg)`};
  transition: transform ease 1s;
`;
