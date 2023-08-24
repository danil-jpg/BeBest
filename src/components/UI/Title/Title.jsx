import React from 'react';
import './Title.scss';

const Title = ({ children, style = {}, align = 'left', type }) => {
    return (
        <h1
            style={style}
            className={`title title_align-${align} ${
                type ? `title_type-${type}` : ''
            }`}
        >
            {children}
        </h1>
    );
};

export default Title;
