import React from 'react';
import './PersonData.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import InputFormContainer from '../../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../../common/Loading/Loading';
import SelectFormContainer from '../../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';

const PersonData = () => {
    const [userData, setUserData] = useState(false);
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [language, setLanguage] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

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

        setCountry(userData.country);
        setUsername(userData.username);
        setTime(userData.time);
        setLanguage(userData.lang);
        setDescription(userData.description);
    }, [
        userData.country,
        userData.username,
        userData.lang,
        userData.description,
        userData.time,
        id,
    ]);

    if (!userData) {
        <Loading></Loading>;
    }

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
        <Constructor
            leftContent={
                <>
                    <LkStatus name={username} />
                    <LkNavigation active={2} />
                </>
            }
            rightContent={
                <div className='account account__personData'>
                    <div className='personData__inputs-wr'>
                        <p className='account__title'>Личные данные</p>
                        <InputFormContainer
                            title={'Страна'}
                            setValue={setCountry}
                            ph={country || ''}></InputFormContainer>
                        <InputFormContainer
                            title={'Язык интерфейса'}
                            setValue={setLanguage}
                            ph={language || ''}></InputFormContainer>
                        <InputFormContainer
                            title={'Местное время'}
                            setValue={setTime}
                            ph={time || ''}></InputFormContainer>
                        <MainButton
                            style={{ marginTop: '30px', width: '240px' }}
                            onClick={(e) => onButtonClickHandler(e)}>
                            Сохранить изменения
                        </MainButton>
                    </div>
                    <TextareaForm
                        style={{ marginTop: '45px', flexBasis: '330px' }}
                        title={'О себе'}
                        ph={description || ''}
                        setValue={setDescription}
                        value={description}></TextareaForm>
                </div>
            }
        />
    );
};

export default PersonData;
