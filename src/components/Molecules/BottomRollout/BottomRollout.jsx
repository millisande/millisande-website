import React, { createRef, useState, useEffect } from 'react';
import * as S from './BottomRollout.style';
import { Tab } from '../../Atoms';

const BottomRollout = ({ title, Content }) => {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(0);
  const wrapperRef = createRef();
  useEffect(() => {
    setDistance(wrapperRef.current.scrollHeight);
    console.log(wrapperRef.current.scrollHeight, 'scrollHeight');
  }, []);
  return (
    <S.Container open={open} distance={distance}>
      <S.TabWrapper>
        <Tab title={title} setOpen={setOpen} open={open} />
      </S.TabWrapper>
      <S.ContentWrapper ref={wrapperRef} open={open} distance={distance}>
        <Content />
      </S.ContentWrapper>
    </S.Container>
  );
};

export default BottomRollout;
