import React from 'react';
import InputForm from '../InputForm/InputForm';
import './InputFormContainer.scss';
import s from './InputFormContainer.module.scss';

const InputFormContainer = ({
    style,
    title,
    className,
    inputClassname = '',
    name,
    type,
    ph,
    value,
    setValue,
    error,
    errorMessage = 'xxx',
}) => {
    return (
        <div
            className={`${s.inputContainer} ${className} 
            ${inputClassname === 'input_empty' ? 'inputContainerEmpty' : ''}
            }`}
            style={style ? style : {}}>
            <h2 className={`${s.inputContainer__title}`}>{title}</h2>
            <InputForm
                className={inputClassname}
                name={name}
                ph={ph}
                type={type}
                value={value}
                setValue={setValue}
            />
            <p className='input_error-message'>{errorMessage}</p>
        </div>
    );
};

export default InputFormContainer;
