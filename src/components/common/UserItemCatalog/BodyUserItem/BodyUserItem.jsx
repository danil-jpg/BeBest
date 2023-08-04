import React from 'react';
import './BodyUserItem.scss';

const titles = {
    langLesson: 'Язык обучения',
    langSpeak: 'Языки общения',
    amountStudent: 'Кол-во учеников',
    amountLessons: 'Кол-во проведенных уроков',
};

const BodyUserItem = ({
    name,
    country,
    CommunicationLang,
    lang,
    amountStudent,
    amountLessons,
}) => {
    return (
        <div className='body-item-catalog'>
            <div className='body-item-catalog__body-inner body-item-catalog__body-inner_name'>
                <h2 className='body-item-catalog__name'>{name}</h2>
                <p className='body-item-catalog__country'>{country}</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>
                    {titles.langLesson}
                </h3>
                <p className='body-item-catalog__text'>{lang}</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>{titles.langSpeak}</h3>
                <p className='body-item-catalog__text'>{CommunicationLang}</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>
                    {titles.amountStudent}
                </h3>
                <p className='body-item-catalog__text'>{amountStudent}</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>
                    {titles.amountLessons}
                </h3>
                <p className='body-item-catalog__text'>{amountLessons}</p>
            </div>
        </div>
    );
};

export default BodyUserItem;
