import React from 'react';
import * as S from './Button.style';

// A simple component that shows the pathname of the current location
const LinkText = props => {
  const { children } = props;
  return (
    <S.Button>
      <S.Text>{children}</S.Text>
    </S.Button>
  );
};

export default LinkText;
