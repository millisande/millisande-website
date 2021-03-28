import styled from 'styled-components';

export const Tag = styled('div')`
  background: ${props => props.theme.tags[props.type]};
  border-radius: 25px;
  color: ${props => props.theme.text.primary};
  font-family: inherit;
  letter-spacing: inherit;
  display: inline;
  padding: 5px;
`;

export const Text = styled('p')`
  display: inline;
  padding: 10px;
  text-align: center;
  font-size: 14px;
`;
