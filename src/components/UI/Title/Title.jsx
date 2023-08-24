import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';

const Title = ({ children, style = {}, align = 'left', type }) => {
    return (
        <h1
            style={style}
            className={`title title_align-${align} ${type ? `title_type-${type}` : ''
                }`}
        >
            {children}
        </h1>
    );
};

Title.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    style: PropTypes.object
};

export default Title;
