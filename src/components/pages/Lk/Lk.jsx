import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './Student/Account/Account';
import PersonData from './Student/PersonData/PersonData';
import MyLessons from './Student/MyLessons/MyLessons';
import Favourite from './Student/Favourite/Favourite';

const Lk = () => {
    return (
        <Routes>
            <Route path='studentAccount' element={<Account />} />
            <Route path='studentPersonData' element={<PersonData />} />
            <Route path='studentMyLessons' element={<MyLessons />} />
            <Route path='studentFavourite' element={<Favourite />} />
        </Routes>
    );
};

export default Lk;
