import React from 'react';
import './Statistics.scss';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import Title from '../../../UI/Title/Title';
import StatisticCard from '../Common/StatisticCard/StatisticCard';
import { v1 } from 'uuid';

const Statistics = ({ personArr }) => {
    return (
        <div className='account account__statistics'>
            <Title type='subtitle'>Статистика</Title>
            <p className='account__statistics_subtitle'>Список преподавателей</p>
            <div className='statistiscs-wr'>
                {personArr.map((el) => (
                    <StatisticCard key={v1()} personArr={el} />
                ))}
            </div>
        </div>
    );
};

export default Statistics;
