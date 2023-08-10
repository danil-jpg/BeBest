import React, { useState } from 'react';
import './TeacherComment.scss';
import useFetch from '../../../../utils/useFetch';
import { v1 } from 'uuid';
import avatar from '../../../../assets/images/teacher/avatarCircle.png';
import avatarW from '../../../../assets/images/teacher/avatarCircle.png?as=webp';
import Picture from '../../../UI/Picture/Picture';
import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer';

const TeacherComment = () => {
    let obj = useFetch('reviews/');
    const [blogPosts, setBlogPosts] = useState([obj?.data?.data[0].attributes.review]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    const indexOfLastPost = currentPage * postsPerPage,
        indexOfFirstPost = indexOfLastPost - postsPerPage,
        currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    console.log(obj?.data?.data[0].attributes.review);
    return (
        <div className='teacher__comments'>
            <div className='comments_wr'>
                {obj?.data?.data[0].attributes.review.map((el) => (
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
            </div>
        </div>
    );
};

export default TeacherComment;
