import React from 'react';
import './TeacherCalendar.scss';
import { v1 } from 'uuid';

const TeacherCalendar = ({ arr = [] }) => {
    let obj = [
        {
            date: 21,
            month: 'июнь',
            time: [true, true, true, true, true, true, true, true, true, true],
        },
        {
            date: 22,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
        {
            date: 23,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
        {
            date: 24,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
        {
            date: 25,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
        {
            date: 26,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
        {
            date: 27,
            month: 'июнь',
            time: [false, false, false, false, false, false, true, true, true, false],
        },
    ];

    return (
        <div className='teacher__calendar'>
            <div className='teacher__calendar__wr'>
                <div className='teacher__calendar_date-wr'>
                    <div className='date_cursor date_cursor_left'></div>
                    <div className='date_time-wr '>
                        <div className='date_time-wr_start '>
                            <p className='date_day'>{obj[0].date}</p>
                            <p className='date_month'>{obj[0].month}</p>
                            <p className='date_year'> 2023</p>
                        </div>
                        <p>----</p>
                        <div className='date_time-wr_end '>
                            <p className='date_day'>{obj.at(-1).date}</p>
                            <p className='date_month'>{obj.at(-1).month}</p>
                            <p className='date_year'>2023</p>
                        </div>
                    </div>
                    <div className='date_cursor date_cursor_right'></div>
                </div>
                <div className='teacher__calendar__wr-row'>
                    {obj.map((el) => (
                        <div key={v1()} className='teacher__calendar__wr_date'>
                            <p className='teacher__calendar__wr_day'>{el.date}</p>
                            <p className='teacher__calendar__wr_month'>{el.month}</p>
                        </div>
                    ))}
                    {obj.map((element) => (
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
