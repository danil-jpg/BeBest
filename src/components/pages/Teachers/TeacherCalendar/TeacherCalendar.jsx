import React, { useEffect, useRef, useState } from 'react';
import './TeacherCalendar.scss';
import { v1 } from 'uuid';
import axios from 'axios';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import CalendarBooking from './CalendarBooking/CalendarBooking';
import useFetch from '../../../../utils/useFetch';

const TeacherCalendar = () => {
    let [weekCounter, setWeekCounter] = useState(0);

    const obj = useFetch('calendars/');

    return (
        <div className='teacher__calendar'>
            <p className='teacher__calendar__title'>Расписание</p>
            <div className='teacher__calendar__wr'>
                <div className='teacher__calendar_date-wr'>
                    <div
                        className='date_cursor date_cursor_left'
                        onClick={() => setWeekCounter(0)}></div>
                    <div className='date_time-wr '>
                        <div className='date_time-wr_start '>
                            <p className='date_day'>
                                {obj?.data?.data[weekCounter].attributes.data[0].date}
                            </p>
                            <p className='date_month'>
                                {obj?.data?.data[0].attributes.data[weekCounter].month}
                            </p>
                            <p className='date_year'> 2023</p>
                        </div>
                        <p>-</p>
                        <div className='date_time-wr_end '>
                            <p className='date_day'>
                                {obj?.data?.data[weekCounter].attributes.data.at(-1).date}
                            </p>
                            <p className='date_month'>
                                {obj?.data?.data[weekCounter].attributes.data.at(-1).month}
                            </p>
                            <p className='date_year'>2023</p>
                        </div>
                    </div>
                    <div
                        className='date_cursor date_cursor_right'
                        onClick={() => setWeekCounter(1)}></div>
                </div>
                <div className='teacher__calendar__calendar-wr'>
                    <div className='teacher__calendar__calendar_subtime'>
                        <p className='teacher__calendar_subtitle-text'>08:00</p>
                        <p className='teacher__calendar_subtitle-text'>09:00</p>
                        <p className='teacher__calendar_subtitle-text'>10:00</p>
                        <p className='teacher__calendar_subtitle-text'>11:00</p>
                        <p className='teacher__calendar_subtitle-text'>12:00</p>
                        <p className='teacher__calendar_subtitle-text'>13:00</p>
                        <p className='teacher__calendar_subtitle-text'>14:00</p>
                        <p className='teacher__calendar_subtitle-text'>15:00</p>
                        <p className='teacher__calendar_subtitle-text'>16:00</p>
                        <p className='teacher__calendar_subtitle-text'>17:00</p>
                    </div>
                    <div className='teacher__calendar__wr-row'>
                        {obj?.data?.data[weekCounter].attributes.data.map((el) => (
                            <div key={v1()} className='teacher__calendar__wr_date'>
                                <p className='teacher__calendar__wr_day'>{el.date}</p>
                                <p className='teacher__calendar__wr_month'>{el.month}</p>
                            </div>
                        ))}
                        {obj?.data?.data[weekCounter].attributes.data.map((element) => (
                            <div className='teacher__calendar__wr_column' key={v1()}>
                                {element.time.map((el, index) => (
                                    <CalendarBooking
                                        el={el}
                                        date={element.date}
                                        month={element.month}
                                        key={v1()}
                                        index={index + 8}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherCalendar;
