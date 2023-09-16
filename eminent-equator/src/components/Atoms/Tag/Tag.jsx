import React from 'react';
import * as S from './Tag.style';

// A simple component that shows the pathname of the current location
const Tag = props => {
  const { children, type = 'language' } = props;
  return (
    <S.Tag type={type}>
      <S.Text>{children}</S.Text>
    </S.Tag>
  );
};

export default Tag;
