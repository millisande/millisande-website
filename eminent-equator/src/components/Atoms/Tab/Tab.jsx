import React from 'react';
import * as S from './Tab.style';

const Tab = ({ title, setOpen, open, rotation }) => (
  <S.Container onClick={() => setOpen(!open)} rotation={rotation}>
    <S.TitleWrapper rotation={rotation}>
      <S.Title>{title}</S.Title>
      <S.Arrow rotation={open ? '90' : '270'}>&gt;</S.Arrow>
    </S.TitleWrapper>
  </S.Container>
);

export default Tab;
