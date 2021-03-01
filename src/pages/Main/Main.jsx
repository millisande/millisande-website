import React, { useState } from 'react';
import * as S from './Main.style';
import { Avatar, Button, Rollout, Scrollout, Tile } from '../../components';
import Me from '../../assets/me.jpg';
import { data } from './data';

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
    <S.List>
      {data &&
        data.map(d => <Tile image={d.image} title={d.title} info={d.info} />)}
    </S.List>
  );

  const SideContent = () => (
    <S.About>
      <S.AboutWrapper>
        <S.AboutWords>
          Millisande Bath is a software developer from the London area. She is
          passionate about creating experiences that delight users.
        </S.AboutWords>
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
      </S.AboutWrapper>
    </S.About>
  );

  return (
    <S.Container>
      <S.Content>
        <Avatar image={Me} />
        <S.Title>Millisande</S.Title>
      </S.Content>
      <Scrollout title='Portfolio' Content={Content} />
      <Rollout title='About' Content={SideContent} rotation={90} top='58px' />
    </S.Container>
  );
};

export default Main;
