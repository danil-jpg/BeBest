import React, {useState } from 'react';
import '../PersonData.scss';
import axios from 'axios';
import InputForm from '../../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import Title from '../../../../UI/Title/Title';

const CompanyPersonView = ({ user }) => {
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
            company
        </div>
    );
};

export default CompanyPersonView;
