import React from 'react';
import './TeacherLesson.scss';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';

const TeacherLesson = () => {
    return (
        <div className='teacher__lessons'>
            <div className='teacher__trial'>
                <p className='teacher__trial_text'>Пробный урок</p>
                <div className='teacher__trial__row'>
                    <p className='teacher__trial__row_text'>Длительность урока</p>
                    <p className='teacher__trial__row_num'>1,5 часа</p>
                </div>
                <div className='teacher__trial__row'>
                    <p className='teacher__trial__row_text'>Стоисмость курса</p>
                    <p className='teacher__trial__row_num'>1000 $ </p>
                </div>
                <MainButton type='middle' style={{ marginTop: '17px' }}>
                    Забронировать
                </MainButton>
            </div>
            <div className='teacher__trial'>
                <p className='teacher__trial_text'>Индивидуальный урок</p>
                <div className='teacher__trial__row'>
                    <RadioForm />
                </div>
                <div className='teacher__trial__row'>
                    <p className='teacher__trial__row_text'>Стоисмость курса</p>
                    <p className='teacher__trial__row_num'>1000 $ </p>
                </div>
                <MainButton type='middle' style={{ marginTop: '17px' }}>
                    Забронировать
                </MainButton>
            </div>
        </div>
    );
};

export default TeacherLesson;
