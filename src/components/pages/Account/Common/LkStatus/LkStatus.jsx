import React from 'react';
import './LkStatus.scss';
import { useNavigate } from 'react-router-dom';
import { setAuthorizeState } from '../../../../../store/slices/authorizeSlice/authorizeSlice';
import { useDispatch } from 'react-redux';

const LkStatus = ({ name, photoSrc, type }) => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

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
    };

    return (
        <div className='lk__status'>
            <div className='lk__avatar'>
                <img
                    src={`${
                        photoSrc
                            ? `http://bebest.pp.ua${photoSrc}`
                            : 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768'
                    }`}
                    className='lk__avatar_img'
                />
            </div>
            <div className='lk__types'>
                <p className='lk__name'>{name}</p>
                <ul className='lk__types-wr'>
                    <li className={'lk__types_li active'}>{getAccount(type)}</li>
                    <li
                        className={'lk__types_li'}
                        onClick={() => {
                            dispatch(setAuthorizeState(false));
                            navigation('../registration/Authorize');
                        }}>
                        Выйти
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LkStatus;
