import React from 'react';
import './Statistics.scss';
import StudentStatisticsView from './StudentStatisticsView/StudentStatisticsView';
import TeacherStatisticsView from './TeacherStatisticsView/TeacherStatisticsView';
import CompanyStatisticsView from './CompanyStatisticsView/CompanyStatisticsView';
const personArr = [
    {
        name: 'Алексей Кузьменко Андреевич',
        lessons: '4',
        futureLessons: '8',
    },
    {
        name: 'Вера Кошкина',
        lessons: '14',
        futureLessons: '32',
    },
    {
        name: 'Дэн Миллман',
        lessons: '5',
        futureLessons: '4',
    },
];
const Statistics = ({ user, type }) => {
    if (type === 'student') return <StudentStatisticsView user={user} personArr={personArr} />;
    if (type === 'teacher') return <TeacherStatisticsView user={user} />;
    if (type === 'company') return <CompanyStatisticsView user={user} />;

};

export default Statistics;
