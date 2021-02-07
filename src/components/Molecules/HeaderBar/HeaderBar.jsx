import React from 'react';
import { Button } from '../../Atoms';
import * as S from './HeaderBar.style';

// A simple component that shows the pathname of the current location
const HeaderBar = () => (
  <S.Bar>
    <S.Title>Millisande</S.Title>
    <S.ButtonContainer>
      <S.ButtonWrapper>
        <Button>About</Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button>CV</Button>
      </S.ButtonWrapper>
    </S.ButtonContainer>
  </S.Bar>
);

export default HeaderBar;
