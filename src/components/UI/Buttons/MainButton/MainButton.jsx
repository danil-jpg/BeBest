import React from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

<<<<<<< HEAD
const MainButton = ({
    children,
    to = '',
    style = {},
    size = 'middle',
    type = 'red',
    width = 'full',
    onClick,
}) => {

=======
const MainButton = ({ children, to = '', style = {}, size = 'middle', type = 'red', onClick }) => {
>>>>>>> master
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
<<<<<<< HEAD
                            console.log('not callback');
                        }
            }
        >
=======
                          console.log('not callback');
                      }
            }>
>>>>>>> master
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

