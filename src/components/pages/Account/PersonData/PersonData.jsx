import React from 'react';
import './PersonData.scss';
import StudentPersonView from './StudentPersonView/StudentPersonView';
import TeacherPersonView from './TeacherPersonView/TeacherPersonView';
import CompanyPersonView from './CompanyPersonView/CompanyPersonView';


const PersonData = ({ user,type }) => {
    if (type === 'student') return <StudentPersonView user={user} />;
    if (type === 'teacher') return <TeacherPersonView user={user} />;
    if (type === 'company') return <CompanyPersonView user={user} />;
};
export default PersonData;
