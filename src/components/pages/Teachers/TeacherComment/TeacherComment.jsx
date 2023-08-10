import React from 'react';
import './TeacherComment.scss';
import useFetch from '../../../../utils/useFetch';

const TeacherComment = () => {
    let res = useFetch('reviews/');
    console.log(res);
    return <div></div>;
};

export default TeacherComment;
