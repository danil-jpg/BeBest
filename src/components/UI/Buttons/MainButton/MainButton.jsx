import React from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';

const MainButton = ({ children, to = '', style = {}, type = 'middle' }) => {
    // types = small, middle, big;
    return (
        <Link to={to} className={`main-btn main-btn_${type}`} style={style}>
            <span>{children}</span>
        </Link>
    );
};

export default MainButton;
