import React from 'react';
import InputForm from '../../../UI/Forms/InputForm/InputForm.jsx';
import { useState } from 'react';
import { v1 } from 'uuid';
import axios from 'axios';
import { useEffect } from 'react';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer.jsx';

const LongPulling = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    const sendMessageHandler = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
        });
    };

    useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/get-messages');
            setMessages((prev) => [data, ...prev]);
            await subscribe();
        } catch (error) {
            setTimeout(() => {
                subscribe();
            }, 500);
        }
    };

    return (
        <div className='longPulling'>
            <div className='messages'>
                {messages.map((el) => (
                    <div key={v1()} className='messages__item'>
                        {el.message}
                    </div>
                ))}
            </div>
            <div className='messages__input-wr'>
                <input
                    className='messages__input'
                    value={value || ''}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className='messages__send'>
                    <IconRenderer id='send' />
                </div>
            </div>
        </div>
    );
};

export default LongPulling;
