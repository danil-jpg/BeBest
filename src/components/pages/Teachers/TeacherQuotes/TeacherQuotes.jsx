import React from 'react';
import quotes from '../../../../assets/images/teacher/quote.png';
import quotesWebp from '../../../../assets/images/teacher/quote.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { Link } from 'react-router-dom';
import './TeacherQuotes.scss';

const TeacherQuotes = ({ className }) => {
    return (
        <div className={`teacher__about ${className}`}>
            <p className='teacher__about_title'>Обо мне</p>
            <div className='teacher__about_text-wr'>
                <div className='teacher__about_text_left'>
                    <Picture img={quotes} webp={quotesWebp} />
                </div>
                <div className='teacher__about_text_right'>
                    <p className='teacher__about_text'>
                        Укрепление и развитие структуры позволяет выполнять важные задания по
                        разработке системы обучения кадров, соответствует насущным потребностям.
                        Таким образом реализация намеченных плановых заданий способствует подготовки
                        и реализации модели развития. Идейные соображения высшего порядка, а также
                        консультация с широким активом способствует подготовки и реализации модели
                        развития.
                    </p>
                    <Link to={''} className='teacher__about_translate'>
                        Перевести текст
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeacherQuotes;
