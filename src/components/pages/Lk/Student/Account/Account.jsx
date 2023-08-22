import React from 'react';
import './Account.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import InputFormContainer from '../../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../../common/Loading/Loading';

const Student = () => {
    const [userData, setUserData] = useState(false);

    const [username, setUsername] = useState('not set');
    const [email, setEmail] = useState('not set');
    const [phone, setPhone] = useState('not set');

    const id = window.sessionStorage.getItem('id');

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`http://bebest.pp.ua/api/users/${id}`)
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((e) => console.log(e.message));
        };

        fetchData();

        setPhone(userData.phone);
        setUsername(userData.username);
        setEmail(userData.email);
    }, [id, userData.username, userData.email, userData.phone]);

    if (!userData) {
        <Loading></Loading>;
    }

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
    console.log(username);
    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus />
                    <LkNavigation />
                </>
            }
            rightContent={
                <div className='account account__student'>
                    <p className='account__title'>Аккаунт</p>
                    <div className='account__delete-wr'>
                        <InputFormContainer
                            title={'Логин'}
                            ph={username || ''}
                            setValue={setUsername}></InputFormContainer>
                        <p>Удалить аккаунт</p>
                    </div>
                    <InputFormContainer title={'Пароль'}></InputFormContainer>
                    <InputFormContainer
                        title={'E-mail'}
                        setValue={setEmail}
                        ph={email || ''}></InputFormContainer>
                    <InputFormContainer
                        title={'Телефон'}
                        ph={phone || ''}
                        setValue={setPhone}></InputFormContainer>
                    <MainButton onClick={(e) => onButtonClickHandler(e)}>
                        Сохранить изменения
                    </MainButton>
                </div>
            }
        />
    );
};

export default Student;
