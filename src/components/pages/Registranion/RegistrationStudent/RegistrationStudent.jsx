import Title from '../../../UI/Title/Title';
import React, { useState } from 'react';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import './RegistrationStudent.scss';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';

const RegistrationStudent = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [buttonType, setButtonType] = useState('text');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [checkboxState, setCheckBoxState] = useState(true);

    const onCheckboxHandler = () => setCheckBoxState(!checkboxState);

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
                            value={email}
                            setValue={setEmail}
                            title={'Ваш e-mail'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                </ul>
                <InputCheckbox
                    checkboxState={checkboxState}
                    setCheckboxState={setCheckBoxState}
                    onClickHandler={onCheckboxHandler}></InputCheckbox>
                <button
                    type={buttonType}
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        login &&
                        password &&
                        confirmPassword &&
                        email &&
                        password === confirmPassword
                            ? setButtonType('onSubmit')
                            : '';
                    }}>
                    Click!
                </button>
            </form>
        </div>
    );
};

export default RegistrationStudent;
