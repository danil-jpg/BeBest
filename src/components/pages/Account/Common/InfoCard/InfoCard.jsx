import React from 'react';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import './InfoCard.scss';

const InfoCard = ({
    type = 'default',
    date = '28 июня 2021',
    time = '28 июня 2021',
    pupilNums = 10,
    maximumPupil = 15,
}) => {
    return (
        <div className='lesson_list'>
            <div className=''>
                <div className='lesson_list_top'>
                    <div className='lesson_list_top_inner'>
                        <IconRenderer id={'calendar'} />
                        <p>{date}</p>
                    </div>
                    {type === 'full' ? (
                        <div className='lesson_list_top_inner lesson_list_top_inner_date'>
                            <IconRenderer id={'clock'} />
                            <p>{time}</p>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className='lesson_list_prebottom'>Базовые навыки испанского языка</div>
                {type === 'full' ? (
                    <div className='lesson_list_bottom'>
                        <div className='lesson_list_bottom_item'>
                            <p className='lesson_list_bottom_item_title'>Зарегистрировались</p>
                            <p className='lesson_list_bottom_item_text'>{pupilNums} человек</p>
                        </div>
                        <div className='lesson_list_bottom_item'>
                            <p className='lesson_list_bottom_item_title'>Максимум:</p>
                            <p className='lesson_list_bottom_item_text'>{maximumPupil} человек</p>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default InfoCard;
