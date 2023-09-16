import React from 'react';
import * as S from './LinkText.style';

// A simple component that shows the pathname of the current location
const LinkText = props => {
  const { children, url } = props;
  return (
    <S.Link href={url}>
      <S.Arrow>&gt; </S.Arrow>
      <S.Text>{children}</S.Text>
    </S.Link>
  );
};

export default LinkText;
