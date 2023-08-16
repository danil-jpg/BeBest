import React from 'react';
import './Registration.scss';
import Registration1 from './Registration1/Registration1';
import { Routes, Route } from 'react-router-dom';

const Registration = () => {
    return (
        <Routes>
            <Route path='registrationProposal' element={<Registration1 />}></Route>
        </Routes>
    );
};

export default Registration;
