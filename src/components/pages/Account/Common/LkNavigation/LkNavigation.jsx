import React from 'react';
import { IconRenderer } from '../../../../UI/IconRenderer/IconRenderer';
import './LkNavigation.scss';
import { NavLink} from 'react-router-dom';

const LkNavigation = () => {
    return (
        <ul className='lk__nav lk__nav_student'>
            <NavLink to='/account/' className='lk__nav_li'>
                <IconRenderer id='person' />
                <p className='lk__nav_text'>Аккаунт</p>
            </NavLink>

            <NavLink to='/account/profile' className='lk__nav_li'>
                <IconRenderer id={'key'} />
                <p className='lk__nav_text'>Личные данные</p>
            </NavLink>

            <NavLink to='/account/lessons' className='lk__nav_li'>
                <IconRenderer id={'book'} />
                <p className='lk__nav_text'>Мои уроки</p>
            </NavLink>

            <NavLink to='/account/favorite' className='lk__nav_li'>
                <IconRenderer id='heart' />
                <p className='lk__nav_text'>Мои преподаватели</p>
            </NavLink>

            <NavLink to='/account/payment' className='lk__nav_li'>
                <IconRenderer id='payment' />
                <p className='lk__nav_text'>Платежная информация</p>
            </NavLink>

            <NavLink to='/account/stat' className='lk__nav_li'>
                <IconRenderer id='statistic' />
                <p className='lk__nav_text'>Статистика</p>
            </NavLink>

            <NavLink to='/account/chat' className='lk__nav_li'>
                <IconRenderer id='chats' />
                <p className='lk__nav_text'>Чаты</p>
            </NavLink>
        </ul>
    );
};

export default LkNavigation;
