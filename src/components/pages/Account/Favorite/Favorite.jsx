import React, { useState } from 'react';
import './Favorite.scss';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../common/Loading/Loading';
import UserListCatalog from '../../Catalog/UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../../../../store/slices/catalogSlice/catalogSlice';

const Favorite = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.catalogSlice.users);

    useEffect(() => {
        const getUsers = async () => {
            let res = await axios.get(
                'http://bebest.pp.ua/api/users/?populate=*&filters[role][type][$eq]=teacher&limit=2'
            );
            dispatch(setUserList(res.data));
        };

        getUsers();
    }, [dispatch]);

    if (!users) {
        <Loading></Loading>;
    }

    return <UserListCatalog users={users} />
};

export default Favorite;
