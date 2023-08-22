import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './Student/Account/Account';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Lk = () => {
    return (
        <Routes>
            <Route path='studentAccount' element={<Account />} />
        </Routes>
    );
};

export default Lk;
