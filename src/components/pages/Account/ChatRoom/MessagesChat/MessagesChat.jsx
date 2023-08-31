import React, { useEffect } from 'react';
import '../ChatRoom.scss';
import { getImage } from '../../../../../utils/isActive';

export const MessagesChat = ({
    user,
    currentMessages,
}) => {

    const isAuthor = (el) =>
        user.username !== el.author.username ? 'reverse' : '';

    return (
        <>
            <h2 className="chat__title"></h2>
            <div className='chat__messages-wrap'>
                <ul className="chat__message-list">
                    {
                        currentMessages?.map((el, index) =>
                            <li key={index}
                                className={`mess-chat ${isAuthor(el)}`}
                            >
                                <p className="mess-chat__text">{el.message}</p>

                                <div className='mess-chat__image-wrap'>
                                    <img
                                        className='mess-chat__image'
                                        src={getImage(el.author.avatar.url)}
                                        alt='image' />
                                </div>
                            </li>
                        )
                    }
                    {!currentMessages?.length ? <li>Здесь пока нет сообщений</li>: ''}
                    
                </ul>
            </div>
        </>
    )
}