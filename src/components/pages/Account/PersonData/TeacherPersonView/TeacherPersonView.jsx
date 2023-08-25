import React, { useState } from 'react';
import '../PersonData.scss';
import axios from 'axios';
import InputForm from '../../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import Title from '../../../../UI/Title/Title';
import SelectFormContainer from '../../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import { useSelector } from 'react-redux';
import { selectLessonLangSpeak, addLessonLangSpeak, addLangSpeak, addAgeStudents, addLessonLearn } from '../../../../../store/slices/profileSlice/profileSlice';
import { useDispatch } from 'react-redux';

const TeacherPersonView = ({ user }) => {
    const [country, setCountry] = useState(user.country);
    const [language, setLanguage] = useState(user.lang);
    const [time, setTime] = useState(user.time);
    const [description, setDescription] = useState(user.description ? user.description : '');

    const selects = useSelector(state => state.profileSlice);
    console.log(selects.lessonLangSpeak.lists)
    const dispatch = useDispatch();
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
            <Title type='subtitle'>Личные данные</Title>
            <div className="personal-data__block">
                <div className="personal-data__inputs-inner">
                    <div className="personal-data__input-wrap">
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
                    </div>
                    <div className="personal-data__input-wrap">
                        <TextareaForm
                            style={{ flex: '0 1 330px' }}
                            variant='profile'
                            title={'О себе'}
                            value={description}
                            setValue={setDescription}
                            height='121px'
                        />
                    </div>
                </div>
                <div className="personal-data__selects-list">
                    <div className="personal-data__selects-wrap">
                        {
                            selects.lessonLangSpeak.lists.map((list, index) => (
                                <SelectFormContainer
                                    key={index}
                                    list={list}
                                    setItem={selectLessonLangSpeak}
                                />
                            ))
                        }
                        <button onClick={() => { dispatch(addLessonLangSpeak()) }}>add</button>
                    </div>
                    <div className="personal-data__selects-wrap">
                        {
                            selects.langSpeak.lists.map((list, index) => (
                                <SelectFormContainer
                                    key={index}
                                    list={list}
                                    setItem={selectLessonLangSpeak}
                                />
                            ))
                        }
                        <button onClick={() => { dispatch(addLangSpeak()) }}>add</button>
                    </div><div className="personal-data__selects-wrap">
                        {
                            selects.ageStudents.lists.map((list, index) => (
                                <SelectFormContainer
                                    key={index}
                                    list={list}
                                    setItem={selectLessonLangSpeak}
                                />
                            ))
                        }
                        <button onClick={() => { dispatch(addAgeStudents()) }}>add</button>
                    </div><div className="personal-data__selects-wrap">
                        {
                            selects.lessonLearn.lists.map((list, index) => (
                                <SelectFormContainer
                                    key={index}
                                    list={list}
                                    setItem={selectLessonLangSpeak}
                                />
                            ))
                        }
                        <button onClick={() => { dispatch(addLessonLearn()) }}>add</button>
                    </div>
                </div>
            </div>
            <MainButton
                style={{ marginTop: '30px', width: '240px' }}
                onClick={(e) => onButtonClickHandler(e)}>
                Сохранить изменения
            </MainButton>



        </div>
    );
};

export default TeacherPersonView;
