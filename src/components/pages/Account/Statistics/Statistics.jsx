import React from 'react';
import './Statistics.scss';
import StudentStatisticsView from './StudentStatisticsView/StudentStatisticsView';
import TeacherStatisticsView from './TeacherStatisticsView/TeacherStatisticsView';
import CompanyStatisticsView from './CompanyStatisticsView/CompanyStatisticsView';

const Statistics = ({ user, type }) => {
    if (type === 'student') return <StudentStatisticsView user={user} />;
    if (type === 'teacher') return <TeacherStatisticsView user={user} />;
    if (type === 'company') return <CompanyStatisticsView user={user} />;

};

export default Statistics;
