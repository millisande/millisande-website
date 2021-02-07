import React from 'react';
import { LinkText } from '../../Atoms';
import * as S from './HeaderBar.style';

// A simple component that shows the pathname of the current location
const HeaderBar = () => (
  <S.Bar>
    <S.Title>Millisande</S.Title>
    <S.Info>You are standing in front of Millisande Bath.</S.Info>
    <S.Info>She is a full stack software developer.</S.Info>
    <S.Info>&gt; Ask her what she is passionate about</S.Info>
    <S.Info>
      She is passionate about creating delightful user experience and clean code
      which is easy to maintain.
    </S.Info>
    <LinkText>See her about section</LinkText>
    <LinkText>See her contact details</LinkText>
  </S.Bar>
);

export default HeaderBar;
