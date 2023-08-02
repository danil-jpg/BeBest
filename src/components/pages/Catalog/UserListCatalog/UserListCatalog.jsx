import React from 'react';
import './UserListCatalog.scss';
import UserItemCatalog from '../../../common/UserItemCatalog/UserItemCatalog';

const UserListCatalog = (props) => {
    return (
        <ul className='list-catalog'>
            <UserItemCatalog />
        </ul>
    );
};


export default UserListCatalog;
