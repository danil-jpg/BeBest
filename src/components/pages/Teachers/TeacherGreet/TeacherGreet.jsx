import React from 'react';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import { Link } from 'react-router-dom';
import chatSvg from '../../../../assets/icons/chat.svg';
import axios from 'axios';
import { async } from 'q';
import './TeacherGreet.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import time from '../../../../assets/icons/time.svg';
import star from '../../../../assets/icons/star.svg';

const TeacherGreet = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const arr = new Array(5).fill(0);
    const [stars, setStars] = useState(0);
    const [obj, setObj] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://bebest.pp.ua/api/users/?populate=*');
            setStars(res.data.filter((el) => el.id === 10)[0].stars);
            setName(res.data.filter((el) => el.id === 10)[0].username);
            setAvatar(res.data.filter((el) => el.id === 10)[0].avatar.url);
            setObj(res.data.filter((el) => el.id === 10)[0]);
        };
        fetchData();
    }, [name, avatar]);
    console.log(obj);
    return (
        <div className='teacher__vid'>
            <iframe
                className='teacher__vid_vid'
                src='https://www.youtube.com/embed/CjkI-RkaBng?controls=0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            <div className='teacher__descr'>
                <div className='teacher__descr__left'>
                    <img src={`http://bebest.pp.ua${avatar}`} className='teacher__descr_avatar' />
                    <ul className='teacher__descr_stars'>
                        {arr.map((el, index) => {
                            return index > stars ? (
                                <IconRenderer
                                    key={index}
                                    id='star'
                                    className='teacher__descr_star '
                                />
                            ) : (
                                <IconRenderer
                                    key={index}
                                    id='star'
                                    className='teacher__descr_star teacher__descr_star_filled'
                                />
                            );
                        })}
                    </ul>
                    <div className='teacher__descr_recommend'>Рекомендуем</div>
                    <div className='teacher__descr_chat-wr'>
                        <img src={chatSvg} className='teacher__descr_chat-img' />
                        <Link to={''} className='teacher__descr_chat-text'>
                            Начать чат
                        </Link>
                    </div>
                </div>
                <div className='teacher__descr__right'>
                    <div className='teacher__descr__right_top'>
                        <div className='teacher__descr__right_time-wr'>
                            <img src={time} />
                            <p className='teacher__descr__right_top_text'>12:35 pm</p>
                        </div>
                        <div className='teacher__descr__right_exp-wr'>
                            <img src={star} />
                            <p className='teacher__descr__right_top_text'>Стаж: {stars} года</p>
                        </div>
                    </div>
                    <div className='teacher__descr__right_main'>
                        <div className='teacher__descr__right_main_top'>
                            <p className='teacher__descr__right_main_top_name'>{obj.username}</p>
                            <p className='teacher__descr__right_main_top_country'>{obj.country}</p>
                        </div>
                        <div className='teacher__descr__right_main_bottom'>
                            <div className='teacher__descr__right_main_bottom_cont'>
                                <p className='teacher__descr__right_main_bottom_title'>
                                    Язык обучения
                                </p>
                                <p className='teacher__descr__right_main_bottom_descr'>
                                    {obj.lang}
                                </p>
                            </div>
                            <div className='teacher__descr__right_main_bottom_cont'>
                                <p className='teacher__descr__right_main_bottom_title'>
                                    Языки общения
                                </p>
                                <p className='teacher__descr__right_main_bottom_descr'>
                                    {obj.CommunicationLang}
                                </p>
                            </div>
                            <div className='teacher__descr__right_main_bottom_cont'>
                                <p className='teacher__descr__right_main_bottom_title'>
                                    Кол-во учеников
                                </p>
                                <p className='teacher__descr__right_main_bottom_descr'>10</p>
                            </div>
                            <div className='teacher__descr__right_main_bottom_cont'>
                                <p className='teacher__descr__right_main_bottom_title'>
                                    Кол-во проведенных уроков
                                </p>
                                <p className='teacher__descr__right_main_bottom_descr'>34</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherGreet;
