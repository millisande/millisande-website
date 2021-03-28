import React, { useState } from 'react';
import { Button } from '../../Atoms';
import * as S from './Header.style';

const Header = () => {
  const [showTip, toggleTip] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = event => {
    setX(event.pageX - 30);
    setY(event.pageY);
    toggleTip(true);
  };
  const mouseLeave = () => {
    toggleTip(false);
  };
  return (
    <S.Container>
      <S.ButtonWrapper>
        <Button
          onPress={() => console.log('To be added later')}
          onMouseLeave={() => mouseLeave()}
          onMouseMove={e => mouseMove(e)}
        >
          View CV
        </Button>
      </S.ButtonWrapper>
      {showTip && <S.Tip style={{ top: y, left: x }}>Coming soon</S.Tip>}
    </S.Container>
  );
};

export default Header;
