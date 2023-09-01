import React, { useEffect, useReducer, useRef } from 'react';
import '../ChatRoom.scss';
import { getImage } from '../../../../../utils/isActive';

export const MessagesChat = ({
    user,
    currentMessages,
    titleChat
}) => {
    let listRef = useRef();

    const isAuthor = (el) =>
        user.username !== el.author.username ? 'reverse' : '';

    const scrollBottom = () => {
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }

    useEffect(() => {
        scrollBottom();
    }, [currentMessages])

    return (
        <>
            <h2 className="chat__title">{titleChat}</h2>
            <div className='chat__messages-wrap' ref={listRef}>
                <ul className="chat__message-list" >
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
                    {!currentMessages?.length ? <li>Выберите диалог или отправь сообщение</li> : ''}

                </ul>
            </div>
        </>
    )
}