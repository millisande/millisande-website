import React from 'react';
import * as S from './Button.style';

// A simple component that shows the pathname of the current location
const Button = props => {
  const { children, ...other } = props;
  return (
    <S.Button {...other}>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
};

export default Button;
