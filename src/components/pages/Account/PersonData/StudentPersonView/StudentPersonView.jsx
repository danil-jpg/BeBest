import React, { useState } from 'react';
import '../PersonData.scss';
import axios from 'axios';
import InputForm from '../../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import Title from '../../../../UI/Title/Title';

const titles = {
    personal: 'Личные данные',
    prices: 'Стоимость уроков',
    btn: 'Сохранить изменения'
}

const titleInputs = {
    country: 'Страна',
    about: 'Обо мне',
    lang: 'Язык интерфейса',
    time: 'Местное время',
}

const StudentPersonView = ({ user }) => {
    const [country, setCountry] = useState(user.country);
    const [language, setLanguage] = useState(user.lang);
    const [time, setTime] = useState(user.time);
    const [description, setDescription] = useState(user.description ? user.description : '');

    const onButtonClickHandler = (e) => {
        let id = sessionStorage.getItem('id')
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
            <div className="personal-data__block">
                <Title type='subtitle'>{titles.personal}</Title>
                <div className="personal-data__inputs-inner">
                    <div className="personal-data__input-wrap">
                        <InputForm
                            title={titleInputs.country}
                            value={country}
                            setValue={setCountry}
                        />
                        <InputForm
                            title={titleInputs.lang}
                            value={language}
                            setValue={setLanguage}
                        />
                        <InputForm
                            title={titleInputs.time}
                            value={time}
                            setValue={setTime}
                        />
                    </div>
                    <TextareaForm
                        style={{ flex: '0 1 330px' }}
                        height='189px'
                        variant='profile'
                        title={titleInputs.about}
                        value={description}
                        setValue={setDescription}
                    />
                    <MainButton
                        style={{ marginTop: '30px', width: '240px' }}
                        onClick={(e) => onButtonClickHandler(e)}>
                        {titles.btn}
                    </MainButton>
                </div>
            </div>
        </div>
    );
};

export default StudentPersonView;
