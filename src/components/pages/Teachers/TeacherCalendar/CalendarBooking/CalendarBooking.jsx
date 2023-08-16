import React from 'react';
import { useState } from 'react';
import { v1 } from 'uuid';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';

const CalendarBooking = ({ el, date, month, index }) => {
    let [booking, setBooking] = useState(false);
    return (
        <div>
            <div
                onClick={(e) => {
                    if (el === true) {
                        setBooking(true);
                    } else {
                        alert('Время занято');
                    }
                }}
                className={
                    el === true
                        ? ' teacher__calendar__wr_item_filled'
                        : 'teacher__calendar__wr_item'
                }
                key={v1()}></div>
            <div
                className={`teacher__calendar__wr_item_booking ${
                    booking
                        ? 'teacher__calendar__wr_item_booking_active'
                        : 'teacher__calendar__wr_item_booking_hidden'
                }`}>
                <div
                    className='calendar__row'
                    onClick={() => (el === true ? setBooking(false) : '')}>
                    <p className='calendar__close'>X</p>
                </div>
                <div className='calendar__row'>
                    <p className='row_date_text'>Дата:</p>
                    <p className='row_date_date'>{`${date} ${month}`}</p>
                </div>
                <div className='calendar__row'>
                    <p className='row_date_text'>Время начала: </p>
                    <p className='row_date_date'>{index}</p>
                </div>
                <div className='calendar__row'>
                    <p className='row_date_text'>Стоимость:</p>
                    <p className='row_date_date'>120$</p>
                </div>
                <MainButton style={{ marginTop: '22px' }}>Заборнировать урок</MainButton>
            </div>
        </div>
    );
};

export default CalendarBooking;
