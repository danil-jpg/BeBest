import React from 'react';
import './UserItemCatalog.scss';
import TabsUserItem from './TabsUserItem/TabsUserItem';
import BodyUserItem from './BodyUserItem/BodyUserItem';
import ImageUserItem from './ImageUserItem/ImageUserItem';

const UserItemCatalog = ({ user }) => {
    return (
        <li className='item-catalog'>
            <ImageUserItem photo={user.avatar.url} amountStars={user.stars} />
            <BodyUserItem
                name={user.username}
                country={user.country}
                CommunicationLang={user.CommunicationLang}
                lang={user.lang}
                amountStudent={user.amountStudent}
                amountLessons={user.amountLessons}
            />
            <TabsUserItem
                description={user.description}
                videoSrc={user.video}
            />
        </li>
    );
};

export default UserItemCatalog;
