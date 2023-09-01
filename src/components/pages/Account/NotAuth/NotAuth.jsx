import React from 'react';
import './NotAuth.scss';
import ContainerMain from '../../../common/ContainerMain/ContainerMain';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';

const NotAuth = ({ user }) => {


    return (
        <ContainerMain>
            <div className="not-auth">
                <div className="not-auth__row">
                    <p className='not-auth__text'>
                        Сначала нужно пройти Aвторизацию/Регистрацию
                    </p>
                    <div className="not-auth__buttons">
                        <MainButton to='/registration/Authorize' maxWidth='200px'>
                            Вход
                        </MainButton>
                        <MainButton to='/' type='white' maxWidth='200px'>
                            На главную
                        </MainButton>
                    </div>
                </div>
            </div>
        </ContainerMain>
    );
};

export default NotAuth;
