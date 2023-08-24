import React, {useState } from 'react';
import './PersonData.scss';
import axios from 'axios';
import InputForm from '../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import Title from '../../../UI/Title/Title';

const PersonData = ({ user }) => {
    const [country, setCountry] = useState(user.country);
    const [language, setLanguage] = useState(user.lang);
    const [time, setTime] = useState(user.time);
    const [description, setDescription] = useState(user.description ? user.description : '');

    const onButtonClickHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://bebest.pp.ua/api/users/${id}`, {
                country: country,
                lang: language,
                time: time,
                description: description,
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

        <div className='personal-data'>
            <div className='personal-data__inputs-wr'>
                <Title type='subtitle'>Личные данные</Title>
                <InputForm
                    title={'Страна'}
                    value={country}
                    setValue={setCountry}
                />
                <InputForm
                    title={'Язык интерфейса'}
                    value={language}
                    setValue={setLanguage}
                />
                <InputForm
                    title={'Местное время'}
                    value={time}
                    setValue={setTime}
                />
                <MainButton
                    style={{ marginTop: '30px', width: '240px' }}
                    onClick={(e) => onButtonClickHandler(e)}>
                    Сохранить изменения
                </MainButton>
            </div>
            <TextareaForm
                style={{flex: '0 1 330px'}}
                variant='profile'
                title={'О себе'}
                value={description}
                setValue={setDescription}
            />
        </div>
    );
};

export default PersonData;
