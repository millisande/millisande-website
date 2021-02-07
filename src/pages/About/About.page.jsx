import React, { useState } from 'react';
import { TextInput } from '../../components';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import * as S from './About.style';

const About = () => {
  const [messages, setMessages] = useState([]);
  const addMessage = message => {
    const newElement = () => (
      <div key={`${message}-${messages.length}`}>
        <S.Info>
          &gt; {message}
        </S.Info>
        <S.Info>
          I&apos;m sorry this is just an MVP and I&apos;m accepting that
          it&apos;s not delightful yet.
        </S.Info>
      </div>
    );
    setMessages([...messages, newElement]);
  };
  return (
    <S.Container>
      <S.Info>You are standing in front of Millisande Bath.</S.Info>
      <S.Info>She is a full stack software developer.</S.Info>
      <S.Info>&gt; Ask her what she is passionate about</S.Info>
      <S.Info>
        She is passionate about creating delightful user experience and clean
        code which is easy to maintain.
      </S.Info>
      {messages.map(message => message())}
      <TextInput acceptInput={addMessage} />
    </S.Container>
  );
};

export default About;
