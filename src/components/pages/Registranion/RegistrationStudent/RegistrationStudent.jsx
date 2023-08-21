import Title from '../../../UI/Title/Title';
import React, { useState } from 'react';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import './RegistrationStudent.scss';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';
import {
    setRegDataStudent,
    postData,
} from '../../../../store/slices/registrationSlice/registrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationStudent = () => {
    const [username, setLogin] = useState('studentTest111');
    const [password, setPassword] = useState('studentTest111');
    const [confirmPassword, setConfirmPassword] = useState('studentTest111');
    const [email, setEmail] = useState('studentTest111@');
    const [buttonType, setButtonType] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [checkboxState, setCheckBoxState] = useState(true);
    const [studentDataState, setStudentDataState] = useState();

    const onCheckboxHandler = () => setCheckBoxState(!checkboxState);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const studentData = useSelector((state) => state.regData);

    return (
        <div className='registration-student'>
            <Title>Регистрация Ученик</Title>
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
                        if (
                            username &&
                            password &&
                            confirmPassword &&
                            password &&
                            email &&
                            email.includes('@')
                        ) {
                            dispatch(
                                setRegDataStudent({
                                    ...studentData,
                                    username: username,
                                    password: password,
                                    email: email,
                                })
                            );

                            axios
                                .post('http://bebest.pp.ua/api/auth/local/register', {
                                    ...studentData,
                                    username: username,
                                    password: password,
                                    email: email,
                                })
                                .then((res) => {
                                    console.log(res);
                                })
                                .then(() => navigation('../registrationStudentSucc'))
                                .catch((e) => alert(e.response.data.error.message));
                        }
                    }}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationStudent;
