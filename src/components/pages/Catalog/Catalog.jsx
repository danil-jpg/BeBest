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

const data = {
    title: 'Список преподавателей',
    titleArticles: 'Полезные статьи',
};

const Catalog = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.catalogSlice.users);
    let [userData, setUserData] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            let res = await axios.get(
                'http://bebest.pp.ua/api/users/?populate=*&filters[role][type][$eq]=teacher'
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

            setUserData(res.data);
        };

        getUsers();
    }, [dispatch]);

    return (
        <>
            <div className='catalog'>
                <ContainerMain>
                    <Title>{data.title}</Title>
                    <div className='catalog__row'>
                        <div className='catalog__filter'>
                            <FilterCatalog
                                users={userData}
                                setUsers={setUserData}
                            />
                        </div>
                        <div className='catalog__body'>
                            <UserListCatalog users={users} />
                        </div>
                    </div>
                </ContainerMain>
            </div>
            <CatalogArticles />
        </>
    );
};

export default Catalog;
