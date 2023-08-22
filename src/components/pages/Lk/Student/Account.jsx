import React from 'react';
import './Account.scss';
import LkStatus from '../Common/LkStatus/LkStatus';
import LkNavigation from '../Common/LkNavigation/LkNavigation';
import Constructor from '../Common/LkConstructor/Constructor';

const Student = () => {
    return <Constructor leftContent={<LkStatus />} rightContent={<div>hey</div>} />;
};

export default Student;
