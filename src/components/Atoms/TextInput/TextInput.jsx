import React, { useState } from 'react';
import * as S from './TextInput.style';

const TextInput = props => {
  const { acceptInput } = props;
  const [value, setValue] = useState('');
  const checkInput = event => {
    if (event.key === 'Enter') {
      acceptInput(value);
      setValue('');
    }
  };
  return (
    <S.InputContainer>
      <S.Arrow>&gt; </S.Arrow>
      <S.Input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => checkInput(e)}
      />
    </S.InputContainer>
  );
};

export default TextInput;
