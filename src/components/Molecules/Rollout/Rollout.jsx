import React, { createRef, useState, useEffect } from 'react';
import * as S from './Rollout.style';
import { Tab } from '../../Atoms';

const BottomRollout = ({ title, Content, rotation }) => {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(0);
  const wrapperRef = createRef();
  useEffect(() => {
    setDistance(wrapperRef.current.scrollHeight);
  }, []);
  return (
    <S.Container open={open} distance={distance} rotation={rotation}>
      <S.TabWrapper>
        <Tab title={title} setOpen={setOpen} open={open} rotation={rotation} />
      </S.TabWrapper>
      <S.ContentWrapper
        ref={wrapperRef}
        open={open}
        distance={distance}
        rotation={rotation}
      >
        <Content />
      </S.ContentWrapper>
    </S.Container>
  );
};

export default BottomRollout;
