import React from 'react';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import { Link } from 'react-router-dom';
import chatSvg from '../../../../assets/icons/chat.svg';
import axios from 'axios';
import { async } from 'q';
import './TeacherGreet.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const TeacherGreet = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://bebest.pp.ua/api/users/?populate=*');
            console.log(res.data.filter((el) => el.id === 10)[0].avatar.url);
            setName(res.data.filter((el) => el.id === 10)[0].username);
            setAvatar(res.data.filter((el) => el.id === 10)[0].avatar.url);
            return res;
        };

        fetchData();
    }, [name, avatar]);
    // const data = async function () {
    //     res = await axios.get('http://bebest.pp.ua/api/users').then((res) => res);
    //     console.log(res);
    // };
    // data();
    return (
        <div className='teacher__vid'>
            <iframe
                className='teacher__vid_vid'
                src='https://www.youtube.com/embed/CjkI-RkaBng?controls=0'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            <div className='teacher__descr'>
                <div className='teacher__descr__left'>
                    <img src={`http://bebest.pp.ua${avatar}`} className='teacher__descr_avatar' />
                    <div className='teacher__descr_stars'>
                        <IconRenderer id='star' className='teacher__descr_star' />
                        <IconRenderer id='star' className='teacher__descr_star' />
                        <IconRenderer id='star' className='teacher__descr_star' />
                        <IconRenderer id='star' className='teacher__descr_star' />
                        <IconRenderer id='star' className='teacher__descr_star' />
                    </div>
                    <div className='teacher__descr_recommend'>{name}</div>
                    <div className='teacher__descr_chat-wr'>
                        <img src={chatSvg} className='teacher__descr_chat-img' />
                        <Link to={''} className='teacher__descr_chat-text'>
                            Начать чат
                        </Link>
                    </div>
                </div>
                <div className='teacher__descr__right'></div>
            </div>
        </div>
    );
};

export default TeacherGreet;
