import React, { useState } from 'react';
import './Services.scss';
import Title from '../../../UI/Title/Title';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import { useSelector } from 'react-redux';
import AdvertCard from '../../../common/AdvertCard/AdvertCard';
import Popup from '../../../UI/Popup/Popup';
import SelectFormContainer from '../../../UI/Forms/SelectFormContainer/SelectFormContainer';
import ReservationPopup from '../../../UI/Popup/ReservationPopup/ReservationPopup';

const data = {
    title: 'Услуги',
    up: 'Поднять аккаунт в ТОП',
    text: 'Укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям.',
    advert: 'Реклама профиля',
    btn: 'Поднять рейтинг',
    btnCard: 'Заказать'
}

const Services = ({ user }) => {
    const { cards, period } = useSelector(state => state.serviceSlice);
    const [showPopup, setShowPopup] = useState(false);

    const onRateBtnClickHandler = () => { setShowPopup(!showPopup) };

    return (
        <div className='services'>
            <div className="services__row">
                <Title type="subtitle" mb='20px'>{data.title}</Title>
                <h2 className="services__subtitle">{data.up}</h2>
                <p className="services__text">{data.text}</p>
                <div className="services__rating-popup-wrap">
                    <MainButton
                        size='small'
                        type='white'
                        mb='45px'
                        maxWidth='180px'
                        onClick={onRateBtnClickHandler}>
                        {data.btn}
                    </MainButton>

                    <ReservationPopup
                        show={showPopup}
                        setShow={setShowPopup}
                        left='210px'
                        top='-50px'
                        period={period}
                        maxWidth={'300px'}
                    />
                </div>

                <h2 className="services__subtitle">{data.advert}</h2>
                <p className="services__text">{data.text}</p>
                <div className="services__list">
                    {
                        cards.map(el => (
                            <AdvertCard
                                key={el.id}
                                title={el.title}
                                price={el.price}
                                titleBtn={data.btnCard}
                                maxWidth={'233px'}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
