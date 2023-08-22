import React from 'react';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import './LkNavigation.scss';
import { useNavigate } from 'react-router-dom';

const LkNavigation = ({ type = 'student', active = 1 }) => {
    const navigate = useNavigate();

    if (type === 'student') {
        return (
            <ul className='lk__nav lk__nav_student'>
                <li
                    className={active === 1 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'person'} />
                    <p className='lk__nav_text'>Аккаунт</p>
                </li>
                <li
                    className={active === 2 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'key'} />
                    <p className='lk__nav_text'>Личные данные</p>
                </li>
                <li
                    className={active === 3 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'book'} />
                    <p className='lk__nav_text'>Мои уроки</p>
                </li>
                <li
                    className={active === 4 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'heart'} />
                    <p className='lk__nav_text'>Мои преподаватели</p>
                </li>
                <li className={active === 5 ? 'lk__nav_li active' : 'lk__nav_li'}>
                    <IconRenderer id={'payment'} />
                    <p className='lk__nav_text'>Платежная информация</p>
                </li>
                <li
                    className={active === 6 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'statistic'} />
                    <p className='lk__nav_text'>Статистика</p>
                </li>
                <li
                    className={active === 7 ? 'lk__nav_li active' : 'lk__nav_li'}
                    onClick={() => navigate('')}>
                    <IconRenderer id={'chats'} />
                    <p className='lk__nav_text'>Чаты</p>
                </li>
            </ul>
        );
    } else if (type === 'teacher') {
        return <div>teacher</div>;
    } else {
        return <div>company</div>;
    }
};

export default LkNavigation;
