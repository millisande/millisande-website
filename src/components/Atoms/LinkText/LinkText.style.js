import styled from 'styled-components';

export const Link = styled('a')`
  font-size: 18px;
  background: none;
  display: block;
  border: none;
  color: ${props => props.theme.text.link};
  font-family: inherit;
  letter-spacing: inherit;
  &:hover {
    color: ${props => props.theme.text.tertiary};
  }
`;

export const Arrow = styled('p')`
  display: inline;
  margin: 0px;
`;

export const Text = styled('p')`
  display: inline;
  text-decoration: underline;
  margin: 0px;
`;
