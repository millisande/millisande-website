import React, { useState, useEffect, createRef } from 'react';
import * as S from './Accordion.style';
import { Tab } from '../../Atoms';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(0);
  const wrapperRef = createRef();
  useEffect(() => {
    setDistance(wrapperRef.current.scrollHeight);
  }, []);
  return (
    <S.Container open={open}>
      <S.TabWrapper>
        <Tab title={title} setOpen={setOpen} open={open} rotation={0} />
      </S.TabWrapper>
      <S.ContentWrapper ref={wrapperRef} open={open} distance={distance}>
        {children}
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Accordion;
