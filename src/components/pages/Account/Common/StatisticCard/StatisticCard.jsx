import React from 'react';
import './StatisticCard.scss';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';

const StatisticCard = ({ personArr }) => {
    return (
        <div className='statistics__card'>
            <div className='statistics__card_left'>
                <img
                    src={'http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png'}
                    className='lk__avatar_img'
                />
            </div>
            <div className='statistics__card_right'>
                <p className='statistics__name'>{personArr.name}</p>
                <div className='statistics__inners-wr'>
                    <div className='statistics__inner'>
                        <p className='statistics__inner_text'>Количество проведенных уроков</p>
                        <p className='statistics__inner_text_bold'>{personArr.lessons}</p>
                    </div>
                    <div className='statistics__inner'>
                        <p className='statistics__inner_text'>Количество запланированных уроков</p>
                        <p className='statistics__inner_text_bold'>{personArr.futureLessons}</p>
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
                    <p className='statistics__chat-text'>Начать чат с преподавателем</p>
                </div>
            </div>
        </div>
    );
};

export default StatisticCard;
