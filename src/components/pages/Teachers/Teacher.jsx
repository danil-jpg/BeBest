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
import useFetch from '../../../utils/useFetch';
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading/Loading';

const Teacher = () => {
    const userId = useSelector((state) => state.userPageSlice.userId) || 13;
    const obj = useFetch(`users/${userId}/?populate=*`);

    if (!obj) return <Loading></Loading>;
    return (
        <div className='teacher'>
            <div className='teacher__background'></div>
            <div className='teacher__background2'></div>
            <ContainerMain>
                <div className='teacher__body'>
                    <div className='teacher__body__left'>
                        <TeacherGreet user={obj.data} />
                        <TeacherQuotes bio={obj.data.description} />
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
