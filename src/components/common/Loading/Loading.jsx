import React from 'react';
import './Loading.scss';
import LoadingItem from 'react-loading';

const Loading = (props) => {
    return (
        <div className='loading'>
            <LoadingItem
                className='loading__item'
                type={'bars'}
                color={'#F14A73'}
                height={70}
                width={70}
            ></LoadingItem>
        </div>
    );
};

export default Loading;
