import React from 'react';
import './UserItemCatalog.scss';
import TabsUserItem from './TabsUserItem/TabsUserItem';
import BodyUserItem from './BodyUserItem/BodyUserItem';
import ImageUserItem from './ImageUserItem/ImageUserItem';

const UserItemCatalog = () => {
    return (
        <li className='item-catalog'>
            <ImageUserItem />
            <BodyUserItem />
            <TabsUserItem />
        </li>
    );
};

export default UserItemCatalog;
