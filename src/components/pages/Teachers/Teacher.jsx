import React, { useEffect, useRef } from 'react';
import './Teacher.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Picture from '../../UI/Picture/Picture';
import { IconRenderer } from '../../UI/IconRenderer/IconRenderer';
import quotes from '../../../assets/images/teacher/quote.png';
import quotesWebp from '../../../assets/images/teacher/quote.png?as=webp';
import Calendar from '@event-calendar/core';
import TimeGrid from '@event-calendar/time-grid';
import TeacherGreet from './TeacherGreet/TeacherGreet';
import { Link } from 'react-router-dom';
import '@event-calendar/core/index.css';
import TeacherPosibility from './TeacherPosibility/TeacherPosibility';
import TeacherCv from './TeacherCv/TeacherCv';
import TeacherMarks from './TeacherMarks/TeacherMarks';
import TeacherLesson from './TeacherLessons/TeacherLesson';

const Teacher = (props) => {
    const ref = useRef();
    useEffect(() => {
        let ec = new Calendar({
            target: ref.current,
            props: {
                plugins: [TimeGrid],
                options: {
                    view: 'timeGridWeek',
                    allDaySlot: false,
                    dayHeaderFormat: function (date) {
                        return `${date.getDate()} ${date.toLocaleString('default', {
                            month: 'long',
                        })}`;
                    },
                    // buttonText: 'xxx',
                    // без понятия за что оно отвечает
                    // displayEventEnd: false,
                    // duration: { weeks: 2 },
                    // без понятия за что оно отвечает
                    eventBackgroundColor: 'rgba(225, 238, 252, 1)',
                    eventClick: function (info) {
                        alert('Click!');
                    },
                    // не работает
                    height: '100%',
                    // lazyFetching: ""
                    // !!!!!!!!!!!!!!!!!!!!!!
                    // Это нужно для страпи потом
                    // !!!!!!!!!!!!!!!!!!!!!!
                    listDayFormat: { weekday: 'long' },
                    // listDaySideFormat: { year: 'numeric', month: 'short', day: 'numeric' },
                    // Не работает
                    loading: function (isLoading) {
                        console.log('...loading');
                    },
                    slotDuration: '01:00:00',
                    slotMaxTime: '21:00:00',
                    slotMinTime: '07:00:00',
                    slotHeight: 30,
                    titleFormat: { year: 'numeric', month: 'long', day: 'numeric' },
                    headerToolbar: { start: 'prev', center: 'title', end: 'next' },
                    events: [
                        // your list of events
                    ],
                },
            },
        });
    }, []);

    return (
        <div className='teacher'>
            <div className='teacher__background'></div>
            <div className='teacher__background2'></div>
            <ContainerMain>
                <div className='teacher__body'>
                    <div className='teacher__body__left'>
                        <TeacherGreet />
                        <div className='teacher__about'>
                            <p className='teacher__about_title'>Обо мне</p>
                            <div className='teacher__about_text-wr'>
                                <div className='teacher__about_text_left'>
                                    <Picture img={quotes} webp={quotesWebp} />
                                </div>
                                <div className='teacher__about_text_right'>
                                    <p className='teacher__about_text'>
                                        Укрепление и развитие структуры позволяет выполнять важные
                                        задания по разработке системы обучения кадров, соответствует
                                        насущным потребностям. Таким образом реализация намеченных
                                        плановых заданий способствует подготовки и реализации модели
                                        развития. Идейные соображения высшего порядка, а также
                                        консультация с широким активом способствует подготовки и
                                        реализации модели развития.
                                    </p>
                                    <Link to={''} className='teacher__about_translate'>
                                        Перевести текст
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='ec ' ref={ref}></div>
                        <TeacherPosibility />
                        <TeacherCv />
                        {/* <TeacherMarks /> */}
                    </div>
                    <div className='teacher__body__right'>
                        <TeacherLesson />
                    </div>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Teacher;
