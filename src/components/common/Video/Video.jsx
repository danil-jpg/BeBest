import React, { useState } from 'react';
import './Video.scss';
import Picture from '../../UI/Picture/Picture';
import videoPoster from '../../../assets/images/catalog/video-wrap.jpg';
import videoPosterWebp from '../../../assets/images/catalog/video-wrap.jpg?as=webp';
import { IconRenderer } from '../../UI/IconRenderer/IconRenderer';
import { isActive } from '../../../utils/isActive';

const Video = ({ src, className = '', poster = {} }) => {
    const [show, setShow] = useState(false);
    const onPlayClickHandler = () => {
        setShow(!show);
    };

    return (
        <div className={`video-wrap ${className} ${isActive(show, 'show')}`}>
            {show ? (
                <iframe
                    src={src}
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></iframe>
            ) : (
                <></>
            )}
            <div className='video-wrap__image-wrap'>
                <Picture
                    className={'video-wrap__image'}
                    img={videoPoster}
                    webp={videoPosterWebp}
                />
            </div>
            <button className='video-wrap__btn' onClick={onPlayClickHandler}>
                <IconRenderer id='play' className='video-wrap__icon-btn' />
            </button>
        </div>
    );
};

export default Video;
