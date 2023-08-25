import React from 'react';
import '../Statistics.scss';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import Title from '../../../../UI/Title/Title';

const StudentStatisticsView = ({ user }) => {
    return (
        <div className='account account__statistics'>
            <Title type="subtitle">Статистика</Title>
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
                        <p className='statistics__name'>{user.username}</p>
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
                        <p className='statistics__name'>{user.username}</p>
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
                        <p className='statistics__name'>{user.username}</p>
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
    );
};

export default StudentStatisticsView;
