import React, { useState } from 'react';
import * as S from './Main.style';
import { Avatar, Button, BottomRollout } from '../../components';
import Me from '../../assets/me.jpg';

const Main = () => {
  const [showTip, toggleTip] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMove = event => {
    setX(event.pageX);
    setY(event.pageY);
    toggleTip(true);
  };
  const mouseLeave = () => {
    toggleTip(false);
  };

  const Content = () => (
    <div style={{ height: 'calc(100vh - 68px)', width: '800px' }} />
  );

  return (
    <S.Container>
      <S.Content>
        <Avatar image={Me} />
        <S.Title>Millisande</S.Title>
        <Button
          onPress={() => console.log('To be added later')}
          onMouseLeave={() => mouseLeave()}
          onMouseMove={e => mouseMove(e)}
        >
          View CV
        </Button>
        {showTip && <S.Tip style={{ top: y, left: x }}>Coming soon</S.Tip>}
      </S.Content>
      <BottomRollout title='Portfolio' Content={Content} />
    </S.Container>
  );
};

export default Main;
