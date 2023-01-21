import styled from 'styled-components';

const setDimensions = rotation => {
  console.log('setdimension rotation', rotation);
  if (rotation > 269 && rotation < 360) {
    return `
    width: 100vw;
    display: flex;
    flex-direction: row;
      `;
  }
  if (rotation > 179) {
    return `
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
      `;
  }
  if (rotation > 89) {
    return `
    width: 100vw;
    display: flex;
    flex-direction: row-reverse;
    
      `;
  }
  return `
  height: 100vh;
  display: flex;
  flex-direction: column;
      `;
};

const setTransition = (rotation, distance, open) => {
  if ((rotation > 89 && rotation < 180) || (rotation > 269 && rotation < 360)) {
    return `
    transition: width ease 2s;
    width: ${open ? `${distance}px` : `0px`};
      `;
  }
  return `
  transition: height ease 2s;
  height: ${open ? `${distance}px` : `0px`};
      `;
};

export const Container = styled('div')`
  position: absolute;
  justify-content: flex-end;
  ${({ rotation }) => setDimensions(rotation)}
  ${({ top }) => top && `top: ${top};`}
`;

export const TabWrapper = styled('div')`
  position: relative;
`;

export const ContentWrapper = styled('div')`
  ${({ rotation, distance, open }) => setTransition(rotation, distance, open)}
  overflow: hidden;
  background-color: rgba(237, 176, 137, 0.5);
`;
