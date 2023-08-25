import React from 'react';
import quotes from '../../../../assets/images/teacher/quote.png';
import quotesWebp from '../../../../assets/images/teacher/quote.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { Link } from 'react-router-dom';
import './TeacherQuotes.scss';

const TeacherQuotes = ({ className, bio = 'default text' }) => {
    console.log();

    return (
        <div className={`teacher__about ${className}`}>
            <p className='teacher__about_title'>Обо мне</p>
            <div className='teacher__about_text-wr'>
                <div className='teacher__about_text_left'>
                    <Picture img={quotes} webp={quotesWebp} />
                </div>
                <div className='teacher__about_text_right'>
                    <p className='teacher__about_text'>{bio}</p>
                    <Link to={''} className='teacher__about_translate'>
                        Перевести текст
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeacherQuotes;
