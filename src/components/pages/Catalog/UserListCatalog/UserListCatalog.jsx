import React, { useState } from 'react';
import './UserListCatalog.scss';
import UserItemCatalog from '../../../common/UserItemCatalog/UserItemCatalog';
import { useSelector } from 'react-redux';
import Pagination from '../../../common/Pagination/Pagination';
import { isChecked } from '../../../../utils/isActive';

const UserListCatalog = () => {
    const users = useSelector((state) => state.catalogSlice.users);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(4);

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex);

    const onPageNumClickHandler = (num) => {
        setCurrentPage(num);
        window.scrollTo(0,0);
    };

    return (
        <>
            <ul className='list-catalog'>
                {currentUsers.map((user) => (
                    <UserItemCatalog key={user.id} user={user} />
                ))}
            </ul>
            <Pagination
                totalPages={users.length}
                itemsPerPage={userPerPage}
                currentPage={currentPage}
                onPageNumClickHandler={onPageNumClickHandler}
            />
        </>
    );
};

export default UserListCatalog;
