import React, { useEffect } from 'react';
import './Catalog.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import FilterCatalog from './FilterCatalog/FilterCatalog';
import UserListCatalog from './UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/slices/catalogSlice/catalogSlice';

const data = {
    title: 'Список преподавателей',
};

const Catalog = (props) => {
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
                            <UserListCatalog />
                        </div>
                    </div>
                </ContainerMain>
            </div>
        </>
    );
};

export default Catalog;
