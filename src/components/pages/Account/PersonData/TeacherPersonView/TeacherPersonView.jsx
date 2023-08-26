import React, { useState } from 'react';
import '../PersonData.scss';
import axios from 'axios';
import InputForm from '../../../../UI/Forms/InputForm/InputForm';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import TextareaForm from '../../../../UI/Forms/TextareaForm/TextareaForm';
import Title from '../../../../UI/Title/Title';
import { useSelector } from 'react-redux';
import {
    addLessonLangSpeak,
    addLangSpeak,
    addAgeStudents,
    addLessonLearn,
    addLevelLearn,
    addEducation,
    addAccents,
    addProfit,
    addLessonDuration,
    selectLessonLangSpeak,
    selectLangSpeak,
    selectAgeStudents,
    selectLessonLearn,
    selectLevelLearn,
    selectEducation,
    selectAccents,
    selectProfit,
    selectLessonDuration,
} from '../../../../../store/slices/profileSlice/profileSlice';
import SelectFormWithAdd from '../../../../UI/Forms/SelectFormWithAdd/SelectFormWithAdd';
import SelectFormContainer from '../../../../UI/Forms/SelectFormContainer/SelectFormContainer';


const titles = {
    personal: 'Личные данные',
    prices: 'Стоимость уроков',
    btn: 'Сохранить изменения'
}

const titleInputs = {
    country: 'Страна',
    about: 'Обо мне',
    time: 'Местное время',
    price1: 'За 1 урок',
    price10: 'За 10 уроков',
    price5: 'За 5 уроков',
    price20: 'За 20 уроков',
}

const TeacherPersonView = ({ user }) => {
    const [country, setCountry] = useState(user.country);
    const [language, setLanguage] = useState(user.lang);
    const [price1, setPrice1] = useState('100 $');
    const [price10, setPrice10] = useState('900 $');
    const [price5, setPrice5] = useState('450 $');
    const [price20, setPrice20] = useState('1700 $');
    const [time, setTime] = useState('12:00 (GMT+3)');
    const [description, setDescription] = useState(user.description ? user.description : '');

    const selects = useSelector(state => state.profileSlice);

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
                            title={titleInputs.time}
                            value={time}
                            setValue={setTime}
                        />
                    </div>
                    <div className="personal-data__input-wrap">
                        <TextareaForm
                            style={{ flex: '0 1 330px' }}
                            variant='profile'
                            title={titleInputs.about}
                            value={description}
                            setValue={setDescription}
                            height='121px'
                        />
                    </div>
                </div>
                <div className="personal-data__selects-list">
                    <SelectFormWithAdd
                        lists={selects.lessonLangSpeak.lists}
                        title={selects.lessonLangSpeak.title}
                        setItem={selectLessonLangSpeak}
                        addItem={addLessonLangSpeak}
                    />
                    <SelectFormWithAdd
                        lists={selects.langSpeak.lists}
                        title={selects.langSpeak.title}
                        setItem={selectLangSpeak}
                        addItem={addLangSpeak}
                    />
                    <SelectFormWithAdd
                        lists={selects.ageStudents.lists}
                        title={selects.ageStudents.title}
                        setItem={selectAgeStudents}
                        addItem={addAgeStudents}
                        mb='0'
                    />
                    <SelectFormWithAdd
                        lists={selects.lessonLearn.lists}
                        title={selects.lessonLearn.title}
                        setItem={selectLessonLearn}
                        addItem={addLessonLearn}
                        mb='0'
                    />
                </div>
            </div>
            <div className="personal-data__block">
                <Title type='subtitle'>{titles.prices}</Title>
                <div className="personal-data__inputs-inner">
                    <InputForm
                        title={titleInputs.price1}
                        value={price1}
                        setValue={setPrice1}
                    />
                    <InputForm
                        title={titleInputs.price1}
                        value={price10}
                        setValue={setPrice10}
                    />
                    <InputForm
                        title={titleInputs.price1}
                        value={price5}
                        setValue={setPrice5}
                    />
                    <InputForm
                        title={titleInputs.price1}
                        value={price20}
                        setValue={setPrice20}
                    />
                    <SelectFormContainer
                        title={selects.lessonDuration.title}
                        list={selects.lessonDuration.list}
                        setItem={selectLessonDuration}
                    />
                </div>
            </div>

            <div className="personal-data__block">
                <div className="personal-data__selects-list">
                    <SelectFormWithAdd
                        title={selects.levelLearn.title}
                        lists={selects.levelLearn.lists}
                        setItem={selectLevelLearn}
                        addItem={addLevelLearn}
                    />
                    <SelectFormWithAdd
                        title={selects.education.title}
                        lists={selects.education.lists}
                        setItem={selectEducation}
                        addItem={addEducation}
                    />
                    <SelectFormWithAdd
                        title={selects.accents.title}
                        lists={selects.accents.lists}
                        setItem={selectAccents}
                        addItem={addAccents}
                    />
                    <SelectFormWithAdd
                        title={selects.profit.title}
                        lists={selects.profit.lists}
                        setItem={selectProfit}
                        addItem={addProfit}
                    />
                </div>
            </div>
            <MainButton
                style={{ marginTop: '30px', width: '240px' }}
                onClick={(e) => onButtonClickHandler(e)}>
                {titles.btn}
            </MainButton>



        </div>
    );
};

export default TeacherPersonView;
