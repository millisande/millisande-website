import React from 'react';
import * as S from './Tile.style';

const Tile = ({ title, info, image }) => (
  <S.Container>
    <S.Picture src={image} alt={`the ${title} work`} />
    <S.Title>{title}</S.Title>
    <S.Info>{info}</S.Info>
  </S.Container>
);

export default Tile;
