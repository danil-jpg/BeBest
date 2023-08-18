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
import { setRegDataStudent } from '../../../../store/slices/registrationSlice/registrationSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Registration1 = () => {
    const [choosen, setChoosen] = useState([false, false, false]);
    const [button, setButton] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const studentData = useSelector((state) => state.studentRegData);
    console.log(studentData);
    const onClickHandler = (par1, par2, par3) => setChoosen([par1, par2, par3]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='registration registration-proposal-container'>
            <Title>Регистрация</Title>
            <form className='registration__form' onSubmit={onSubmitHandler}>
                <ul className='registration__ul'>
                    <li
                        onClick={() => {
                            onClickHandler(true, false, false);
                            setButton(true);
                        }}
                        className={
                            choosen[0] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={working} webp={workingW} className={'registration__image'} />
                        <p className='registration__choose__text'>Ученик</p>
                    </li>
                    <li
                        onClick={() => {
                            onClickHandler(false, true, false);
                            setButton(true);
                        }}
                        className={
                            choosen[1] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={teacher} webp={teacherW} className={'registration__image'} />
                        <p className='registration__choose__text'>Преподаватель</p>
                    </li>
                    <li
                        onClick={() => {
                            onClickHandler(false, false, true);
                            setButton(true);
                        }}
                        className={
                            choosen[2] ? 'registration__choose active' : 'registration__choose'
                        }>
                        <div className='registration__choose__circle'></div>
                        <Picture img={goal} webp={goalW} className={'registration__image'} />
                        <p className='registration__choose__text'>Компания</p>
                    </li>
                </ul>
                <button
                    onClick={() => {
                        button
                            ? dispatch(
                                  setRegDataStudent({
                                      ...studentData,
                                      type: choosen[0]
                                          ? 'Ученик'
                                          : choosen[1]
                                          ? 'Преподаватель'
                                          : 'Компания',
                                  })
                              )
                            : '';
                        choosen[0]
                            ? navigation('../RegistrationStudent1')
                            : choosen[1]
                            ? navigation('../RegistrationTeacher')
                            : choosen[2]
                            ? navigation('../RegistrationStudent1')
                            : '';
                    }}
                    className={button ? 'registration__next-btn active' : 'registration__next-btn'}>
                    Далее
                </button>
            </form>
        </div>
    );
};

export default Registration1;
