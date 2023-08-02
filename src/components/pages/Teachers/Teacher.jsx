import React from 'react';
import './Teacher.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Picture from '../../UI/Picture/Picture';
import { IconRenderer } from '../../UI/IconRenderer/IconRenderer';
import quotes from '../../../assets/images/teacher/quote.png';
import quotesWebp from '../../../assets/images/teacher/quote.png?as=webp';

import TeacherGreet from './TeacherGreet/TeacherGreet';

const Teacher = (props) => {
    return (
        <div className='teacher'>
            <div className='teacher__background'></div>
            <div className='teacher__background2'></div>
            <ContainerMain>
                <div className='teacher__body'>
                    <div className='teacher__body__left'>
                        <TeacherGreet />
                        {/* <div className='teacher__about'>
                            <p className='teacher__about_title'>Обо мне</p>
                            <div className='teacher__about_texts-wr'>
                                <div className='teacher__about_text_left'>
                                    <Picture img={quotes} webp={quotesWebp} />
                                </div>
                                <div className='teacher__about_text_right'>
                                    <p className='teacher__about_text'>
                                        Укрепление и развитие структуры позволяет выполнять важные
                                        задания по разработке системы обучения кадров, соответствует
                                        насущным потребностям. Таким образом реализация намеченных
                                        плановых заданий способствует подготовки и реализации модели
                                        развития. Идейные соображения высшего порядка, а также
                                        консультация с широким активом способствует подготовки и
                                        реализации модели развития.
                                    </p>
                                    <p className='teacher__about_translate'>Перевести текст</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='teacher__body__right'></div>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Teacher;
