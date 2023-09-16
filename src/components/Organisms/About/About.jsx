import React from 'react';
import { Tag, TabContent, Title } from '../../Atoms';
import * as S from './About.style';

export const experience = [
  {
    text: 'React',
  },
  {
    text: 'React-Native',
  },
  {
    text: 'NodeJS',
  },
  {
    type: 'cloud',
    text: 'IBM cloud',
  },
  {
    type: 'cloud',
    text: 'AWS',
  },
];

const About = () => (
  <TabContent>
    <S.About>
      <S.ContentWrapper>
        <Title title='About' type='h2' />
        <p>
          Millisande Bath is a senior software developer from the London area.
          She is passionate about creating experiences that delight users. She
          is an active mentor, teacher and leader.
        </p>
        <p>
          With a background in anthropology and Human Computer Interaction
          Millie brings more to the table than pure dev skills alone.
        </p>
        <p>
          Please potter around her digital garden to find out more about her
          work and skills.
        </p>
        <p>Key skills and experience:</p>
        <S.TagContainer>
          {experience &&
            experience.map(exp => (
              <S.TagPadding>
                <Tag type={exp.type} key={exp.text}>
                  {exp.text}
                </Tag>
              </S.TagPadding>
            ))}
        </S.TagContainer>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Title title='See me in action' type='h3' />
        <p>Watch the replay of my recent talk at ReactJS Girls London</p>
        <S.VideoContainer>
          <iframe
            src='https://www.youtube.com/embed/LxeCAw4PHDo?si=O7ms-r5NAWkvm3d-'
            title='YouTube video player'
            // eslint-disable-next-line react/no-unknown-property
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          />
        </S.VideoContainer>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <Title title='Get to know me' type='h3' />
        <p>Where do you draw inspiration from outside of work?</p>
        <S.LittleWords>
          I spend a lot of time watching video essays about filmmaking and music
          creation. I find it inspiring to understand how these pieces of art
          are created on a technical level and the decisions that they made to
          get to that endpoint. It&apos;s always been an interest of mine and
          probably why I enjoy development work within a team. Watching how
          these teams work, I see a reflection of what I do within my company.
          Everyone needs to be aligned to create a final product that is
          beautiful and the combination of all the technical and legacy code
          decisions.
        </S.LittleWords>
        <p>
          Could you share any examples of the insights you find in these videos?
        </p>
        <S.LittleWords>
          In &quot;X-Men: Days of Future Past,&quot; there&apos;s a specific
          frame in the film where the render didn&apos;t work, and none of the
          CGI elements of the explosion is visible anymore. And it made it to
          the final theatrical release. I bring this up because every time I
          hear that story, I relate it to my own work. Sometimes, my code
          doesn&apos;t run how I expected and that&apos;s how defects come about
          in apps.
        </S.LittleWords>
        <S.LittleWords>
          I also love the &quot;Song Exploder&quot; episode on Netflix where
          R.E.M, explains how they wrote &quot;Losing My Religion.&quot; The
          level of trust within the team and how they divided roles and
          responsibilities, I thought it was such a beautiful example of people
          working together on one collaborative effort. Every time I watch it,
          I&apos;m like, &quot;Teams. They can create anything.&quot;
        </S.LittleWords>
      </S.ContentWrapper>
    </S.About>
  </TabContent>
);

export default About;
