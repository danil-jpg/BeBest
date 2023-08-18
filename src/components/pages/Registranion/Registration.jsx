import React from 'react';
import './Registration.scss';
import Registration1 from './Registration1/Registration1';
import { Routes, Route } from 'react-router-dom';
import RegistrationStudent from './RegistrationStudent/RegistrationStudent';
import RegistratoinSucc from './RegistrationSucc/RegistratoinSucc';
import RegistrationTeacher from './RegistrationTeacher/RegistrationTeacher';

const Registration = () => {
    return (
        <Routes>
            <Route path='registrationProposal' element={<Registration1 />}></Route>
            <Route path='registrationStudent1' element={<RegistrationStudent />}></Route>
            <Route path='registrationTeacher' element={<RegistrationTeacher />}></Route>
            <Route path='registrationStudentSucc' element={<RegistratoinSucc />}></Route>
        </Routes>
    );
};

export default Registration;
