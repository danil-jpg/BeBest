import React from 'react';
import './Title.scss';

const Title = ({ children, style = {}, align = 'left' }) => {
    return (
        <h1 style={style} className={`title title_align-${align}`}>
            {children}
        </h1>
    );
};

export default Title;
