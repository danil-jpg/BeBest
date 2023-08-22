import React from 'react';
import './Account.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import InputFormContainer from '../../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';

const Student = () => {
    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus />
                    <LkNavigation />
                </>
            }
            rightContent={
                <div className='account account__student'>
                    <p className='account__title'>Аккаунт</p>
                    <div className='account__delete-wr'>
                        <InputFormContainer title={'Логин'}></InputFormContainer>
                        <p>Удалить аккаунт</p>
                    </div>
                    <InputFormContainer title={'Пароль'}></InputFormContainer>
                    <InputFormContainer title={'E-mail'}></InputFormContainer>
                    <InputFormContainer title={'Телефон'}></InputFormContainer>
                    <MainButton>Сохранить изменения</MainButton>
                </div>
            }
        />
    );
};

export default Student;
