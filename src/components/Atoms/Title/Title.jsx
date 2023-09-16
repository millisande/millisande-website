import React from 'react';
import * as S from './Title.style';

const Title = ({ title, type }) => {
  switch (type) {
    case 'h1':
      return <S.PageTitle>{title}</S.PageTitle>;
    case 'h2':
      return <S.SectionTitle>{title}</S.SectionTitle>;
    default:
      return <S.ContentTitle>{title}</S.ContentTitle>;
  }
};

export default Title;
