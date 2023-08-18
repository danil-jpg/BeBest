import React from 'react';
import './RegistarionComp.scss';
import Title from '../../../UI/Title/Title';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { setRegDataTeacher } from '../../../../store/slices/registrationSlice/registrationSlice';

const RegistarionComp = () => {
    const [formState, setFormState] = useState(1);

    const [login, setLogin] = useState('123123123213');
    const [password, setPassword] = useState('32123131231312');
    const [confirmPassword, setConfirmPassword] = useState('32123131231312');
    const [email, setEmail] = useState('fdfafdasfd@');
    const [phoneNum, setPhoneNum] = useState('43242423423423423');
    //
    const [compName, setCompName] = useState('aasdasdsx');
    const [inn, setInn] = useState('asasddasdd');
    const [city, setCity] = useState('dasdasd');
    const [adress, setAdress] = useState('adsasdasd');
    //
    const [urAdress, setUrAdress] = useState('sdasad');
    const [postIndex, setPostIndex] = useState('asddas');
    //
    const [buttonType, setButtonType] = useState('text');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [checkboxState, setCheckBoxState] = useState(true);

    const onCheckboxHandler = () => setCheckBoxState(!checkboxState);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const teacherData = useSelector((state) => state.regData);
    console.log(teacherData);
    const formData = {
        data: {
            json: {
                ...teacherData,
            },
        },
    };

    return (
        <div className='registration-student registration-teacher'>
            <Title>Регистрация Компания</Title>
            <form
                className={
                    formState !== 1
                        ? 'registration-teacher__form_opacity registration-student__form'
                        : 'registration-student__form'
                }>
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
                    <li className='registration-student__li'>
                        <InputFormContainer
                            type={'number'}
                            inputClassname={
                                isButtonClicked
                                    ? phoneNum && phoneNum.length > 8
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? phoneNum && phoneNum.length > 8
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={phoneNum}
                            setValue={setPhoneNum}
                            title={'Ваш телефон'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                </ul>
                <button
                    className='registration-student__terms_registration-btn registration-teacher_btn-next'
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (login && password && confirmPassword && email && password) {
                            setFormState(2);
                        }
                    }}>
                    Далее
                </button>
            </form>
            <form
                className={`
				${formState > 1 ? 'registration-student__form' : 'registration-student__form_hidden'} ${
                    formState > 2 ? 'registration-teacher__form_opacity' : ''
                }`}>
                <ul className='registration-student__ul'>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? compName && compName.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? compName && compName.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={compName}
                            type={'text'}
                            setValue={setCompName}
                            title={'Паспорт'}
                            className={'registration-student__input'}></InputFormContainer>
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
                                isButtonClicked ? (inn && inn.length ? '' : 'Заполните поле!') : ''
                            }
                            value={inn}
                            type={'text'}
                            setValue={setInn}
                            title={'Страна'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? city && city.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? inn && inn.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={city}
                            setValue={setCity}
                            title={'Город'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? adress && adress.length > 8
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? adress && adress.length > 8
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={adress}
                            setValue={setAdress}
                            title={'Адрес'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                </ul>
                <button
                    className='registration-student__terms_registration-btn '
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (urAdress && urAdress) {
                            dispatch(
                                setRegDataTeacher({
                                    ...teacherData,
                                    login: login,
                                    password: password,
                                    email: email,
                                    phone: phoneNum,
                                    compName: compName,
                                    inn: inn,
                                    city: city,
                                    adress: adress,
                                    urAdress: urAdress,
                                    postIndex: postIndex,
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

                            console.log(teacherData);

                            navigation('../registrationStudentSucc');
                        }
                    }}>
                    Завершить регистрацию
                </button>
            </form>
        </div>
    );
};

export default RegistarionComp;
