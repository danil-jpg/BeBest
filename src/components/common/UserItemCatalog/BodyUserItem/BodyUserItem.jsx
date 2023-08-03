import React from 'react';
import './BodyUserItem.scss';

const BodyUserItem = () => {
    return (
        <div className='body-item-catalog'>
            <div className='body-item-catalog__body-inner body-item-catalog__body-inner_name'>
                <h2 className='body-item-catalog__name'>
                    Анна Михайлова
                </h2>
                <p className='body-item-catalog__country'>
                    Украина
                </p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>Язык обучения</h3>
                <p className='body-item-catalog__text'>испанский</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>Языки общения</h3>
                <p className='body-item-catalog__text'>
                    английский, голландский, китайский
                </p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>Кол-во учеников</h3>
                <p className='body-item-catalog__text'>15</p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__title'>
                    Кол-во проведенных уроков
                </h3>
                <p className='body-item-catalog__text'>34</p>
            </div>
        </div>
    );
};

export default BodyUserItem;
