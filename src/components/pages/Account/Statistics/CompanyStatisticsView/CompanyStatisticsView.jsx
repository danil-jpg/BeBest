import React from 'react';
import '../Statistics.scss';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import Title from '../../../../UI/Title/Title';
import TeacherStatisticTable from '../../Common/TeacherStatistic/TeacherStatisticTable/TeacherStatisticTable';

const CompanyStatisticsView = ({ user }) => {
    return (
        <div className='account account__statistics'>
        <Title type="subtitle">Статистика</Title>
            <div className="account__statistics-company">
                
            </div>
    </div>
    );
};

export default CompanyStatisticsView;
