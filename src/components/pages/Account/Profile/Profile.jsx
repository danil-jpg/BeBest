import React from 'react';
import './Profile.scss';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import InputForm from '../../../UI/Forms/InputForm/InputForm';
import Loading from '../../../common/Loading/Loading';
import Title from '../../../UI/Title/Title';

const Profile = ({ user }) => {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');

    const id = window.sessionStorage.getItem('id');

    const onButtonClickHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://bebest.pp.ua/api/users/${id}`, {
                username: username,
                email: email,
                phone: phone,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                alert(e.message);
                console.log(e.message);
            });
    };

    return (
        <div className='profile'>
            <Title type='subtitle'>Аккаунт</Title>
            <InputForm
                title={'Логин'}
                value={username}
                setValue={setUsername}
            />
            <InputForm
                title={'Пароль'}
                value={pass}
                setValue={setPass}
                type={'password'}
            />
            <InputForm
                title={'E-mail'}
                value={email}
                setValue={setEmail}
            />
            <InputForm
                title={'Телефон'}
                value={phone}
                setValue={setPhone}
            />
            <MainButton
                style={{ marginTop: '30px' }}
                maxWidth='240px'
                onClick={(e) => onButtonClickHandler(e)}>
                Сохранить изменения
            </MainButton>
        </div>
    );
};

export default Profile;
