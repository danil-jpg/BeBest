import React from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';

const MainButton = ({
    children,
    to = '',
    style = {},
    size = 'middle',
    type = 'red',
    onClick,
}) => {
    // sizes = small, middle, big;
    // types = color,transparent
    return (
        <Link
            to={to}
            className={`main-btn main-btn_${size} main-btn_${type}`}
            style={style}
            onClick={onClick ? onClick : () => { console.log('not callback') }}
        >
            <span>{children}</span>
        </Link>
    );
};

export default MainButton;
