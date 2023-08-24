import React from 'react';
import './Teacher.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import TeacherQuotes from './TeacherQuotes/TeacherQuotes';
import TeacherGreet from './TeacherGreet/TeacherGreet';
import TeacherPosibility from './TeacherPosibility/TeacherPosibility';
import TeacherCv from './TeacherCv/TeacherCv';
import TeacherMarks from './TeacherMarks/TeacherMarks';
import TeacherLesson from './TeacherLessons/TeacherLesson';
import TeacherCalendar from './TeacherCalendar/TeacherCalendar';
import TeacherComment from './TeacherComment/TeacherComment';

const Teacher = () => {
    return (
        <div className='teacher'>
            <div className='teacher__background'></div>
            <div className='teacher__background2'></div>
            <ContainerMain>
                <div className='teacher__body'>
                    <div className='teacher__body__left'>
                        <TeacherGreet />
                        <TeacherQuotes />
                        <TeacherCalendar />
                        <TeacherPosibility />
                        <TeacherCv />
                        <TeacherMarks />
                        <TeacherComment />
                    </div>
                    <div className='teacher__body__right'>
                        <TeacherLesson />
                    </div>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Teacher;
