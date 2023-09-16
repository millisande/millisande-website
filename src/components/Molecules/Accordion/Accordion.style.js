import styled from 'styled-components';

export const Container = styled('div')`
  justify-content: flex-end;
`;

export const TabWrapper = styled('div')`
  min-width: 58px;
`;

export const ContentWrapper = styled('div')`
  overflow: hidden;
  transition: height ease 2s;
  height: ${({ open, distance }) => (open ? `${distance}px` : `0px`)};
`;
