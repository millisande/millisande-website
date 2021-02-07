import styled from 'styled-components';

export const Button = styled('button')`
  background: none;
  border: solid 1px;
  color: inherit;
  padding: 5px;
  font-family: inherit;
  letter-spacing: inherit;
  height: 30px;
  min-width: 55px;
  &:hover {
    color: white;
    border-color: white;
  }
`;

export const Text = styled('p')`
  display: inline;
  text-transform: uppercase;
`;
