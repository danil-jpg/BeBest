import React, { useState } from 'react';
import './InputForm.scss';

const InputForm = ({
    title = '',
    type = 'text',
    ph = '',
    name = 'input',
    value,
    setValue,
    style = {},
    mb = '23px'
}) => {
    const [inputType, setInputType] = useState(type);

    const onEyeClickHandler = () => {
        if (inputType === 'password') {
            setInputType('text');
        } else {
            setInputType('password')
        }
    };

    return (
        <div>
            {
                title
                    ? <p className="input__title">{title}</p>
                    : <></>
            }
            <div className='input__wr'>
                <input
                    style={{ ...style, margin: `0 0 ${mb}` }}
                    className='input'
                    type={inputType}
                    placeholder={ph}
                    name={name}
                    aria-label={name}
                    value={value}
                    onChange={(e) => { setValue(e.currentTarget.value) }}
                />
                {
                    type === 'password'
                        ? <span
                            onClick={onEyeClickHandler}
                            className={
                                inputType === 'password'
                                    ? 'input_password-icon'
                                    : 'input_password-icon check'
                            }></span>
                        : <></>
                }

            </div>
        </div>
    );
};

export default InputForm;
