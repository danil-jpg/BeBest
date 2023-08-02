import React from 'react';
import './ImageUserItem.scss';

const ImageUserItem = () => {
    return (
        <div className='image-item-catalog'>
            <div className='image-item-catalog__image-wrap'>
                <img src='' alt='' className='image-item-catalog__image' />
            </div>
            <ul className='image-item-catalog__rating'>
                <li className='image-item-catalog__rating-item'></li>
            </ul>
            <p className='image-item-catalog__recommend'></p>
        </div>
    );
};

export default ImageUserItem;
