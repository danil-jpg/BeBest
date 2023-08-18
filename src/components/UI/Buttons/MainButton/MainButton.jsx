import React from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainButton = ({ children, to = '', style = {}, size = 'middle', type = 'red', onClick }) => {
    // sizes = small, middle, big;
    // types = color,transparent
    // width = full, content
    return (
        <Link
            to={to}
            className={`main-btn main-btn_${size} main-btn_${type} main-btn_width-${width}`}
            style={style}
            onClick={
                onClick
                    ? onClick
                    : () => {
                          console.log('not callback');
                      }
            }>
            <span>{children}</span>
        </Link>
    );
};

MainButton.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['small', 'middle']),
    type: PropTypes.oneOf(['red', 'white']),
    width: PropTypes.oneOf(['full', 'content']),
    onClick: PropTypes.func,
};


export default MainButton;

