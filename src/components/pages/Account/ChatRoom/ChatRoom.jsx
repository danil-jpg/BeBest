import React, { useEffect } from 'react';
import './ChatRoom.scss';
import { useState } from 'react';
import { v1 } from 'uuid';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer.jsx';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const ChatRoom = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        socket.on('response', async (data) => {
            setMessages([...messages, data]);
        })

    }, [messages, socket]);

    console.log(user);

    const getImage = (src) => `http://bebest.pp.ua${src}`;

    const sendMessageHandler = () => {
        socket.emit('message', {
            text: message,
            name: user.username,
            id: socket.id,
            socketID: socket.id
        });

        setMessage('');
    };


    const getUser = (el) => {
        let list = [...el.users].filter(el => el.username !== user.username);
        return list[0];
    }

    const getLastMess = () => {
        if (messages.length) {
            return messages[messages.length - 1].text;
        }

        return 'Нет сообщений'
    }

    return (
        <div className='chat'>
            <div className="chat__row">
                <div className='chat__nav'>
                    <div className="chat__search">
                        <input
                            type="text"
                            className="chat__search-inp"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </div>

                    <ul className='chat__group'>
                        {
                            user.chat_groups.map((el, index) => (
                                <GroupChat
                                    key={index}
                                    imageSrc={getImage(getUser(el).avatar.url)}
                                    name={getUser(el).username}
                                    text={getLastMess()}
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className='chat__body'>
                    <div className='chat__messages-wrap'>
                        <ul className="chat__message-list">
                            {
                                messages.map((el, index) =>
                                    <MessageChat
                                        key={index}
                                        imageSrc={getImage(user.avatar.url)}
                                        text={el.text}
                                    />
                                )
                            }
                        </ul>
                    </div>

                    <div className="chat__bottom">
                        <input
                            type="text"
                            className="chat__mess-inp"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button
                            className="chat__send-btn"
                            onClick={sendMessageHandler}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;

export const GroupChat = ({ imageSrc, name, text }) => {
    return (
        <li className="group-item">
            <div className='group-item__image-wrap'>
                <img className='group-item__image' src={imageSrc} alt='image' />
            </div>
            <div className='group-item__body'>
                <p className='group-item__name'>{name}</p>
                <p className='group-item__text'>{text}</p>
            </div>
        </li>
    )
}

export const MessageChat = ({ type, imageSrc, text }) => {
    return (
        <li className={`mess-chat ${type ? 'reverse' : ''}`}>
            <p className="mess-chat__text">{text}</p>

            <div className='mess-chat__image-wrap'>
                <img className='mess-chat__image' src={imageSrc} alt='image' />
            </div>
        </li>
    )
}