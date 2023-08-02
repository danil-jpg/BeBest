import React from 'react';
import SelectForm from '../SelectForm/SelectForm';
import s from './SelectFormContainer.module.scss';

const SelectFormContainer = ({ style, title, list, setItem }) => {
    return (
        <div className={`${s.selectContainer}`} style={style ? style : {}}>
            <p className={s.selectContainer__title}>{title}</p>
            <SelectForm list={list} setItem={setItem} />
        </div>
    );
};

export default SelectFormContainer;
