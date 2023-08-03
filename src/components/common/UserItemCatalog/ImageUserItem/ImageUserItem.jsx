import React, { useEffect, useState } from 'react';
import './ImageUserItem.scss';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import { v1 } from 'uuid';
import { isActive } from '../../../../utils/isActive';
import { useDispatch, useSelector } from 'react-redux';

const ImageUserItem = ({ photo, amountStars }) => {
    const [starList, setStarList] = useState(
        useSelector((state) => state.catalogSlice.stars)
    );
    
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
            <div className='image-item-catalog__rating'>
                {starList?.map((el) => (
                    <IconRenderer
                        id='star'
                        key={el.id}
                        className={`image-item-catalog__star ${isActive(
                            el.selected,
                            'selected'
                        )}`}
                    />
                ))}
            </div>
            <p className='image-item-catalog__recommend'>Рекомендуем</p>
        </div>
    );
};

export default ImageUserItem;
