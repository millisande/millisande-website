import styled from 'styled-components';

const sharedStyle = `
    font-family: VT323, monospace;
    letter-spacing: 2px;
`;

export const PageTitle = styled('h1')`
  font-size: 24px;
  ${sharedStyle}
`;

export const SectionTitle = styled('h2')`
  font-size: 22px;
  ${sharedStyle}
`;

export const ContentTitle = styled('h3')`
  margin: 10px 0;
  font-size: 20px;
  ${sharedStyle}
`;
