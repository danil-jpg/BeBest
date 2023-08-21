import React from 'react';
import './RegistarionComp.scss';
import Title from '../../../UI/Title/Title';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { setRegDataComp } from '../../../../store/slices/registrationSlice/registrationSlice';

const RegistarionComp = () => {
    const [formState, setFormState] = useState(1);

    const [username, setLogin] = useState('123123123213');
    const [password, setPassword] = useState('32123131231312');
    const [confirmPassword, setConfirmPassword] = useState('32123131231312');
    const [email, setEmail] = useState('fdfafdasfd@mail.com');
    const [phoneNum, setPhoneNum] = useState('43242423423423423');
    //
    const [compName, setCompName] = useState('xxxxxxx');
    const [inn, setInn] = useState('xxxxxxx');
    const [city, setCity] = useState('xxxxxxx');
    const [country, setCountry] = useState('xxxxxxx');
    const [adress, setAdress] = useState('xxxxxxx');
    //

    const [urAdress, setUrAdress] = useState('xxxxxxx');
    const [postIndex, setPostIndex] = useState('xxxxxxx');
    //
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const compData = useSelector((state) => state.regData);

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
                        if (username && password && confirmPassword && email && password) {
                            setFormState(2);
                            dispatch(
                                setRegDataComp({
                                    ...compData,
                                    username: username,
                                    password: password,
                                    email: email,
                                    phone: phoneNum,
                                })
                            );
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
                            title={'Наименование компании'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked ? (inn && inn.length > 3 ? '' : 'input_empty') : ''
                            }
                            errorMessage={
                                isButtonClicked ? (inn && inn.length ? '' : 'Заполните поле!') : ''
                            }
                            value={inn}
                            type={'text'}
                            setValue={setInn}
                            title={'ИНН'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? country && country.length > 3
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked ? (inn && inn.length ? '' : 'Заполните поле!') : ''
                            }
                            value={country}
                            type={'text'}
                            setValue={setCountry}
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
                                    ? adress && adress.length > 3
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? adress && adress.length > 3
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={adress}
                            setValue={setAdress}
                            title={'Почтовый адрес'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? urAdress && urAdress.length > 4
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? urAdress && urAdress.length > 4
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={urAdress}
                            setValue={setUrAdress}
                            title={'Юридический адрес'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                </ul>
                <button
                    className='registration-student__terms_registration-btn '
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (
                            username &&
                            password === confirmPassword &&
                            email &&
                            phoneNum &&
                            compName &&
                            inn &&
                            country &&
                            city &&
                            urAdress &&
                            postIndex
                        ) {
                            dispatch(
                                setRegDataComp({
                                    ...compData,
                                    compName: compName,
                                    inn: inn,
                                    city: city,
                                    adress: adress,
                                    country: country,
                                    urAdress: urAdress,
                                    postIndex: postIndex,
                                })
                            );
                            axios
                                .post('http://bebest.pp.ua/api/auth/local/register', {
                                    ...compData,
                                })
                                .then((res) => {
                                    console.log(res);
                                })
                                .then(() => navigation('../registrationStudentSucc'))
                                .catch((e) => console.log(e));
                        }
                    }}>
                    Завершить регистрацию
                </button>
            </form>
        </div>
    );
};

export default RegistarionComp;
