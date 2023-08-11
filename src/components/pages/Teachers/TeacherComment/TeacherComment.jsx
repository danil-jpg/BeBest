import React, { useState } from 'react';
import './TeacherComment.scss';
import useFetch from '../../../../utils/useFetch';
import { v1 } from 'uuid';
import avatar from '../../../../assets/images/teacher/avatarCircle.png';
import avatarW from '../../../../assets/images/teacher/avatarCircle.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';
import Pagination from '../../../common/Pagination/pagination';

const TeacherComment = () => {
    let obj = useFetch('reviews/');
    // const [blogPosts, setBlogPosts] = useState(obj?.data?.data[0].attributes.review);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // obj?.data?.data[0].attributes.review.slice(indexOfFirstPost, indexOfLastPost);
    let currentPosts;
    console.log(currentPosts);

    currentPosts = [obj?.data?.data[0].attributes.review.slice(indexOfFirstPost, indexOfLastPost)];
    console.log(currentPosts[0]);

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
                <Pagination
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
