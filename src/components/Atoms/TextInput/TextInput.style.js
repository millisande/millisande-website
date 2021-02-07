import styled from 'styled-components';

export const InputContainer = styled('button')`
  font-size: 18px;
  background: none;
  display: block;
  border: none;
  color: inherit;
  padding: 5px 0px;
  font-family: inherit;
  letter-spacing: inherit;
  &:hover {
    color: white;
  }
`;

export const Arrow = styled('p')`
  display: inline;
`;

export const Input = styled('input')`
  display: inline;
  background: none;
  color: inherit;
  border: none;
  &:active {
    border: none;
  }
`;
