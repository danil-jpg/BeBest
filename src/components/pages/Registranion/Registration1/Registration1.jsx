import React from 'react';
import './Registration1.scss';
import Title from '../../../UI/Title/Title';
import Picture from '../../../UI/Picture/Picture';
import goal from '../../../../assets/images/article/goal.png';
import goalW from '../../../../assets/images/article/goal.png?as=webp';
import teacher from '../../../../assets/images/article/teacher.png';
import teacherW from '../../../../assets/images/article/teacher.png?as=webp';
import working from '../../../../assets/images/article/working.png';
import workingW from '../../../../assets/images/article/working.png?as=webp';

const Registration1 = () => {
    return (
        <div className='registration smallContainer'>
            <Title>Регистрация</Title>
            <form className='registration__form'>
                <div className='registration__choose'>
                    <div className='registration__choose__circle'></div>
                    <Picture img={working} webp={workingW} />
                    <p className='registration__choose__text'>Ученик</p>
                </div>
                <div className='registration__choose'>
                    <div className='registration__choose__circle'></div>
                    <Picture img={teacher} webp={teacherW} />
                    <p className='registration__choose__text'>Преподаватель</p>
                </div>
                <div className='registration__choose'>
                    <div className='registration__choose__circle'></div>
                    <Picture img={goal} webp={goalW} />
                    <p className='registration__choose__text'>Компания</p>
                </div>
            </form>
        </div>
    );
};

export default Registration1;
