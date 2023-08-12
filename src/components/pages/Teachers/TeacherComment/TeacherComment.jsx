import React, { useState } from 'react';
import './TeacherComment.scss';
import useFetch from '../../../../utils/useFetch';
import { v1 } from 'uuid';
import avatar from '../../../../assets/images/teacher/avatarCircle.png';
import avatarW from '../../../../assets/images/teacher/avatarCircle.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import PaginationD from '../../../common/Pagination/PaginationD';
import SelectForm from '../../../UI/Forms/SelectForm/SelectForm';

const TeacherComment = () => {
    let obj = useFetch('reviews/');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    let filterByLessonNum = obj?.data?.data[0].attributes.review.sort((p1, p2) => {
        return p1.lessonNum < p2.lessonNum ? 1 : p1.lessonNum > p2.lessonNum ? -1 : 0;
    });

    let filterByLikes = obj?.data?.data[0].attributes.review.sort((p1, p2) => {
        return p1.likes < p2.likes ? 1 : p1.likes > p2.likes ? -1 : 0;
    });

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts;
    currentPosts = [obj?.data?.data[0].attributes.review.slice(indexOfFirstPost, indexOfLastPost)];

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(obj?.data?.data[0].attributes.review.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='teacher__comments'>
            <div className='filters_wr'>
                <SelectForm
                    list={[
                        { id: v1(), title: 'text1', clicked: true },
                        { id: v1(), title: 'text3', clicked: false },
                        { id: v1(), title: 'text3', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={''}
                />
                <SelectForm
                    list={[
                        { id: v1(), title: 'text1', clicked: true },
                        { id: v1(), title: 'text3', clicked: false },
                        { id: v1(), title: 'text3', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={''}
                />
                <SelectForm
                    list={[
                        { id: v1(), title: 'text1', clicked: true },
                        { id: v1(), title: 'text3', clicked: false },
                        { id: v1(), title: 'text3', clicked: false },
                    ]}
                    style={{ color: 'black' }}
                    setItem={''}
                />
            </div>
            <div className='comments_wr'>
                {obj?.data?.data[0].attributes.review
                    .slice(indexOfFirstPost, indexOfLastPost)
                    .map((el) => (
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
                    totalPosts={obj?.data?.data[0].attributes.review.length}
                    paginate={paginate}
                    prevPage={previousPage}
                    nextPage={nextPage}
                />
            </div>
        </div>
    );
};

export default TeacherComment;
