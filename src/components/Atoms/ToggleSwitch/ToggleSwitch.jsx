import React from 'react';
import * as S from './ToggleSwitch.style';

const ToggleSwitch = (props) => {
    const { checked, onChange } = props;
    return (
        <S.Container>
            <S.Input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
            <S.Label><S.Inner /><S.Switch /></S.Label>
        </S.Container>
    )
}

export default ToggleSwitch;