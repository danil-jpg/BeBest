import React, { useState } from 'react';
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
    const [choosen, setChoosen] = useState([false, false, false]);

    const onClickHandler = (par1, par2, par3) => setChoosen([par1, par2, par3]);

    return (
        <div className='registration registration-proposal-container'>
            <Title>Регистрация</Title>
            <form className='registration__form'>
                <ul className='registration__ul'>
                    <li
                        onClick={() => onClickHandler(true, false, false)}
                        className={
                            choosen[0] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={working} webp={workingW} className={'registration__image'} />
                        <p className='registration__choose__text'>Ученик</p>
                    </li>
                    <li
                        onClick={() => onClickHandler(false, true, false)}
                        className={
                            choosen[1] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={teacher} webp={teacherW} className={'registration__image'} />
                        <p className='registration__choose__text'>Преподаватель</p>
                    </li>
                    <li
                        onClick={() => onClickHandler(false, false, true)}
                        className={
                            choosen[2] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={goal} webp={goalW} className={'registration__image'} />
                        <p className='registration__choose__text'>Компания</p>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default Registration1;
