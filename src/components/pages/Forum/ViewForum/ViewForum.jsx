import React, { useEffect, useState } from 'react';
import './ViewForum.scss';
import Title from '../../../UI/Title/Title';
import ItemForum from '../ItemForum/ItemForum';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../common/Loading/Loading';
import ItemMessForum from '../ItemMessForum/ItemMessForum';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import MainButton from '../../../UI/Buttons/MainButton/MainButton';

const titles = {
    main: 'Форум',
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
    ph: 'Введите ваше сообщение',
    btn: 'Отправить'
};

const ViewForum = (props) => {
    let [data, setData] = useState();
    let [messages, setMessages] = useState();
    let [valueTextarea, setValueTextarea] = useState();
    let { id } = useParams();

    const fetch = async () => {
        let res = await axios.get(`http://bebest.pp.ua/api/topics/${id}?populate[messages][populate][0]=author&populate[messages][populate][1]=author.avatar&populate[messages][populate][2]=author.messages`);

        setData(res.data.data);
        setMessages(res.data.data.attributes.messages.data);
    }

    useEffect(() => {
        fetch();
    }, [])

    const onSubmitHandler = async () => {
        try {

            let res = await axios.post('http://bebest.pp.ua/api/forum-messages', {
                data: {
                    text: valueTextarea,
                    author: 20,
                    topic: data.id,
                }
            })
            fetch()
            console.log('success');
        } catch (error) {
            console.log(error)
        }
    }

    if (!data) return <Loading />
    if (data) console.log(data.id);
    return (
        <>
            <Title type='subtitle'>{data.attributes.title}</Title>
            <div className='view-forum'>
                <ItemForum
                    title={data.attributes.title}
                    head={true}
                />
                <div className='view-forum__list'>
                    {
                        messages?.map((el, index) => (
                            <ItemMessForum
                                key={el.id}
                                num={index + 1}
                                el={el.attributes}
                            />
                        ))
                    }
                </div>

                <Title type='subtitle'>{data.attributes.title}</Title>

                <TextareaForm
                    ph={titles.ph}
                    value={valueTextarea}
                    setValue={setValueTextarea}
                    maxWidth='946px'
                />

                <MainButton
                    type='white'
                    maxWidth='145px'
                    onClick={onSubmitHandler}
                >{titles.btn}</MainButton>
            </div>
        </>
    );
};

export default ViewForum;
