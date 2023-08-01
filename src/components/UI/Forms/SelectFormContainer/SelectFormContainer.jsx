import React from 'react';
import SelectForm from '../SelectForm/SelectForm';
import s from './SelectFormContainer.module.scss';

const SelectFormContainer = ({ style, title, list}) => {
  return (
    <div className={`${s.selectContainer}`} style={style ? style : {}}>
      <p className={s.selectContainer__title}>{title}</p>
      <SelectForm list={list}  />
    </div>
  );
};

export default SelectFormContainer;
