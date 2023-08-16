import React from 'react';
import './TeacherLesson.scss';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';
import clock from '../../../../assets/icons/smallClock.svg';
import person from '../../../../assets/icons/person.svg';
import cap from '../../../../assets/icons/cap.svg';

const TeacherLesson = () => {
    const date = new Date();
    return (
        <div className='teacher__lessons'>
            <div className='teacher__trial'>
                <p className='teacher__trial_text'>Пробный урок</p>
                <div className='teacher__trial__row'>
                    <p className='teacher__trial__row_text'>Длительность урока</p>
                    <p className='teacher__trial__row_num'>1,5 часа</p>
                </div>
                <div className='teacher__trial__row'>
                    <p className='teacher__trial__row_text'>Стоисмость курса</p>
                    <p className='teacher__trial__row_num'>1000 $ </p>
                </div>
                <MainButton style={{ marginTop: '17px', textTransform: 'UpperCase' }}>
                    Забронировать
                </MainButton>
            </div>
            <div className='teacher__trial teacher__trial_forLate'>
                <p className='teacher__trial_text'>Индивидуальный урок</p>
                <p className='teacher__trial_text_2'>Количество уроков</p>
                <div className='teacher__trial__row teacher__trial__row-spec'>
                    <div className='trial__row_wr'>
                        <RadioForm checked={true} />
                        <p className='trial__row_text'>1</p>
                    </div>
                    <div className='trial__row_wr'>
                        <RadioForm checked={false} />
                        <p className='trial__row_text'>2</p>
                    </div>
                    <div className='trial__row_wr'>
                        <RadioForm checked={false} />
                        <p className='trial__row_text'>3</p>
                    </div>
                    <div className='trial__row_wr'>
                        <RadioForm checked={false} />
                        <p className='trial__row_text'>4</p>
                    </div>
                </div>
                <div className='teacher__trial__row teacher__trial_row_nonStandart'>
                    <p className='teacher__trial__row_text'>Стоисмость курса</p>
                    <p className='teacher__trial__row_num'>1000 $ </p>
                </div>
                <MainButton
                    style={{
                        marginTop: '17px',
                        marginBottom: '7px',
                        textTransform: 'UpperCase',
                    }}>
                    Забронировать
                </MainButton>
            </div>
            <div className='teacher__trial'>
                <p className='teacher__trial_text'>Групповые уроки</p>
                <div className='teacher__trial__box'>
                    <p className='teacher__trial__box_date'>{`${
                        date.getDate() + 1
                    } ${date.toLocaleString('default', { month: 'long' })}
                    ${date.getFullYear()}`}</p>
                    <p className='teacher__trial__box_title'>Базовые навыки испанского языка</p>
                    <div className='teacher__trial__box__attributes '>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_red'>
                            <img
                                src={clock}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text '>1 час</p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple'>
                            <img src={cap} className='teacher__trial__box__attributes__item_img' />
                            <p className='teacher__trial__box__attributes__item_text'>Beginners</p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky'>
                            <img
                                src={person}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text'>10-15 лет</p>
                        </div>
                    </div>
                    <div className='teacher__trial__box__data'>
                        <div className='teacher__trial__box__data__left'>
                            <p className='teacher__trial__box__data_title'>Зарегистрировались</p>
                            <p className='teacher__trial__box__data_text'>10 человек</p>
                        </div>
                        <div className='teacher__trial__box__data__right'>
                            <p className='teacher__trial__box__data_title'>Максимум:</p>
                            <p className='teacher__trial__box__data_text'>15 человек</p>
                        </div>
                    </div>
                    <div className='teacher__trial__row'>
                        <p className='teacher__trial__row_text  teacher__trial__row_text_sm'>
                            Стоисмость курса
                        </p>
                        <p className='teacher__trial__row_num'>1000 $ </p>
                    </div>
                    <MainButton
                        style={{
                            marginTop: '17px',
                            marginBottom: '7px',
                            textTransform: 'UpperCase',
                        }}>
                        Забронировать
                    </MainButton>
                </div>
                <div className='teacher__trial__box'>
                    <p className='teacher__trial__box_date'>{`${
                        date.getDate() + 2
                    } ${date.toLocaleString('default', { month: 'long' })}
                    ${date.getFullYear()}`}</p>
                    <p className='teacher__trial__box_title'>Базовые навыки испанского языка</p>
                    <div className='teacher__trial__box__attributes '>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_red'>
                            <img
                                src={clock}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text '>1 час</p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple'>
                            <img src={cap} className='teacher__trial__box__attributes__item_img' />
                            <p className='teacher__trial__box__attributes__item_text'>Beginners</p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky'>
                            <img
                                src={person}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text'>10-15 лет</p>
                        </div>
                    </div>
                    <div className='teacher__trial__box__data'>
                        <div className='teacher__trial__box__data__left'>
                            <p className='teacher__trial__box__data_title'>Зарегистрировались</p>
                            <p className='teacher__trial__box__data_text'>10 человек</p>
                        </div>
                        <div className='teacher__trial__box__data__right'>
                            <p className='teacher__trial__box__data_title'>Максимум:</p>
                            <p className='teacher__trial__box__data_text'>15 человек</p>
                        </div>
                    </div>
                    <div className='teacher__trial__row'>
                        <p className='teacher__trial__row_text teacher__trial__row_text_sm'>
                            Стоисмость курса
                        </p>
                        <p className='teacher__trial__row_num'>1000 $ </p>
                    </div>
                    <MainButton
                        style={{
                            marginTop: '17px',
                            marginBottom: '7px',
                            textTransform: 'UpperCase',
                        }}>
                        Забронировать
                    </MainButton>
                </div>
            </div>
            <div className='teacher__trial'>
                <p className='teacher__trial_text'>Учебные курсы</p>
                <div className='teacher__trial__box'>
                    <p className='teacher__trial__box_date'>{`${
                        date.getDate() + 3
                    } ${date.toLocaleString('default', { month: 'long' })}
                    ${date.getFullYear()}`}</p>
                    <p className='teacher__trial__box_title'>Базовые навыки испанского языка</p>
                    <div className='teacher__trial__box__attributes '>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple'>
                            <img src={cap} className='teacher__trial__box__attributes__item_img' />
                            <p className='teacher__trial__box__attributes__item_text'>
                                Intermediate
                            </p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky'>
                            <img
                                src={person}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text'>
                                старше 16 лет
                            </p>
                        </div>
                    </div>
                    <div className='teacher__trial__box__data'>
                        <div className='teacher__trial__box__data__left'>
                            <p className='teacher__trial__box__data_title'>Зарегистрировались</p>
                            <p className='teacher__trial__box__data_text'>10 человек</p>
                        </div>
                        <div className='teacher__trial__box__data__right'>
                            <p className='teacher__trial__box__data_title'>Максимум:</p>
                            <p className='teacher__trial__box__data_text'>15 человек</p>
                        </div>
                    </div>
                    <div className='teacher__trial__row'>
                        <p className='teacher__trial__row_text  teacher__trial__row_text_sm'>
                            Стоисмость курса
                        </p>
                        <p className='teacher__trial__row_num'>1000 $ </p>
                    </div>
                    <MainButton
                        style={{
                            marginTop: '17px',
                            marginBottom: '7px',
                            textTransform: 'UpperCase',
                        }}>
                        Забронировать
                    </MainButton>
                </div>
                <div className='teacher__trial__box'>
                    <p className='teacher__trial__box_date'>{`${
                        date.getDate() + 4
                    } ${date.toLocaleString('default', { month: 'long' })}
                    ${date.getFullYear()}`}</p>
                    <p className='teacher__trial__box_title'>Уровень разговорного – Бог</p>
                    <div className='teacher__trial__box__attributes '>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple'>
                            <img src={cap} className='teacher__trial__box__attributes__item_img' />
                            <p className='teacher__trial__box__attributes__item_text'>
                                Intermediate
                            </p>
                        </div>
                        <div className='teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky'>
                            <img
                                src={person}
                                className='teacher__trial__box__attributes__item_img'
                            />
                            <p className='teacher__trial__box__attributes__item_text'>
                                старше 16 лет
                            </p>
                        </div>
                    </div>
                    <div className='teacher__trial__box__data'>
                        <div className='teacher__trial__box__data__left'>
                            <p className='teacher__trial__box__data_title'>Зарегистрировались</p>
                            <p className='teacher__trial__box__data_text'>10 человек</p>
                        </div>
                        <div className='teacher__trial__box__data__right'>
                            <p className='teacher__trial__box__data_title'>Максимум:</p>
                            <p className='teacher__trial__box__data_text'>15 человек</p>
                        </div>
                    </div>
                    <div className='teacher__trial__row'>
                        <p className='teacher__trial__row_text teacher__trial__row_text_sm'>
                            Стоисмость курса
                        </p>
                        <p className='teacher__trial__row_num'>1000 $ </p>
                    </div>
                    <MainButton
                        style={{
                            marginTop: '17px',
                            marginBottom: '7px',
                            textTransform: 'UpperCase',
                        }}>
                        Забронировать
                    </MainButton>
                </div>
            </div>
        </div>
    );
};

export default TeacherLesson;
