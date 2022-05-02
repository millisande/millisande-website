import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Button } from '../../Atoms';
import Daisy from '../../../assets/daisy.png';
import MichaelmasDaisy from '../../../assets/daisy-michaelmas.png';
import * as S from './Header.style';

const Header = ({ toggleTheme }) => {
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
          aria-label={`Theme toggle, click to change to ${
            checked ? 'light' : 'dark'
          }`}
          className='custom-toggle-class'
          onChange={e => {
            toggleTheme();
            setChecked(e.target.checked);
          }}
          style={{ backgroundColor: 'red' }}
          icons={{
            checked: (
              <img
                src={Daisy}
                alt='Daisy icon to indicate light theme'
                height='10px'
                width='auto'
              />
            ),
            unchecked: (
              <img
                src={MichaelmasDaisy}
                alt='Daisy icon to indicate light theme'
                height='10px'
                width='auto'
              />
            ),
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
