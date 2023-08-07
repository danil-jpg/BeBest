import React from 'react';
import s from './RadioForm.module.scss';
import InputBody from '../InputBody/InputBody';
import { isActive } from '../../../../utils/isActive';

const RadioForm = ({ name, text, title, value, checked, setChecked }) => {
    // return (
    //     <label className={`${s.radio} ${isChecked(checked, value, s.active)}`}>
    //         <input
    //             className={`${s.radio__input}`}
    //             type='radio'
    //             name={name}
    //             value={value}
    //             checked={checked === value}
    //             onChange={(e) => {
    //                 setChecked(e.currentTarget.value);
    //             }}
    //         />
    //         <div className={s.radio__custom}></div>
    //         <InputBody title={title} text={text} />
    //     </label>
    //     // тут баг,компоненты имЧекд - у нас на проекте не существует!,исАктив - не замена.
    // );
};

export default RadioForm;
