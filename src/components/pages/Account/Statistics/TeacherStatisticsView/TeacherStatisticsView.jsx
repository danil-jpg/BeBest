import React from 'react';
import '../Statistics.scss';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import Title from '../../../../UI/Title/Title';
import "./TeacherStatisticsView.scss"
import TeacherStatisticCard from '../../Common/TeacherStatistic/TeacherStatisticCard/TeacherStatisticCard';
import TeacherStatisticStudent from '../../Common/TeacherStatistic/TeacherStatisticStudent/TeacherStatisticStudent';
import { v1 } from 'uuid';
import TeacherStatisticStudentAll from '../../Common/TeacherStatistic/TeacherStatisticStudent/TeacherStatisticStudentAll';
import TeacherStatisticGrade from '../../Common/TeacherStatistic/TeacherStatisticGrade/TeacherStatisticGrade';
import TeacherStatisticTable from '../../Common/TeacherStatistic/TeacherStatisticTable/TeacherStatisticTable';

const TeacherStatisticsView = ({ user,data }) => {

    const teacherStatisticData =[
        {
            title:'Кол-во учеников:',
            number:'200'
        },
        {
            title:'Кол-во проведенных уроков:',
            number:'126'
        },
        {
            title:'Сумма заработанных денег за все время',
            number:'20 500 $ '
        },
        {
            title:'Кол-во отзывов:',
            number:'34'
        }

    ]
    return (
        <div className='account account__statistics'>
            <Title type="subtitle">Статистика</Title>
            <div className='statistiscs-wrapper'>
                <div className="statistiscs-wrapper__cards">
                {teacherStatisticData.map((el) => (
                    <TeacherStatisticCard key={v1()} teacherStatisticData={el} />
                ))}
                </div>
                <div className="statistiscs-wrapper__student">
                    <h3 className="statistiscs-wrapper__student-title">Мои ученики</h3>
                    <div className='statistiscs-wrapper__student-all'>
                        <TeacherStatisticStudentAll/>
                    </div>
                    <div className="statistiscs-wrapper__student-icons">
                        <TeacherStatisticGrade/>
                    </div>
                    <div className="statistiscs-wrapper__student-table">
                        <h3 className="statistiscs-wrapper__student-title">Статистика по курсам</h3>
                        <div className="test"> <TeacherStatisticTable/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherStatisticsView;
