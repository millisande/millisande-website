import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import { Button } from '../../Atoms';
import Daisy from '../../../assets/daisy.png';
import MichaelmasDaisy from '../../../assets/daisy-michaelmas.png';
import * as S from './Header.style';
import { useSettingsContext } from '../../../context/SettingsContext';

const Header = () => {
  const [showTip, toggleTip] = useState(false);
  const [checked, setChecked] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { toggleTheme } = useSettingsContext();
  const mouseMove = event => {
    setX(event.pageX || 0 - 30);
    setY(event.pageY || 0);
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
          onClick={() => console.log('To be added later')}
          onMouseLeave={() => mouseLeave()}
          onMouseMove={e => mouseMove(e)}
          aria-disabled
          aria-describedby='tip'
        >
          View CV
        </Button>
        <Button
          onClick={() => window.open('https://github.com/millisande', '_blank')}
        >
          View Github
        </Button>
        <Button
          onClick={() =>
            window.open('https://twitter.com/Millisande', '_blank')
          }
        >
          View Tweets
        </Button>
      </S.ButtonWrapper>
      {showTip && (
        <S.Tip id='tip' role='tooltip' style={{ top: y, left: x }}>
          Coming soon
        </S.Tip>
      )}
    </S.Container>
  );
};

export default Header;
