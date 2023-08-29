import React from 'react';
import LongPulling from './LongPulling';
import './Chat.scss';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__left'>
                <div className='chat__group'>
                    <div className='chat__item'>
                        <div className='chat__item__left'>
                            <img src='https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768' />
                        </div>
                        <div className='chat__item__right'>
                            <p className='chat__name'> Общий чат</p>
                            <p className='chat__last-text'>xxxx</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='chat__right'>
                <div className='chat__right_top'>
                    <p className='chat__right_top_text'>Общий чат</p>
                </div>
                <LongPulling></LongPulling>
            </div>
        </div>
    );
};

export default Chat;
