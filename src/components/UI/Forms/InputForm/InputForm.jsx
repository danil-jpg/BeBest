import React, { useState } from 'react';
import s from './InputForm.scss';

const InputForm = ({ type = 'text', ph, name, value, setValue, style, className, error }) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const onInputChangeHandler = (e) => {
        setValue(e.currentTarget.value);
    };
    const onEyeClickHandler = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className='input__wr'>
            <input
                style={style ? style : {}}
                className={`input ${className} `}
                type={passwordShown ? 'password' : 'text'}
                placeholder={ph ? ph : ''}
                name={name ? name : ''}
                aria-label={name ? name : ''}
                value={value}
                onClick={(e) => setPasswordShown('text')}
                onChange={(e) => {
                    onInputChangeHandler(e);
                }}
            />
            <span
                onClick={onEyeClickHandler}
                className={type === 'password' ? 'input_password-icon' : ''}></span>
        </div>
    );
};

export default InputForm;
