import React from 'react';
import './Statistics.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Loading from '../../../../common/Loading/Loading';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';

const Statistics = () => {
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

    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus name={username} />
                    <LkNavigation active={6} />
                </>
            }
            rightContent={
                <div className='account account__statistics'>
                    <p className='account__title'>Статистика</p>
                    <p className='account__statistics_subtitle'>Список преподавателей</p>
                    <div className='statistiscs-wr'>
                        <div className='statistics__card'>
                            <div className='statistics__card_left'>
                                <img
                                    src={'http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png'}
                                    className='lk__avatar_img'
                                />
                            </div>
                            <div className='statistics__card_right'>
                                <p className='statistics__name'>{username}</p>
                                <div className='statistics__inners-wr'>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество проведенных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество запланированных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                </div>
                                <div className='statistics__inner-wr_bottom'>
                                    <p className='statistics__inner_text'>
                                        Кол-во уроков, которые нужно запланировать
                                    </p>
                                    <p className='statistics__inner_text_bold'>5</p>
                                </div>
                                <div className='statistics__chat-wr_bottom'>
                                    <IconRenderer className='statistics__chat-icon' id={'chat'} />
                                    <p className='statistics__chat-text'>
                                        Начать чат с преподавателем
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='statistics__card'>
                            <div className='statistics__card_left'>
                                <img
                                    src={'http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png'}
                                    className='lk__avatar_img'
                                />
                            </div>
                            <div className='statistics__card_right'>
                                <p className='statistics__name'>{username}</p>
                                <div className='statistics__inners-wr'>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество проведенных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество запланированных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                </div>
                                <div className='statistics__inner-wr_bottom'>
                                    <p className='statistics__inner_text'>
                                        Кол-во уроков, которые нужно запланировать
                                    </p>
                                    <p className='statistics__inner_text_bold'>5</p>
                                </div>
                                <div className='statistics__chat-wr_bottom'>
                                    <IconRenderer className='statistics__chat-icon' id={'chat'} />
                                    <p className='statistics__chat-text'>
                                        Начать чат с преподавателем
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='statistics__card'>
                            <div className='statistics__card_left'>
                                <img
                                    src={'http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png'}
                                    className='lk__avatar_img'
                                />
                            </div>
                            <div className='statistics__card_right'>
                                <p className='statistics__name'>{username}</p>
                                <div className='statistics__inners-wr'>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество проведенных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                    <div className='statistics__inner'>
                                        <p className='statistics__inner_text'>
                                            Количество запланированных уроков
                                        </p>
                                        <p className='statistics__inner_text_bold'>23</p>
                                    </div>
                                </div>
                                <div className='statistics__inner-wr_bottom'>
                                    <p className='statistics__inner_text'>
                                        Кол-во уроков, которые нужно запланировать
                                    </p>
                                    <p className='statistics__inner_text_bold'>5</p>
                                </div>
                                <div className='statistics__chat-wr_bottom'>
                                    <IconRenderer className='statistics__chat-icon' id={'chat'} />
                                    <p className='statistics__chat-text'>
                                        Начать чат с преподавателем
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default Statistics;
