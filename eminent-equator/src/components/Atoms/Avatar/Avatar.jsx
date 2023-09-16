import React from 'react';
import * as S from './Avatar.style';

const Avatar = ({ image }) => (
  <S.Container>
    <S.Picture src={image} />
  </S.Container>
);

export default Avatar;
