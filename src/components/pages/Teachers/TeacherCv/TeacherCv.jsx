import React from 'react';
import './TeacherCv.scss';
import brain from '../../../../assets/icons/brain.svg';
import sert from '../../../../assets/icons/sert.svg';

const TeacherCv = () => {
    return (
        <div className='teacher__cv'>
            <p className='teacher__cv_title'>Резюме преподавателя</p>
            <div className='teacher__cv_subtitle-wr'>
                <img className='teacher__cv_subtitle-img' src={brain} />
                <p className='teacher__cv_subtitle-text'>Образование</p>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
            <div className='teacher__cv_subtitle-wr'>
                <img className='teacher__cv_subtitle-img' src={sert} />
                <p className='teacher__cv_subtitle-text'>Сертификаты</p>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
            <div className='teacher__cv__item-wr'>
                <p className='teacher__cv__item_date'>2015-2017</p>
                <div className='teacher__cv__item__descr-wr'>
                    <p className='teacher__cv__item__descr_title'>Online teacher</p>
                    <p className='teacher__cv__item__descr_descr'>Verbling – England</p>
                    <p className='teacher__cv__item__descr_descr'>ELT/TESOL</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherCv;
