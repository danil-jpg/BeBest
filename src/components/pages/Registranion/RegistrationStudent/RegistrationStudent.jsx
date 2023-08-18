import Title from '../../../UI/Title/Title';
import React, { useState } from 'react';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import './RegistrationStudent.scss';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';
import { setRegDataStudent } from '../../../../store/slices/registrationSlice/registrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationStudent = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [buttonType, setButtonType] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [checkboxState, setCheckBoxState] = useState(true);

    const onCheckboxHandler = () => setCheckBoxState(!checkboxState);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const studentData = useSelector((state) => state.regData);
    console.log(studentData);

    return (
        <div className='registration-student'>
            <Title>Регистрация Ученик</Title>
            <form className='registration-student__form'>
                <ul className='registration-student__ul'>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? login && login.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? login && login.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={login}
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
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? confirmPassword && confirmPassword.length > 3
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? confirmPassword && confirmPassword.length
                                        ? confirmPassword === password
                                            ? ''
                                            : 'Пароли не совпадают'
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={confirmPassword}
                            type={'password'}
                            setValue={setConfirmPassword}
                            title={'Подтвердите пароль'}
                            className={
                                'registration-student__input registration-student__input_password'
                            }></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? email && email.length > 5 && email.includes('@')
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? email && email.length > 5 && email.includes('@')
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={email}
                            setValue={setEmail}
                            title={'Ваш e-mail'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                </ul>
                <div className='registration-student__terms_block'>
                    <InputCheckbox
                        checkboxState={checkboxState}
                        setCheckboxState={setCheckBoxState}
                        onClickHandler={onCheckboxHandler}></InputCheckbox>
                    <p className='registration-student__terms_text'>
                        Я принимаю условия пользовательского соглашения и
                        <span>правила обработки персональных данных</span>
                    </p>
                </div>
                <button
                    className='registration-student__terms_registration-btn'
                    type={buttonType}
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (login && password && confirmPassword && email && password) {
                            const formData = {
                                data: {
                                    json: {
                                        ...studentData,
                                    },
                                },
                            };
                            dispatch(
                                setRegDataStudent({
                                    ...studentData,
                                    login: login,
                                    password: password,
                                    email: email,
                                })
                            );

                            setTimeout(() => {
                                axios
                                    .post('http://bebest.pp.ua/api/tests/', formData)
                                    .then((res) => {
                                        console.log(res);
                                    })
                                    .catch((e) => console.log(e));
                            }, 0);

                            console.log(studentData);

                            navigation('../registrationStudentSucc');
                        }
                    }}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationStudent;
