import React from 'react';
import './UserItemCatalog.scss';
import TabsUserItem from './TabsUserItem/TabsUserItem';
import BodyUserItem from './BodyUserItem/BodyUserItem';
import ImageUserItem from './ImageUserItem/ImageUserItem';
import PropTypes from 'prop-types';

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
                id={user.id}
            />
        </li>
    );
};

UserItemCatalog.propTypes = {
    users: PropTypes.objectOf({
        avatar: {
            url: '/uploads/thumbnail_photo2_2518c3a0c3.png'
        },
        stars: 4,
        username: 'Example Examlovich',
        country: 'Example',
        CommunicationLang: 'example',
        lang: 'example, example',
        amountStudent: 3,
        amountLessons: 10,
        description: 'Ad ullamco nulla do ipsum ullamco. Ad nulla mollit irure laboris Lorem incididunt veniam nostrud eiusmod eiusmod laboris officia. Proident irure enim mollit aute minim velit eiusmod consectetur voluptate nisi occaecat ipsum enim mollit. Cillum consectetur consectetur commodo occaecat ipsum pariatur do magna est nulla quis.',
        video: 'https://www.youtube.com/embed/vVvHviRH5Ac?si=hrZ-5atJKG6GFyCy>'
    }),
};


export default UserItemCatalog;
