import React, { useState } from 'react';
import './UserMenuHeader.scss';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import { Link } from 'react-router-dom';
import iconUser from '../../../../assets/icons/user.svg';
import LangSelectFrom from '../../../UI/Forms/LangSelectFrom/LangSelectFrom';
import { useSelector } from 'react-redux';
import headerSlice from '../../../../store/slices/headerSlice/headerSlice';

const UserMenuHeader = (props) => {
    const [login, setLogin] = useState(false);
    const langList = useSelector(state => state.headerSlice.langList);
    const data = {
        reg: 'Регистрация',
        auth: 'Войти',
        iconUser,
	};

    return (
        <div className='user-header'>
            {login ? (
                <div className='user-header__link-list'>
                    <Link to='' className=''></Link>
                    <Link to='' className=''></Link>
                    <Link to='' className=''></Link>
                </div>
            ) : (
                <div className='user-header__link-list'>
                    <Link to='' className='user-header__link'>
                        <img
                            className='user-header__icon user-header__icon_user'
                            src={iconUser}
                            alt='icon'
                        />
                        <span>{data.auth}</span>
                    </Link>
                    <Link to='' className='user-header__link'>
                        <span>{data.reg}</span>
                    </Link>
                </div>
            )}
            <div className='user-header__select'>
                <LangSelectFrom list={langList} />
            </div>
        </div>
    );
};

export default UserMenuHeader;
