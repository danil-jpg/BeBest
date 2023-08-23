import React, { useState } from 'react';
import './Favourite.scss';
import LkStatus from '../../Common/LkStatus/LkStatus';
import LkNavigation from '../../Common/LkNavigation/LkNavigation';
import Constructor from '../../Common/LkConstructor/Constructor';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../../common/Loading/Loading';
import UserListCatalog from '../../../Catalog/UserListCatalog/UserListCatalog';
import { useDispatch, useSelector } from 'react-redux';
import { setUserList } from '../../../../../store/slices/catalogSlice/catalogSlice';
import {
    setAspectLearn,
    setLangSpeak,
    setLessonCountry,
    setLessonSpeak,
    setLessonTime,
    setPreparingTest,
    setSex,
    setYearLearn,
} from '../../../../../store/slices/filterSlice/filterSlice.js';

const Favourite = () => {
    const [userData, setUserData] = useState(false);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const id = window.sessionStorage.getItem('id');

    const users = useSelector((state) => state.catalogSlice.users);

    useEffect(() => {
        const getUsers = async () => {
            let res = await axios.get('http://bebest.pp.ua/api/users/11?populate=*');
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

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .get(`http://bebest.pp.ua/api/users/${id}`)
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((e) => console.log(e.message));
        };

        fetchData();

        setUsername(userData.username);
    }, [id, userData.username]);

    if (!userData) {
        <Loading></Loading>;
    }

    return (
        <Constructor
            leftContent={
                <>
                    <LkStatus name={username} />
                    <LkNavigation active={4} />
                </>
            }
            rightContent={<UserListCatalog users={users} />}
        />
    );
};

export default Favourite;
