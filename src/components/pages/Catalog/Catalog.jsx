import React from 'react';
import './Catalog.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import FilterCatalog from './FilterCatalog/FilterCatalog';
import UserListCatalog from './UserListCatalog/UserListCatalog';

const data = {
    title: 'Список преподавателей',
};

const Catalog = (props) => {
    return (
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
    );
};

export default Catalog;
