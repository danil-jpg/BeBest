import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import FilterCatalog from './FilterCatalog/FilterCatalog';
import UserListCatalog from './UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../store/slices/catalogSlice/catalogSlice';
import CatalogArticles from './CatalogArticles/CatalogArticles';
import RadioForm from '../../UI/Forms/RadioForm/RadioForm';
import { v1 } from 'uuid';

const data = {
    title: 'Список преподавателей',
    titleArticles: 'Полезные статьи',
};

const testRadio = [
    {
        id: v1(),
        title: '1',
        value: 'first',
    },
    {
        id: v1(),
        title: '2',
        value: 'second',
    },
    {
        id: v1(),
        title: '3',
        value: 'third',
    },
];

const Catalog = (props) => {
    const [checked, setChecked] = useState('first');
    
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
                    <div className='catalog__radio'>
                        {testRadio.map((el) => (
                            <RadioForm
                                key={el.id}
                                title={el.title}
                                value={el.value}
                                name='testRadio'
                                checked={checked}
                                setChecked={setChecked}
                            />
                        ))}
                    </div>
                </ContainerMain>
            </div>
            <CatalogArticles />
        </>
    );
};

export default Catalog;
