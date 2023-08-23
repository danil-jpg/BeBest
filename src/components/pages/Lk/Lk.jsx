import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './Student/Account/Account';
import PersonData from './Student/PersonData/PersonData';
import MyLessons from './Student/MyLessons/MyLessons';

const Lk = () => {
    return (
        <Routes>
            <Route path='studentAccount' element={<Account />} />
            <Route path='studentPersonData' element={<PersonData />} />
            <Route path='studentMyLessons' element={<MyLessons />} />
        </Routes>
    );
};

export default Lk;
