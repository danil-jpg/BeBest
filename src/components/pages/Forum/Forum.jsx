import React, { useEffect } from 'react';
import './Forum.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import { Route, Routes } from 'react-router-dom';
import ListForum from './ListForum/ListForum';
import ViewForum from './ViewForum/ViewForum';
import TopicListForum from './TopicListForum/TopicListForum';
import axios from 'axios';

const titles = {
    main: 'Форум',
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
};

const Forum = (props) => {

    useEffect(() => {
        // const fetch = async () => {
        //     let res = await axios.get('http://bebest.pp.ua/api/forums? populate =* ');

        //     let data = res.json();

        //     console.log(data);
        //     return data;
        // }
        // fetch();
    }, [])
    return (
        <div className='forum'>
            <ContainerMain>
                <Title>{titles.main}</Title>
				<div className='forum__body'>
					<Routes>
						<Route index element={<ListForum/>}/>
						<Route path='topic' element={<TopicListForum/>}/>
						<Route path='view' element={<ViewForum/>}/>
					</Routes>
				</div>
            </ContainerMain>
        </div>
    );
};

export default Forum;
