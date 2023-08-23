import React from 'react';
import './LkStatus.scss';
import { useNavigate } from 'react-router-dom';

const LkStatus = ({ active = 1, name = 'John Doe', img }) => {
    const navigation = useNavigate();

    return (
        <div className='lk__status'>
            <div className='lk__avatar'>
                <img
                    src={'http://bebest.pp.ua/uploads/photo2_2518c3a0c3.png'}
                    className='lk__avatar_img'
                />
            </div>
            <div className='lk__types'>
                <p className='lk__name'>{name}</p>
                <ul className='lk__types-wr'>
                    <li
                        className={active === 1 ? 'lk__types_li active' : 'lk__types_li'}
                        onClick={() => navigation('')}>
                        Ученик
                    </li>
                    <li
                        className={active === 2 ? 'lk__types_li active' : 'lk__types_li'}
                        onClick={() => navigation('')}>
                        Учитель
                    </li>
                    <li
                        className={active === 3 ? 'lk__types_li active' : 'lk__types_li'}
                        onClick={() => navigation('')}>
                        Компания
                    </li>
                    <li className={'lk__types_li'} onClick={() => navigation('')}>
                        Выйти
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LkStatus;
