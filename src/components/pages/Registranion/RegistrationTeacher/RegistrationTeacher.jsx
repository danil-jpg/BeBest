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
    const randomMail = `${Math.random() * 10000}@gmail.com`;
    const randomLogin = `${Math.random() * 10000}xxx${Math.random() * 100}`;

    const [formState, setFormState] = useState(1);

    const [username, setLogin] = useState(randomLogin);
    const [password, setPassword] = useState('user111111');
    const [confirmPassword, setConfirmPassword] = useState('user111111');
    const [email, setEmail] = useState(randomMail);
    const [phoneNum, setPhoneNum] = useState('111111111111');
    //
    const [photo, setPhoto] = useState();
    const [passport, setPassport] = useState('2222222222');
    const [country, setCountry] = useState('3333333333');
    const [city, setCity] = useState('4444444');
    const [adress, setAdress] = useState('55555555');
    //
    const [edu, setEdu] = useState('1111111111');
    const [exp, setExp] = useState('22222222');
    //
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [checkboxState, setCheckBoxState] = useState(true);

    const onCheckboxHandler = () => setCheckBoxState(!checkboxState);

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const teacherData = useSelector((state) => state.regData);

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
                            onChange={(event) => {
                                setPhoto(event.target.files[0]);
                            }}
                            type='file'
                            className='registration-input__input'
                        />
                        <img
                            className='registration__avatar'
                            src={photo ? URL.createObjectURL(photo) : camera}
                        />
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
                                    username: username,
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
                            console.log(photo);
                            const formData = new FormData();
                            formData.append('image', photo);

                            for (var pair of formData.entries()) {
                                console.log(pair[0] + ', ' + pair[1]);
                            }
                            axios
                                .post('http://bebest.pp.ua/api/auth/local/register', {
                                    ...teacherData,
                                    username: username,
                                    password: password,
                                    email: email,
                                    phone: phoneNum,
                                    passport: passport,
                                    country: country,
                                    city: city,
                                    adress: adress,
                                    edu: edu,
                                    exp: exp,
                                    avatar: photo,
                                })
                                .then((res) => {
                                    console.log(res);
                                })
                                .then(() => navigation('../registrationStudentSucc'))
                                .catch((e) => {
                                    alert(e);
                                    console.log(e);
                                });
                        }
                    }}>
                    Завершить регистрацию
                </button>
            </form>
        </div>
    );
};

export default RegistrationTeacher;
