import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PersonData from './PersonData/PersonData';
import MyLessons from './MyLessons/MyLessons';
import Payment from './Payment/Payment';
import Statistics from './Statistics/Statistics';
import Constructor from './Common/LkConstructor/Constructor';
import LkStatus from './Common/LkStatus/LkStatus';
import LkNavigation from './Common/LkNavigation/LkNavigation';
import Profile from './Profile/Profile';
import axios from 'axios';
import Loading from '../../common/Loading/Loading';
import Favorite from './Favorite/Favorite';
import Services from './Services/Services';
import CompanyTeam from './CompanyTeam/CompanyTeam';
import Chat from './ChatRoom/ChatRoom.jsx';
import ChatRoom from './ChatRoom/ChatRoom.jsx';
import NotAuth from './NotAuth/NotAuth';

const Account = () => {
    const [user, setUser] = useState('');
    const id = window.sessionStorage.getItem('id');

    useEffect(() => {
        // sessionStorage.setItem('id', 36);

        const fetchData = async () => {
            try {
                let res = await axios.get(`http://bebest.pp.ua/api/users/${id}?populate=*`);

                setUser(res.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, [id]);

    if (!sessionStorage.getItem('id')) return <NotAuth />
    if (!user) return <Loading />

    return (
        <>
            <Constructor
                leftContent={
                    <>
                        <LkStatus
                            name={user.username}
                            photoSrc={user.avatar?.url}
                            type={user.type}
                        />
                        <LkNavigation type={user.type} />
                    </>
                }
                rightContent={
                    <Routes>
                        <Route index element={
                            <Profile user={user} type={user.type} />
                        } />
                        <Route path="/profile" element={
                            <PersonData user={user} type={'student'} />
                        } />
                        <Route path='/lessons' element={
                            <MyLessons user={user} type={user.type} />
                        } />
                        <Route path='/favorite' element={
                            <Favorite />
                        } />
                        <Route path='/payment' element={
                            <Payment />
                        } />
                        <Route path='/stat' element={
                            <Statistics user={user} type={'teacher'} />
                        } />

                        <Route path='/services' element={
                            <Services user={user} type={user.type} />
                        } />
                        <Route path='/team' element={
                            <CompanyTeam user={user} type={user.type} />
                        } />
                        <Route path='/chat' element={
                            <ChatRoom user={user} />
                        } />
                    </Routes>
                }
            />
        </>
    );
};

export default Account;
