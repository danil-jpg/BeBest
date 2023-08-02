import React from 'react';
import './BodyUserItem.scss';

const BodyUserItem = () => {
    return (
        <div className='body-item-catalog'>
            <div className='body-item-catalog__body-inner'>
                <h2 className='body-item-catalog__name'></h2>
                <p className='body-item-catalog__country'></p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__subtitle'></h3>
                <p className='body-item-catalog__text'></p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__subtitle'></h3>
                <p className='body-item-catalog__text'></p>
            </div>
            <div className='body-item-catalog__body-inner'>
                <h3 className='body-item-catalog__subtitle'></h3>
                <p className='body-item-catalog__text'></p>
            </div>
        </div>
    );
};

export default BodyUserItem;
