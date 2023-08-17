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
import axios from 'axios';
import { setRegDataStudent } from '../../../../store/slices/registrationSlice/registrationSlice';
import { useSelector, useDispatch } from 'react-redux';

const Registration1 = () => {
    const [choosen, setChoosen] = useState([false, false, false]);
    const [response, setResponse] = useState([]);
    const dispatch = useDispatch();
    dispatch(setRegDataStudent({ type: 'comp' }));

    const studentData = useSelector((state) => state.studentRegData);

    console.log(studentData);

    const data = {
        data: {
            text: choosen[0] ? 'Ученик' : choosen[1] ? 'Преподаватель' : 'Компания',
        },
    };

    const onClickHandler = (par1, par2, par3) => setChoosen([par1, par2, par3]);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        axios
            .post('http://bebest.pp.ua/api/tests/', data)
            .then((res) => {
                setResponse(res.data);
                console.log(res);
            })
            .catch((e) => console.log(e));
    };

    return (
        <div className='registration registration-proposal-container'>
            <Title>Регистрация</Title>
            <form className='registration__form' method='post' onSubmit={onSubmitHandler}>
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
                <button
                    type='onSubmit'
                    style={{ width: '200px', height: '50px', background: 'blue' }}>
                    Click
                </button>
            </form>
        </div>
    );
};

export default Registration1;
