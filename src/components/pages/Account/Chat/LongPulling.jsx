import React from 'react';
import InputForm from '../../../UI/Forms/InputForm/InputForm.jsx';
import MainButton from '../../../UI/Buttons/MainButton/MainButton.jsx';
import { useState } from 'react';
import { v1 } from 'uuid';
import axios from 'axios';
import { useEffect } from 'react';

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
            <h1>LongPulling</h1>
            <div className='form'>
                <InputForm value={value} setValue={setValue} />
                <MainButton onClick={sendMessageHandler}>отправить</MainButton>
            </div>
            <div className='messages'>
                {messages.map((el) => (
                    <div key={v1()} className='messages__item'>
                        {el.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LongPulling;
