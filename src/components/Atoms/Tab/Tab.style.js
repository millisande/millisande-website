import styled from 'styled-components';

const setDimensions = rotation => {
  console.log(rotation, rotation > 89, 'rotate');
  if (rotation > 269 && rotation < 360) {
    return `
      border-radius: 40px 0px 0px 40px;
      height: 100%;
      width: 58px;
      `;
  }
  if (rotation > 179) {
    return `
      border-radius: 0px 0px 40px 40px;
      width: 100%;
      height: 58px;
      `;
  }
  if (rotation > 89) {
    return `
      border-radius: 0px 40px 40px 0px;
      height: 100%;
      width: 58px;
      `;
  }
  return `
      border-radius: 40px 40px 0px 0px
      height: 58px;
      width: 100%;
      `;
};

export const Container = styled('button')`
  background-color: #edb089;
  padding: 1px;
  text-align: center;
  border: none;
  outline: none;
  ${({ rotation }) => setDimensions(rotation)}
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
  color: white;
  font-family: VT323, monospace;
  display: inline;
  padding-right: 20px;
`;

export const Arrow = styled('p')`
  font-size: 20px;
  font-weight: 800;
  color: white;
  font-family: VT323, monospace;
  transform: ${props => `rotate(${props.rotation}deg)`};
  transition: transform ease 1s;
`;
