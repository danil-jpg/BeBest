import React from 'react';
import './UserListCatalog.scss';
import UserItemCatalog from '../../../common/UserItemCatalog/UserItemCatalog';
import { useSelector } from 'react-redux';
import Loading from '../../../common/Loading/Loading';

const UserListCatalog = (props) => {
    const users = useSelector((state) => state.catalogSlice.users);
    console.log(users);
    if (!users.length) {
        return <Loading />;
    }

    return (
        <ul className='list-catalog'>
            {users.map((user) => (
                <UserItemCatalog key={user.id} user={user} />
            ))}
        </ul>
    );
};

export default UserListCatalog;
