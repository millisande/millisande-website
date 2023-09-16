import styled from 'styled-components';

export const Page = styled('div')`
  width: 100vw;
  overflow: scroll;
`;

export const ExpandingPage = styled('div')`
  width: ${props => (props.sideContent ? 'calc((2*100vw) - 80px)' : '100vw')};
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

export const HeaderWrapper = styled('div')`
  position: absolute;
  width: 100vw;
`;

export const Container = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  color: ${props => props.theme.text.primary};
  height: calc(100vh - 50px);
`;

export const SideContainer = styled('div')`
  width: calc(100vw - 80px);
  height: calc(100vh - 50px);
  overflow: scroll;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  align-self: center;
`;

export const List = styled('div')`
  height: calc(100vh - 58px);
  width: 85vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

export const TabsList = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
