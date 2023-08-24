import React from 'react';
import Title from '../../../UI/Title/Title';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';

const RegistratoinSucc = () => {
    return (
        <div className='registration-student'>
            <Title>Регистрация Успешна!</Title>
            <MainButton style={{ marginTop: '105px', width: '200px' }} to='../../'>
                Перейти на главную
            </MainButton>
        </div>
    );
};

export default RegistratoinSucc;
