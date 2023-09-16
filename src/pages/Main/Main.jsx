import React from 'react';
import * as S from './Main.style';
import { Avatar, Tab, Header, About, Title, Portfolio } from '../../components';
import Me from '../../assets/me.jpg';

const tabs = [
  {
    title: 'About',
    content: About,
  },
  {
    title: 'Portfolio',
    content: Portfolio,
  },
];

const Main = () => {
  const [content, setContent] = React.useState(false);
  return (
    <S.Page>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.ExpandingPage sideContent={!!content}>
        <S.Container>
          <S.Content>
            <Avatar image={Me} />
            <Title title='Millisande' type='h1' />
          </S.Content>
          <S.TabsList>
            {tabs.map(t => (
              <Tab
                key={t.title}
                title={t.title}
                rotation={270}
                open={t.title === content.title}
                setOpen={bool => {
                  if (bool) {
                    setContent(t);
                  } else {
                    setContent(false);
                  }
                }}
              />
            ))}
          </S.TabsList>
        </S.Container>
        {content && <S.SideContainer>{content.content()}</S.SideContainer>}
      </S.ExpandingPage>
    </S.Page>
  );
};

export default Main;
