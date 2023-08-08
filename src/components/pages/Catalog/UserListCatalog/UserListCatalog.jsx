import React from 'react';
import './UserListCatalog.scss';
import UserItemCatalog from '../../../common/UserItemCatalog/UserItemCatalog';

const UserListCatalog = ({userList}) => {

    return (
        <ul className='list-catalog'>
            {userList.map((user) => (
                <UserItemCatalog key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UserListCatalog;
