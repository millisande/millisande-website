import styled from 'styled-components';

export const Button = styled('button')`
  background: none;
  border: solid 1px;
  border-color: ${props => props.theme.button.primary};
  color: ${props => props.theme.button.primary};
  padding: 5px;
  font-family: inherit;
  letter-spacing: inherit;
  height: 30px;
  min-width: 55px;
  &:hover {
    color: ${props => props.theme.button.hover.primary};
    border-color: ${props => props.theme.button.hover.primary};
  }
  margin-right: 10px;
`;

export const Text = styled('p')`
  display: inline;
  text-transform: uppercase;
`;
