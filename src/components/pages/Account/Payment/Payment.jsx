import React from 'react';
import './Payment.scss';
import InputFormContainer from '../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../common/Loading/Loading';
import Picture from '../../../UI/Picture/Picture';
import visa from '../../../../assets/images/Lk/visa.png';
import visaW from '../../../../assets/images/Lk/visa.png?as=webp';
import { v1 } from 'uuid';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';

const Payment = () => {
    const [cardNum, setCardNum] = useState('1111 1111 1111 1111');
    const [cardName, setCardName] = useState('3213213123');
    const [date, setDate] = useState('3213213123');
    const [cvv, setCvv] = useState('3213213123');

    const [formVisibility, setFormVisibility] = useState(false);
    const [createFormBtn, setCreateFormBtn] = useState(true);

    const [cardsArr, setCardArr] = useState([]);

    const onSubmitButtonClickHandler = (e) => {
        if (cardNum && cardName && date && cvv) {
            setCardArr((prev) => [...prev, { cardNum, id: v1() }]);
            setCreateFormBtn(true);
            setFormVisibility(false);
        }
    };

    const onCreateButtonClickHandler = (e) => {
        setCreateFormBtn(false);
        setFormVisibility(true);
    };

    return (
        <div className='account account__payment'>
            <p className='account__title'>Платежная информация</p>
            <p className='account__subTitle'>Список привязанных карт</p>
            {
                cardsArr.map((el) => (
                    <div key={el.id} className='payment__card'>
                        <Picture webp={visaW} img={visa} className='payment__card_img' />
                        <div>
                            <p className='card__name'>Visa Classic</p>
                            <p className='card__num'>{`**** ${el.cardNum.slice(
                                4,
                                -10
                            )}`}</p>
                            <div
                                className='payment__card_del'
                                onClick={() => {
                                    setCardArr((prev) => [
                                        ...prev.filter(
                                            (innerElem) => innerElem.id !== el.id
                                        ),
                                    ]);
                                }}>
                                <IconRenderer id={'trashCan'} />
                                <p className='payment__card_del_text'>Удалить</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            <MainButton
                style={
                    createFormBtn
                        ? { width: '240px', marginTop: '30px' }
                        : { display: 'none' }
                }
                onClick={() => onCreateButtonClickHandler()}>
                Добавить карту
            </MainButton>
            <form className={formVisibility ? 'payment__form' : 'payment__form hidden'}>
                <p className='payment__title'>Добавить карту</p>
                <InputFormContainer
                    title={'Номер карты'}
                    value={cardNum.length < 18 ? cardNum : cardNum.slice(0, 17)}
                    setValue={setCardNum}></InputFormContainer>
                <InputFormContainer
                    title={'Владелец карты'}
                    value={cardName || ''}
                    setValue={setCardName}></InputFormContainer>
                <div className='payment__bottom-wr'>
                    <InputFormContainer
                        title={'Срок действия карты'}
                        value={date || ''}
                        setValue={setDate}></InputFormContainer>
                    <InputFormContainer
                        value={cvv || ''}
                        setValue={setCvv}
                        style={{ flexShrink: '4', marginLeft: '25px' }}
                        title={'CVV'}></InputFormContainer>
                </div>
                <div className='payment__save_wr'>
                    <MainButton
                        style={{ width: '172px' }}
                        onClick={(e) => onSubmitButtonClickHandler(e)}>
                        Привязать
                    </MainButton>
                    <p className='payment__save_cancel'>Отмена</p>
                </div>
            </form>
        </div>
    );
};

export default Payment;
