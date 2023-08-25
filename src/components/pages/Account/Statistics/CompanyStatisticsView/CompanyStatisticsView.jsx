import React from 'react';
import '../Statistics.scss';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import Title from '../../../../UI/Title/Title';

const CompanyStatisticsView = ({ user }) => {
    return (
        <div className='account account__statistics'>
        <Title type="subtitle">Статистика</Title>
        <div className='statistiscs-wr'>
            company
        </div>
    </div>
    );
};

export default CompanyStatisticsView;
