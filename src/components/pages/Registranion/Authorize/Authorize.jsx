import React, { useState } from 'react';
import './Authorize.scss';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Title from '../../../UI/Title/Title';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import { setAuthorize } from '../../../../store/slices/registrationSlice/registrationSlice';
import { setAuthorizeState } from '../../../../store/slices/authorizeSlice/authorizeSlice';

const Authorize = () => {
    const [username, setLogin] = useState('Дэн Миллман');
    const [password, setPassword] = useState('111111');
    const [buttonType, setButtonType] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const personData = useSelector((state) => state.regData);
    const headerIsLogedIn = useSelector((state) => state.authorize);

    return (
        <div className='registration-student'>
            <Title>Авторизация</Title>
            <form className='registration-student__form'>
                <ul className='registration-student__ul'>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? username && username.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? username && username.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={username}
                            setValue={setLogin}
                            title={'Ваш логин'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? password && password.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? password && password.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={password}
                            type={'password'}
                            setValue={setPassword}
                            title={'Ваш пароль'}
                            className={
                                'registration-student__input registration-student__input_password'
                            }></InputFormContainer>
                    </li>
                </ul>
                <button
                    className='registration-student__terms_registration-btn'
                    type={buttonType}
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (username && password) {
                            axios
                                .post('http://bebest.pp.ua/api/auth/local', {
                                    password: password,
                                    identifier: username,
                                })
                                .then((res) => {
                                    dispatch(setAuthorizeState(true));
                                    console.log(headerIsLogedIn);
                                    window.sessionStorage.setItem('id', res.data.user.id);
                                    console.log(res);
                                    navigation('../../Account');
                                })
                                .catch((e) => {
                                    alert('Неверный логин или пароль');
                                    console.log(e);
                                });
                        }
                    }}>
                    Войти
                </button>
            </form>
        </div>
    );
};

export default Authorize;
