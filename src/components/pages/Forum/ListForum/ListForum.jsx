import React, { useState } from 'react';
import './ListForum.scss';
import ItemForum from '../ItemForum/ItemForum';
import Title from '../../../UI/Title/Title';
import { useSelector } from 'react-redux';
import Loading from '../../../common/Loading/Loading';
import { formattedDate } from '../../../../utils/formattedDate';
import Pagination from '../../../common/Pagination/Pagination';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(10);

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUsers = forums?.slice(firstUserIndex, lastUserIndex);

    const onPageNumClickHandler = (num) => {
        setCurrentPage(num);
        window.scrollTo(0, 0);
    };
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
                    currentUsers?.map(el => (
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
            {
                forums.length === currentUsers.length
                        ? <></>
                        : <Pagination
                            totalUsers={forums.length}
                            itemsPerPage={userPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            onPageNumClickHandler={onPageNumClickHandler}
                        />
                }
        </>
    );
};

export default ListForum;
