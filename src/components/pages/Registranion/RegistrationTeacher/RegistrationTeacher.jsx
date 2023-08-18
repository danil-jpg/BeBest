import React from 'react';
import './RegistrationTeacher.scss';
import Title from '../../../UI/Title/Title';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import InputCheckbox from '../../../UI/Forms/InputCheckbox/InputCheckbox';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Picture from '../../../UI/Picture/Picture';
import camera from '../../../../assets/images/registration/camera.png';
import cameraW from '../../../../assets/images/registration/camera.png?as=webp';
import { setRegDataTeacher } from '../../../../store/slices/registrationSlice/registrationSlice';

const RegistrationTeacher = () => {
    const [formState, setFormState] = useState(1);

    const [login, setLogin] = useState('123123123213');
    const [password, setPassword] = useState('32123131231312');
    const [confirmPassword, setConfirmPassword] = useState('32123131231312');
    const [email, setEmail] = useState('fdfafdasfd@');
    const [phoneNum, setPhoneNum] = useState('43242423423423423');
    //
    const [photo, setPhoto] = useState('');
    const [passport, setPassport] = useState('aasdasdsx');
    const [country, setCountry] = useState('asasddasdd');
    const [city, setCity] = useState('dasdasd');
    const [adress, setAdress] = useState('adsasdasd');
    //
    const [edu, setEdu] = useState('sdasad');
    const [exp, setExp] = useState('asddas');
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

    // console.log(photo);

    return (
        <div className='registration-student registration-teacher'>
            <Title>Регистрация Преподаватель</Title>
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
                    <li className='registration-student__li registration-input-image_wr'>
                        <input
                            value={photo}
                            onChange={(e) => setPhoto(photo)}
                            type='file'
                            className='registration-input__input'
                        />
                        <Picture webp={cameraW} img={camera} />
                        <p className='regisration-input__text'>Загрузить фотографию</p>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked
                                    ? passport && passport.length > 5
                                        ? ''
                                        : 'input_empty'
                                    : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? passport && passport.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={passport}
                            type={'text'}
                            setValue={setPassport}
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
                                isButtonClicked
                                    ? country && country.length
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
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
                                    ? country && country.length > 5
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
                    className='registration-student__terms_registration-btn registration-teacher_btn-next'
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (passport && country && city && adress) {
                            setFormState(3);
                        }
                    }}>
                    Далее
                </button>
            </form>
            <form
                className={
                    formState === 3
                        ? 'registration-student__form'
                        : 'registration-student__form_hidden'
                }>
                <ul className='registration-student__ul'>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked ? (edu && edu.length > 5 ? '' : 'input_empty') : ''
                            }
                            errorMessage={
                                isButtonClicked
                                    ? edu && edu.length > 5
                                        ? ''
                                        : 'Заполните поле!'
                                    : ''
                            }
                            value={edu}
                            type={'text'}
                            setValue={setEdu}
                            title={'Образование'}
                            className={'registration-student__input'}></InputFormContainer>
                    </li>
                    <li className='registration-student__li'>
                        <InputFormContainer
                            inputClassname={
                                isButtonClicked ? (exp && exp.length > 3 ? '' : 'input_empty') : ''
                            }
                            errorMessage={
                                isButtonClicked ? (exp && exp.length ? '' : 'Заполните поле!') : ''
                            }
                            value={exp}
                            type={'text'}
                            setValue={setExp}
                            title={'Опыт работы'}
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
                    className='registration-student__terms_registration-btn '
                    onClick={(e) => {
                        e.preventDefault();
                        setIsButtonClicked(true);
                        if (exp && edu) {
                            dispatch(
                                setRegDataTeacher({
                                    ...teacherData,
                                    login: login,
                                    password: password,
                                    email: email,
                                    phone: phoneNum,
                                    passport: passport,
                                    country: country,
                                    city: city,
                                    adress: adress,
                                    edu: edu,
                                    exp: exp,
                                })
                            );
                        }
                        console.log(teacherData);
                    }}>
                    Завершить регистрацию
                </button>
            </form>
        </div>
    );
};

export default RegistrationTeacher;
