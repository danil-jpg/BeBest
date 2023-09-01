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
import ChatRoom from './ChatRoom/ChatRoom.jsx';
import NotAuth from './NotAuth/NotAuth';

const Account = () => {
    const [user, setUser] = useState('');
    const [ws, setWs] = useState({ change: '' });
    const id = window.sessionStorage.getItem('id');

    useEffect(() => {
        // sessionStorage.setItem('id', 36);

        const fetchData = async () => {
            try {
                let res = await axios.get(`http://bebest.pp.ua/api/users/${id}?populate[chat_groups][populate][0]=users&populate[avatar][populate][1]=avatar&populate[chat_mess][populate][2]=author&populate[chat_groups][populate][3]=users.avatar&populate[chat_groups][populate][4]=messages&populate[chat_groups][populate][5]=messages.author&populate[chat_groups][populate][6]=messages.author.avatar`);

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
                        <Route path='/chat/:id' element={
                            <ChatRoom
                                ws={ws}
                                setWs={setWs}
                                user={user} />
                        } />
                    </Routes>
                }
            />
        </>
    );
};

export default Account;
