import React from 'react';
import './MyLessons.scss';
import TeacherCalendar from '../../Teachers/TeacherCalendar/TeacherCalendar';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import Title from '../../../UI/Title/Title';
import InfoCard from '../Common/InfoCard/InfoCard';
import { v1 } from 'uuid';

const MyLessons = ({ user }) => {
    const someCardsData = [{}, {}, {}];

    return (
        <div className='account account__lessons'>
            <Title type='subtitle'>Мои уроки</Title>

            <TeacherCalendar title={false} book={false} />

            <div className='account__lessons_lists'>
                <p className='lessons_list_title'>
                    Список оплаченных и зарезервированных пробных уроков
                </p>
                <div className='lesson_list'>
                    <div className='lesson_list_left'>
                        <img src='http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png' />
                    </div>
                    <div className='lesson_list_right'>
                        <div className='lesson_list_top'>
                            <IconRenderer id={'clock'} />
                            <p>12:35 pm, 28 июня 2023</p>
                        </div>
                        <div className='lesson_list_bottom'>Алексей Кузьменко Андреевич</div>
                    </div>
                </div>
                <div className='lesson_list'>
                    <div className='lesson_list_left'>
                        <img src='http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png' />
                    </div>
                    <div className='lesson_list_right'>
                        <div className='lesson_list_top'>
                            <IconRenderer id={'clock'} />
                            <p>12:35 pm, 28 июня 2023</p>
                        </div>
                        <div className='lesson_list_bottom'>Алексей Кузьменко Андреевич</div>
                    </div>
                </div>
            </div>
            <div className='account__lessons_group'>
                <p className='lessons_list_title'>Список групповых занятий</p>
                {someCardsData.map(() => (
                    <InfoCard type='full' key={v1()}></InfoCard>
                ))}
            </div>
        </div>
    );
};

export default MyLessons;
