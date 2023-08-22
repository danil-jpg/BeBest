import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './Student/Account';

const Lk = () => {
    return (
        <Routes>
            <Route>Hey</Route>
            <Route path='student' element={<Account />} />
        </Routes>
    );
};

export default Lk;
