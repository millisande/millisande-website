import React from 'react';
import * as S from './Tab.style';

const Tab = ({ title, setOpen, open }) => (
  <S.Container onClick={() => setOpen(!open)}>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.Arrow rotation={open ? '90' : '270'}>&gt;</S.Arrow>
    </S.TitleWrapper>
  </S.Container>
);

export default Tab;
