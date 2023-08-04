import React from 'react';
import buff1 from '../../../../assets/images/teacher/buff1.png';
import buff1WEb from '../../../../assets/images/teacher/buff1.png?=webp';
import buff2 from '../../../../assets/images/teacher/buff2.png';
import buff2WEb from '../../../../assets/images/teacher/buff2.png?=webp';
import buff3 from '../../../../assets/images/teacher/buff3.png';
import buff3WEb from '../../../../assets/images/teacher/buff3.png?=webp';
import buff5 from '../../../../assets/images/teacher/buff5.png';
import buff5WEb from '../../../../assets/images/teacher/buff5.png?=webp';
import Picture from '../../../UI/Picture/Picture';
import './TeacherMarks.scss';

const TeacherMarks = () => {
    return (
        <div className='teacher__mark'>
            <p className='teacher__mark_title'>Оценки учеников</p>
            <div className='teacher__mark__items'>
                <div className='teacher__mark__item'>
                    <Picture webp={buff1WEb} img={buff1} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Великолепен(-а) для начинающих</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff2WEb} img={buff2} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>
                        Великолепен(-а) для учеников среднего уровня
                    </p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff3WEb} img={buff3} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>
                        Великолепен(-а) для учеников продвинутого уровня
                    </p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff3WEb} img={buff3} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Великолепно ладит с детьми</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff5WEb} img={buff5} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Великолепное общение</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff5WEb} img={buff5} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Отличные материалы</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff3WEb} img={buff3} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Превосходит ожидания</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff5WEb} img={buff5} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Подробные сведения в теме</p>
                </div>
                <div className='teacher__mark__item'>
                    <Picture webp={buff5WEb} img={buff5} />
                    <div className='teacher__mark__item_num'>11</div>
                    <p className='teacher__mark__item_text'>Гуру мотивации</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherMarks;
