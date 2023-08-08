import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import FilterCatalog from './FilterCatalog/FilterCatalog';
import UserListCatalog from './UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/slices/catalogSlice/catalogSlice';
import CatalogArticles from './CatalogArticles/CatalogArticles';
import Loading from '../../common/Loading/Loading';

const data = {
    title: 'Список преподавателей',
    titleArticles: 'Полезные статьи',
};

const Catalog = (props) => {
    const users = useSelector((state) => state.catalogSlice.users);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            <div className='catalog'>
                <ContainerMain>
                    <Title>{data.title}</Title>
                    <div className='catalog__row'>
                        <div className='catalog__filter'>
                            <FilterCatalog />
                        </div>
                        <div className='catalog__body'>
                            <UserListCatalog userList={users} />
                        </div>
                    </div>
                </ContainerMain>
            </div>
            <CatalogArticles />
        </>
    );
};

export default Catalog;
