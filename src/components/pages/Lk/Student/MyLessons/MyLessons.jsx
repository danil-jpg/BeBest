import React from 'react';
import './MyLessons.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import InputFormContainer from '../../../../UI/Forms/InputFormContainer/InputFormContainer';
import MainButton from '../../../../UI/Buttons/MainButton/MainButton';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../../common/Loading/Loading';
import TeacherCalendar from '../../../Teachers/TeacherCalendar/TeacherCalendar';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';

const MyLessons = () => {
    const [userData, setUserData] = useState(false);

    const [username, setUsername] = useState('');

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

        setUsername(userData.username);
    }, [id, userData.username]);

    if (!userData) {
        <Loading></Loading>;
    }

    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus name={username} />
                    <LkNavigation active={3} />
                </>
            }
            rightContent={
                <div className='account account__lessons'>
                    <p className='account__title'>Мои уроки</p>
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
                                <div className='lesson_list_bottom'>
                                    Алексей Кузьменко Андреевич
                                </div>
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
                                <div className='lesson_list_bottom'>
                                    Алексей Кузьменко Андреевич
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='account__lessons_group'>
                        <p className='lessons_list_title'>Список групповых занятий</p>
                        <div className='lesson_list'>
                            <div className='lesson_list_right'>
                                <div className='lesson_list_top'>
                                    <IconRenderer id={'calendar'} />
                                    <p>28 июня 2021</p>
                                </div>
                                <div className='lesson_list_bottom'>
                                    Базовые навыки испанского языка
                                </div>
                            </div>
                        </div>
                        <div className='lesson_list'>
                            <div className='lesson_list_right'>
                                <div className='lesson_list_top'>
                                    <IconRenderer id={'calendar'} />
                                    <p>28 июня 2021</p>
                                </div>
                                <div className='lesson_list_bottom'>
                                    Базовые навыки испанского языка
                                </div>
                            </div>
                        </div>
                        <div className='lesson_list'>
                            <div className='lesson_list_right'>
                                <div className='lesson_list_top'>
                                    <IconRenderer id={'calendar'} />
                                    <p>28 июня 2021</p>
                                </div>
                                <div className='lesson_list_bottom'>
                                    Базовые навыки испанского языка
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default MyLessons;
