import React, { useState } from 'react';
import './TeacherComment.scss';
import useFetch from '../../../../utils/useFetch';
import { v1 } from 'uuid';
import avatar from '../../../../assets/images/teacher/avatarCircle.png';
import avatarW from '../../../../assets/images/teacher/avatarCircle.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import PaginationD from '../../../common/Pagination/PaginationD';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../../../store/slices/teachreFilterSlice/teacherFetchUsersSlice';
import {
    filteredUsersByLessonNum,
    filteredUsersBySex,
} from '../../../../store/slices/teachreFilterSlice/teacherFetchUsersSlice';
import Loading from '../../../common/Loading/Loading';
import SelectFormContainer from '../../../UI/Forms/SelectFormContainer/SelectFormContainer';

const TeacherComment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const dispatch = useDispatch();
    const users = useSelector((state) => state.userContentSlice.users);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(users.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    if (users.length < 1) {
        return <Loading />;
    }
    return (
        <div className='teacher__comments'>
            <div className='teacher__comments_top'>
                <p className='comments_top_text'>Отзывы</p>
                <p className='comments_top_text2'>{users.length} отзывов</p>
            </div>
            <div className='filters_wr'>
                <SelectFormContainer
                    title={'Количество занятий'}
                    list={[
                        { id: v1(), title: 'По возростанию', clicked: true },
                        { id: v1(), title: 'По убыванию', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={filteredUsersByLessonNum}
                />
                <SelectFormContainer
                    title={'Пол преподавателя'}
                    list={[
                        { id: v1(), title: 'Мужской', clicked: true },
                        { id: v1(), title: 'Женский', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={filteredUsersBySex}
                />
                <SelectFormContainer
                    title={'Пол преподавателя'}
                    list={[
                        { id: v1(), title: 'text1', clicked: true },
                        { id: v1(), title: 'text3', clicked: false },
                        { id: v1(), title: 'text3', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={filteredUsersBySex}
                />
            </div>
            <div className='comments_wr'>
                {users.slice(indexOfFirstPost, indexOfLastPost).map((el) => (
                    <div key={v1()} className='comment_item'>
                        <div className='comment_top'>
                            <Picture className={'comment_avatar'} img={avatar} webp={avatarW} />
                            <div className='comment_name-wr'>
                                <p className='comment_name'>{el.name}</p>
                                <p className='comment_lessonNum'>
                                    Кол-во уроков: <span>{el.lessonNum}</span>
                                </p>
                            </div>
                        </div>
                        <p className='comment_descr'>{el.descr}</p>
                        <div className='comment_bottom-wr'>
                            <p className='comment_date'>{el.date}</p>
                            <div className='comment_likes-wr'>
                                <IconRenderer id={'thumbUp'} className='thumbUp' />
                                <p className='comment_like'>{el.likes}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <PaginationD
                    currentPage={currentPage}
                    postsPerPage={postsPerPage}
                    totalPosts={users.length}
                    paginate={paginate}
                    prevPage={previousPage}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
};

export default TeacherComment;
