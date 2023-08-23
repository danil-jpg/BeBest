import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './Student/Account/Account';
import PersonData from './Student/PersonData/PersonData';
import MyLessons from './Student/MyLessons/MyLessons';
import Favourite from './Student/Favourite/Favourite';
import Payment from './Student/Payment/Payment';

const Lk = () => {
    return (
        <Routes>
            <Route path='student'>
                <Route path='Account' element={<Account />} />
                <Route path='PersonData' element={<PersonData />} />
                <Route path='MyLessons' element={<MyLessons />} />
                <Route path='Favourite' element={<Favourite />} />
                <Route path='PaymentInfo' element={<Payment />} />
            </Route>
        </Routes>
    );
};

export default Lk;
