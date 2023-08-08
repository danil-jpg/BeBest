import React, { useEffect, useState } from 'react';
import './TeacherCalendar.scss';
import { v1 } from 'uuid';
import axios from 'axios';

const TeacherCalendar = () => {
    const [obj, setObj] = useState('');
    let [weekCounter, setWeekCounter] = useState(0);

    const fetchData = async () => {
        const res = await axios
            .get('http://bebest.pp.ua/api/calendars/')
            .then((res) => setObj(res));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(obj?.data?.data[weekCounter].attributes.data);
    return (
        <div className='teacher__calendar'>
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
                        <p>----</p>
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
                                <div
                                    onClick={() => {
                                        if (el === true) {
                                            alert(index + 8);
                                        } else {
                                            alert(index + 8);
                                        }
                                    }}
                                    className={
                                        el === true
                                            ? ' teacher__calendar__wr_item_filled'
                                            : 'teacher__calendar__wr_item'
                                    }
                                    key={v1()}>
                                    {el.time}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeacherCalendar;
