import React, { useEffect, useState } from 'react';
import './ListForum.scss';
import ItemForum from '../ItemForum/ItemForum';
import Title from '../../../UI/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../common/Loading/Loading';
import { formattedDate } from '../../../../utils/formattedDate';
import { sortDate } from '../../../../store/slices/forumSlice/forumSlice';

const titles = {
    sub: 'Разделы форума',
    name: 'Название форума',
    theme: 'Темы',
    update: 'Обновления',
    create: 'Создана',
};

const ListForum = ({ list }) => {
    let forums = useSelector(state => state.forumSlice.forums);
    let status = useSelector(state => state.forumSlice.status);

    // useEffect(() => {
    // }, [dispatch])

    if (status === 'loading') return <Loading />;


    return (
        <>
            <Title type='subtitle'>{titles.sub}</Title>
            <div className='forum'>
                <ItemForum
                    title={titles.name}
                    amount={titles.theme}
                    update={titles.update}
                    head={true}
                />
                {
                    forums?.map(el => (
                        <ItemForum
                            key={el.id}
                            id={el.id}
                            title={el.attributes.title}
                            amount={el.attributes.topics.data.length}
                            update={formattedDate(el.attributes.updatedAt)}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default ListForum;
