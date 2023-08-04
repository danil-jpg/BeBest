import React from 'react';
import './ArticleCard.scss';
import Picture from '../../UI/Picture/Picture';
import MainButton from '../../UI/Buttons/MainButton/MainButton';

const data = {
    titleBtn: 'Детальнее',
};

const ArticleCard = ({ state }) => {
    return (
        <li className='article-card'>
            <div className='article-card__image-wrap'>
                <Picture img='' webp='' className='article-card__image' />
            </div>
            <div className='article-card__body'>
                <h2 className='article-card__title'></h2>
                <p className='article-card__text'></p>
                <MainButton size='small'>{data.titleBtn}</MainButton>
            </div>
        </li>
    );
};
