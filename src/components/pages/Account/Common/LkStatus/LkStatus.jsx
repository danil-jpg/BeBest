import React from 'react';
import './LkStatus.scss';
import { useNavigate } from 'react-router-dom';

const LkStatus = ({ name, photoSrc, type }) => {
    
    const getAccount = (type) => {
        switch (type) {
            case 'teacher':
                return 'Учитель';
            case 'student':
                return 'Студент';
            case 'company':
                return 'Компания';
            default:
                return type;
        }

    }
    return (
        <div className='lk__status'>
            <div className='lk__avatar'>
                <img
                    src={`http://bebest.pp.ua${photoSrc}`}
                    className='lk__avatar_img'
                />
            </div>
            <div className='lk__types'>
                <p className='lk__name'>{name}</p>
                <ul className='lk__types-wr'>
                    <li className={'lk__types_li active'}>
                        {getAccount(type)}
                    </li>
                    {/*  <li
                        className={active === 2 ? 'lk__types_li active' : 'lk__types_li'}
                        onClick={() => navigation('')}>
                        Учитель
                    </li>
                    <li
                        className={active === 3 ? 'lk__types_li active' : 'lk__types_li'}
                        onClick={() => navigation('')}>
                        Компания
                    </li>*/}
                    <li className={'lk__types_li'}>
                        Выйти
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LkStatus;
