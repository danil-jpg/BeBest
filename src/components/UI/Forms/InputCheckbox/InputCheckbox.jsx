import React from 'react';
import './InputCheckbox.scss';

const InputCheckbox = ({
    checkboxState,
    setCheckboxState,
    onClickHandler
}) => {
    return (
        <div
            onClick={onClickHandler}
            className={checkboxState ? 'checkbox active' : 'checkbox'}></div>
    );
};

export default InputCheckbox;
