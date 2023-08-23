import React from 'react';
import './Payment.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import InputFormContainer from '../../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../../common/Loading/Loading';
import Picture from '../../../../UI/Picture/Picture';
import visa from '../../../../../assets/images/Lk/visa.png';
import visaW from '../../../../../assets/images/Lk/visa.png?as=webp';

const Payment = () => {
    const [userData, setUserData] = useState(false);

    const [cardNum, setCardNum] = useState('1111 1111 1111 1111');
    const [cardName, setCardName] = useState();
    const [date, setDate] = useState();
    const [cvv, setCvv] = useState();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const id = window.sessionStorage.getItem('id');

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`http://bebest.pp.ua/api/users/${id}`)
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((e) => console.log(e.message));
        };

        fetchData();

        setPhone(userData.phone);
        setUsername(userData.username);
        setEmail(userData.email);
    }, [id, userData.username, userData.email, userData.phone]);

    if (!userData) {
        <Loading></Loading>;
    }

    const onButtonClickHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus name={username} />
                    <LkNavigation active={5} />
                </>
            }
            rightContent={
                <div className='account account__payment'>
                    <p className='account__title'>Платежная информация</p>
                    <p className='account__subTitle'>Список привязанных карт</p>
                    <div className='payment__card'>
                        <Picture webp={visaW} img={visa} className='payment__card_img' />
                        <div>
                            <p className='card__name'>Visa Classic</p>
                            <p className='card__num'>{cardNum.slice(4, -10)}</p>
                        </div>
                    </div>
                    <form className='payment__form'>
                        <p className='payment__title'>Добавить карту</p>
                        <InputFormContainer
                            title={'Номер карты'}
                            value={cardNum.length < 18 ? cardNum : cardNum.slice(0, 17)}
                            setValue={setCardNum}></InputFormContainer>
                        <InputFormContainer
                            title={'Владелец карты'}
                            value={cardName}
                            setValue={setCardName}></InputFormContainer>
                        <div className='payment__bottom-wr'>
                            <InputFormContainer
                                title={'Срок действия карты'}
                                value={date}
                                setValue={setDate}></InputFormContainer>
                            <InputFormContainer
                                value={cvv}
                                setValue={setCvv}
                                style={{ flexShrink: '4', marginLeft: '25px' }}
                                title={'CVV'}></InputFormContainer>
                        </div>
                        <div className='payment__save_wr'>
                            <MainButton
                                style={{ width: '172px' }}
                                onClick={(e) => onButtonClickHandler(e)}>
                                Привязать
                            </MainButton>
                            <p className='payment__save_cancel'>Отмена</p>
                        </div>
                    </form>
                </div>
            }
        />
    );
};

export default Payment;
