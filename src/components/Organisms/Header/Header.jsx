import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Button } from '../../Atoms';
import Invader from '../../Atoms/Icons/Invader';
import * as S from './Header.style';

const Header = () => {
  const [showTip, toggleTip] = useState(false);
  const [checked, setChecked] = useState(false);
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
      <S.ToggleWrapper>
        <Toggle
          defaultChecked={checked}
          aria-label='No label tag'
          className='custom-classname'
          onChange={e => setChecked(e.target.checked)}
          icons={{
            checked: <Invader />,
            unchecked: null,
          }}
        />
      </S.ToggleWrapper>
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
