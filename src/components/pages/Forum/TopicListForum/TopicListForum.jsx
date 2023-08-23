import React, { useEffect, useState } from 'react';
import './TopicListForum.scss';
import ItemForum from '../ItemForum/ItemForum';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formattedDate } from '../../../../utils/formattedDate';
import Loading from '../../../common/Loading/Loading';
import Title from '../../../UI/Title/Title';

const titles = {
    main: 'Форум',
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
    create: 'Создана'
};

const TopicListForum = (props) => {
    const [data, setData] = useState();
    const { id } = useParams();

    useEffect(() => {
        const getTopics = async () => {
            try {
                let res = await axios.get(`http://bebest.pp.ua/api/forums/${id}?populate[topics][populate][0]=author&populate[topics][populate][1]=messages&populate[topics][populate][3]=messages.author`);

                setData(res.data.data.attributes);
            } catch (error) {
                console.log(error)
            }


        }
        getTopics();
    }, [id])

    const topics = data?.topics.data;

    const getAmountMess = el => el.attributes.messages.data.length;
    const getAuthorTopic = el => el.attributes.author.data.attributes.username;
    const getLastMessAuthor = el => {
        const lastMessageLength = el.attributes.messages.data.length;

        if (lastMessageLength - 1 >= 0) {
            return el.attributes.messages.data[lastMessageLength - 1].attributes.author.data.attributes.username;
        }
        
        return el.attributes.author.data.attributes.username;
    }

    if (!data) return <Loading />

    return (
        <>
            <Title type='subtitle'>{data.title}</Title>
            <div className='forum'>
                <ItemForum
                    title={titles.name}
                    amount={titles.theme}
                    update={titles.update}
                    create={titles.create}
                    head={true}
                    topic={true}
                />
                {
                    topics?.map(el => (
                        <ItemForum
                            key={el.id}
                            id={el.id}
                            topic={true}
                            title={el.attributes.title}
                            author={getAuthorTopic(el)}
                            lastAuthor={getLastMessAuthor(el)}
                            amount={getAmountMess(el)}
                            update={formattedDate(el.attributes.updatedAt)}
                            create={formattedDate(el.attributes.createdAt)}
                        />
                    ))
                }
            </div>
        </>
    )
};

export default TopicListForum;
