import React, { createRef, useState, useEffect } from 'react';
import * as S from './Scrollout.style';
import { Tab } from '../../Atoms';

const Scrollout = ({ title, Content, rotation }) => {
  const [open, setOpen] = useState(false);
  const [distance, setDistance] = useState(0);
  const wrapperRef = createRef();
  const containerRef = createRef();
  useEffect(() => {
    if (
      (rotation > 89 && rotation < 180) ||
      (rotation > 269 && rotation < 360)
    ) {
      setDistance(wrapperRef.current.scrollWidth);
    } else {
      setDistance(wrapperRef.current.scrollHeight);
    }
  }, []);
  useEffect(() => {
    if (
      open &&
      containerRef &&
      containerRef.current &&
      typeof containerRef.current.scrollHeight === 'number'
    ) {
      for (let i = 10; i < 2000; i += 10) {
        setTimeout(() => {
          window.scrollTo(
            window.scrollX,
            window.innerHeight + containerRef.current.scrollHeight,
          );
        }, i);
      }
    }
  }, [open]); // eslint-disable-line prettier/prettier

  return (
    <S.Container
      open={open}
      distance={distance}
      rotation={rotation}
      ref={containerRef}
    >
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

export default Scrollout;
