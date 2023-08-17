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
}) => {
    return (
        <div
            className={`${s.inputContainer} ${className} 
            ${inputClassname === 'input_empty' ? 'inputContainerEmpty' : ''}
            ${inputClassname === 'input_differ' ? 'inputContainerPassDiffer' : ''}
            }`}
            style={style ? style : {}}>
            <h2 className={`${s.inputContainer__title}`}>{title}</h2>
            <InputForm
                // classname={className}
                className={inputClassname}
                name={name}
                ph={ph}
                type={type}
                value={value}
                setValue={setValue}
            />
        </div>
    );
};

export default InputFormContainer;
