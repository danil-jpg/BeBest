import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import ContainerMain from '../../common/ContainerMain/ContainerMain';
import Title from '../../UI/Title/Title';
import FilterCatalog from './FilterCatalog/FilterCatalog';
import UserListCatalog from './UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import CatalogArticles from './CatalogArticles/CatalogArticles';
import { setUserList } from '../../../store/slices/catalogSlice/catalogSlice';
import axios from 'axios';
import {
    setAspectLearn,
    setLangSpeak,
    setLessonCountry,
    setLessonSpeak,
    setLessonTime,
    setPreparingTest,
    setSex,
    setYearLearn,
} from '../../../store/slices/filterSlice/filterSlice';
import { v1 } from 'uuid';

const data = {
    title: 'Список преподавателей',
    titleArticles: 'Полезные статьи',
};

const Catalog = (props) => {
    let dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async () => {
            let res = await axios.get(
                'http://bebest.pp.ua/api/users/?populate=*'
            );
            dispatch(setUserList(res.data));
            
            res.data.forEach((user) => {
                dispatch(setLessonSpeak(user.lang));
                dispatch(setLessonTime(user.time));
                dispatch(setLessonCountry(user.country));
                dispatch(setLangSpeak(user.CommunicationLang));
                dispatch(setSex(user.sex));
                dispatch(setPreparingTest(user.preparingTest));
                dispatch(setAspectLearn(user.aspectLearn));
                dispatch(setYearLearn(user.yearLearn));
            });
        };

        getUsers();
    }, []);

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
            <CatalogArticles />
        </>
    );
};

export default Catalog;
