import React from 'react';
import './TabsUserItem.scss';
import { Link, Route, Routes } from 'react-router-dom';

const TabsUserItem = () => {
    return (
        <div className='tabs-item-catalog'>
            <div className='tabs-item-catalog__tab-wrap'>
                <div className='tabs-item-catalog__header'>
                    <Link>index</Link>
                    <Link>description</Link>
                    <Link>calendar</Link>
                </div>
                <div className='tabs-item-catalog__body'>
                    <div className='tabs-item-catalog__item'></div>
                    <div className='tabs-item-catalog__item'></div>
                    <div className='tabs-item-catalog__item'></div>
                </div>
            </div>
            <div className='tabs-item-catalog__footer'></div>
        </div>
    );
};

export default TabsUserItem;
