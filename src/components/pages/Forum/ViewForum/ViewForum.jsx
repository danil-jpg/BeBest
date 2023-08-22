import React, { useEffect, useState } from 'react';
import './ViewForum.scss';
import Title from '../../../UI/Title/Title';
import ItemForum from '../ItemForum/ItemForum';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../common/Loading/Loading';

const titles = {
    main: 'Форум',
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
};

const ViewForum = (props) => {
    let [data, setData] = useState();
    let [messages, setMessages] = useState();
    let { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            let res = await axios.get(`http://bebest.pp.ua/api/topics/${id}?populate=*`);

            setData(res.data.data.attributes);
            setMessages(res.data.data.attributes.messages.data);
        }
        fetch();
    }, [])

    if (!data) return <Loading />

    console.log(data);
    console.log(messages)

    return (
        <>
            <Title type='subtitle'>{data.title}</Title>
            <div className='view-forum'>
                <ItemForum
                    title={data.title}
                    head={true}
                />
                <div className='view-forum__list'>
                    
                </div>
            </div>
        </>
    );
};

export default ViewForum;
