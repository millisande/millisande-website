import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const ButtonWrapper = styled('div')`
  align-self: center;
`;

export const ToggleWrapper = styled('div')`
  padding: 0px 10px;
  display: flex;
  align-items: center;

  // resting unchecked
  .react-toggle-track {
    background-color: ${props => props.theme.text.primary};
  }

  // hover unchecked
  .custom-toggle-class.react-toggle:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: '#171F2C';
  }

  // resting checked
  .custom-toggle-class.react-toggle--checked .react-toggle-track {
    background-color: ${props => props.theme.text.primary};
  }

  // hover unchecked
  .custom-toggle-class.react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #3c4e6d;
  }
`;

export const Tip = styled('p')`
  font-size: 16px;
  position: absolute;
  background-color: #906655;
  color: white;
  padding: 10px;
  border-radius: 10px;
`;
