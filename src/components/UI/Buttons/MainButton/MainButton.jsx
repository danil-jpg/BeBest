import React from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';

const MainButton = ({
    children,
    to = '',
    style = {},
    size = 'middle',
    type = 'red',
}) => {
    // sizes = small, middle, big;
    // types = color,transparent
    return (
        <Link to={to} className={`main-btn main-btn_${size} main-btn_${type}`} style={style}>
            <span>{children}</span>
        </Link>
    );
};

export default MainButton;
