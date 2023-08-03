import React, { useEffect, useState } from 'react';
import './ImageUserItem.scss';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import { v1 } from 'uuid';

let defaultStarList = [
    {
        id: v1(),
        selected: false,
    },
    {
        id: v1(),
        selected: false,
    },
    {
        id: v1(),
        selected: false,
    },
    {
        id: v1(),
        selected: false,
    },
    {
        id: v1(),
        selected: false,
    },
];

const ImageUserItem = ({ photo, amountStars }) => {
    let [starList, setStarList] = useState([]);

    useEffect(() => {
        let resList = [...defaultStarList];

        resList.forEach((el, index) => {
            if (++index < amountStars) {
                el.selected = true;
            }
        });

        setStarList([...resList]);
    }, []);

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
                {starList?.map((el, index) => (
                    <IconRenderer
                        id='yellowStar'
                        key={el.id}
                        className={`image-item-catalog__star ${
                            amountStars > index ? 'selected' : ''
                        }`}
                    />
                ))}
            </div>
            <p className='image-item-catalog__recommend'>Рекомендуем</p>
        </div>
    );
};

export default ImageUserItem;
