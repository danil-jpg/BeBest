import React, { useEffect } from 'react';
import './Forum.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import { Route, Routes } from 'react-router-dom';
import ListForum from './ListForum/ListForum';
import ViewForum from './ViewForum/ViewForum';
import TopicListForum from './TopicListForum/TopicListForum';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForums, setForum } from '../../../store/slices/forumSlice/forumSlice';

const titles = {
    main: 'Форум',
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
};

const Forum = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchForums());
    }, [dispatch]);


    return (
        <div className='forum'>
            <ContainerMain>
                <Title>{titles.main}</Title>
                <div className='forum__body'>
                    <Routes>
                        <Route index element={<ListForum />} />
                        {/* <Route path='topic' element={<TopicListForum />} /> */}
                        <Route path='topic/:id' element={<TopicListForum />} />
                        <Route path='view/:id' element={<ViewForum />} />
                    </Routes>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Forum;
