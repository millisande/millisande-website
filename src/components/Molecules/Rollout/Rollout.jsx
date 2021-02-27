import React, { createRef, useEffect, useState } from 'react';
import * as S from './Rollout.style';
import { Tab } from '../../Atoms';

const Rollout = ({ title, Content, placement, axisLength }) => {
  const [positions, setPositions] = useState({});
  const wrapperRef = createRef();
  const getPosition = place => {
    switch (place) {
      case 'top':
        return {
          rotation: 180,
          top: 58,
          left: 0,
          width: axisLength,
          wrapperTop: wrapperRef.current.scrollHeight,
          wrapperLeft: wrapperRef.current.scrollWidth,
        };
      case 'left':
        return {
          rotation: 90,
          top: wrapperRef.current.scrollHeight / 2,
          left: wrapperRef.current.scrollWidth / 2 + 40,
          height: axisLength,
          wrapperTop: 0,
          wrapperLeft: 0,
          tabWidth: wrapperRef.current.scrollHeight / 2,
        };
      case 'right':
        return {
          rotation: 270,
          left: -58,
          top: 0,
          height: axisLength,
          wrapperTop: 0,
          wrapperLeft: 58,
          tabWidth: wrapperRef.current.scrollHeight / 2,
        };
      default:
        return {
          rotation: 0,
          top: -58,
          left: 0,
          width: axisLength,
          wrapperTop: 58,
          wrapperLeft: 0,
        };
    }
  };
  useEffect(() => {
    setPositions(getPosition(placement));
  }, []);
  return (
    <S.Container
      width={positions.width || 0}
      height={positions.height || 0}
      top={positions.wrapperTop || 0}
      left={positions.wrapperLeft || 0}
    >
      <S.TabWrapper
        rotation={positions.rotation || 0}
        style={{
          top: positions.top || 0,
          left: positions.left || 0,
          width: positions.tabWidth || 'inherit',
        }}
      >
        <Tab title={title} />
      </S.TabWrapper>
      <div ref={wrapperRef}>
        <Content />
      </div>
    </S.Container>
  );
};

export default Rollout;
