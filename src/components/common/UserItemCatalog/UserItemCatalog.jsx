import React from 'react';
import './UserItemCatalog.scss';
import TabsUserItem from './TabsUserItem/TabsUserItem';
import BodyUserItem from './BodyUserItem/BodyUserItem';
import ImageUserItem from './ImageUserItem/ImageUserItem';

const UserItemCatalog = ({ user }) => {
    return (
        <li className='item-catalog'>
            <ImageUserItem photo={user.avatar.url} amountStars={user.stars} />
            <BodyUserItem />
            <TabsUserItem />
        </li>
    );
};

export default UserItemCatalog;
