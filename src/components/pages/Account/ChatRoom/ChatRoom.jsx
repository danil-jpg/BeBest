import React, { useEffect } from 'react';
import './ChatRoom.scss';
import { useState } from 'react';
import { v1 } from 'uuid';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer.jsx';
import { GroupChat } from './GroupChat/GroupChat';
import { getImage, getUser } from '../../../../utils/isActive';
import { Routes, Route } from 'react-router-dom';
import { MessagesChat } from './MessagesChat/MessagesChat';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const ChatRoom = ({ user }) => {
    const [currentMessages, setCurrentMessages] = useState();
    const [currentGroupID, setCurrentGroupID] = useState();
    const [message, setMessage] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [titleChat, setTitleChat] = useState();
    const id = sessionStorage.getItem('id');

    useEffect(() => {
        socket.on('response', async (data) => {
            setCurrentMessages([...data]);
        })


    }, [currentMessages]);

    const sendMessageHandler = async () => {
        let obj = {
            message: message,
            author: user.id,
            group: currentGroupID
        }

        let post = await axios.post('http://bebest.pp.ua/api/chat-messages', {
            data: obj
        })

        let res = await axios.get(`http://bebest.pp.ua/api/users/${id}?populate[chat_groups][populate][0]=users&populate[avatar][populate][1]=avatar&populate[chat_mess][populate][2]=author&populate[chat_groups][populate][3]=users.avatar&populate[chat_groups][populate][4]=messages&populate[chat_groups][populate][5]=messages.author&populate[chat_groups][populate][6]=messages.author.avatar`);

        let listGroup = res.data.chat_groups.filter(el => el.id === currentGroupID);

        socket.emit('message', listGroup[0].messages);

        setMessage('');
    };

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
                                    currentMessages={currentMessages}
                                    setCurrentMessages={setCurrentMessages}
                                    setCurrentGroupID={setCurrentGroupID}
                                    key={index}
                                    elem={el}
                                    imageSrc={getImage(getUser(el, user).avatar.url)}
                                    name={getUser(el, user).username}
                                    setTitleChat={setTitleChat}
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className='chat__body'>
                    <MessagesChat
                        currentMessages={currentMessages}
                        setCurrentMessages={setCurrentMessages}
                        user={user}
                        titleChat={titleChat}
                    />
                    {currentGroupID
                        ? <div className="chat__bottom">
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
                        : <></>}

                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
