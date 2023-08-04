import React from 'react';
import './ArticleCard.scss';
import Picture from '../../UI/Picture/Picture';
import MainButton from '../../UI/Buttons/MainButton/MainButton';

const data = {
    titleBtn: 'Детальнее',
};

const ArticleCard = ({ image, title, text }) => {
    let imageSrc = `http://bebest.pp.ua${image}`;

    return (
        <li className='article-card'>
            <div className='article-card__image-wrap'>
                <Picture
                    img={imageSrc}
                    webp=''
                    className='article-card__image'
                />
            </div>
            <div className='article-card__body'>
                <h2 className='article-card__title'>{title}</h2>
                <p className='article-card__text'>{text}</p>
                <MainButton size='small' style={{
                    flex: '0 0 auto',
                    maxWidth: '140px'
                }}>{data.titleBtn}</MainButton>
            </div>
        </li>
    );
};

export default ArticleCard;
