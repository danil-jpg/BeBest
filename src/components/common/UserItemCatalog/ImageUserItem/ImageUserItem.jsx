import React from 'react';
import './ImageUserItem.scss';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import RatingStars from '../../RatingStars/RatingStars';

const ImageUserItem = ({ photo, amountStars }) => {
    const imgSrc = `http://bebest.pp.ua${photo}`;

    return (
        <div className='image-item-catalog'>
            <div className='image-item-catalog__image-wrap'>
                <img
                    src={imgSrc}
                    alt='photo'
                    className='image-item-catalog__image'
                />
                <button className='image-item-catalog__like-btn'>
                    <IconRenderer
                        id='like'
                        className='image-item-catalog__like-icon'
                    />
                </button>
            </div>

            <RatingStars amountStars={amountStars} />

            <p className='image-item-catalog__recommend'>Рекомендуем</p>
        </div>
    );
};

export default ImageUserItem;
