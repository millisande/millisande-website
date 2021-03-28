import React from 'react';
import * as S from './Main.style';
import {
  Avatar,
  Rollout,
  Scrollout,
  Tile,
  Header,
  Tag,
} from '../../components';
import Me from '../../assets/me.jpg';
import { data, experience } from './data';

const Main = () => {
  const Content = () => (
    <S.List>
      {data &&
        data.map(d => (
          <Tile image={d.image} title={d.title} info={d.info} tags={d.tags} />
        ))}
    </S.List>
  );

  const SideContent = () => (
    <S.About>
      <S.AboutWrapper>
        <S.AboutWords>
          Millisande Bath is a software developer from the London area. She is
          passionate about creating experiences that delight users.She is an
          active mentor and teacher.
        </S.AboutWords>
        <S.AboutWords>Key skills and experience:</S.AboutWords>
        <S.TagContainer>
          {experience &&
            experience.map(exp => <Tag type={exp.type}>{exp.text}</Tag>)}
        </S.TagContainer>
      </S.AboutWrapper>
    </S.About>
  );

  return (
    <div>
      <Header />
      <S.Container>
        <S.Content>
          <Avatar image={Me} />
          <S.Title>Millisande</S.Title>
        </S.Content>
        <Scrollout title='Portfolio' Content={Content} />
        <Rollout title='About' Content={SideContent} rotation={90} top='58px' />
      </S.Container>
    </div>
  );
};

export default Main;
