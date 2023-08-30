import React, { useEffect, useRef, useState } from 'react';
import './AdvertCard.scss';
import MainButton from '../../UI/Buttons/MainButton/MainButton';
import PropTypes from 'prop-types';

const AdvertCard = ({ title, price, titleBtn, style, maxWidth }) => {
    const [tooltip, setTooltip] = useState(false);

    console.log(tooltip);
    let styles = {
        ...style,
        maxWidth,
    }

    return (
        <div className='advert-card' style={styles}>
            <h2 className="advert-card__title">{title}</h2>
            <p className="advert-card__price">{`${price} $`}</p>

            <MainButton
                size='small'
                isTooltip={tooltip}
                setTooltip={setTooltip}
            >{titleBtn}</MainButton>

            <p className={`${tooltip ? 'advert-card__tooltip active' : 'advert-card__tooltip'}`}>
                Ваша публичная страница будет отображаться в рекламном блоке
                <span className='advert-card__tooltip-title'>{` "${title}" `}</span> на 7 дней”
            </p>
        </div>
    );
};

AdvertCard.propTypes = {
    // image: PropTypes.string,
    // title: PropTypes.string,
    // text: PropTypes.string,
    // maxWidth: PropTypes.string,
    // style: PropTypes.object
};

export default AdvertCard;
