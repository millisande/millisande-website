import React from 'react';
import { Tag } from '../../Atoms';
import * as S from './Tile.style';

const Tile = ({ title, info, image, tags }) => (
  <S.Container>
    <S.Picture src={image} alt={`the ${title} work`} />
    <S.Title>{title}</S.Title>
    <S.Info>{info}</S.Info>
    <S.TagContainer>
      {tags && tags.map(tag => <Tag type={tag.type}>{tag.text}</Tag>)}
    </S.TagContainer>
  </S.Container>
);

export default Tile;
