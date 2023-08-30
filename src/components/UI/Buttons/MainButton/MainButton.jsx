import React, { useEffect, useRef } from 'react';
import './MainButton.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MainButton = ({
    children,
    to = '',
    style = {},
    size = 'middle',
    type = 'red',
    maxWidth = '100%',
    onClick,
    mb = '0px',
    setTooltip = () => {}
}) => {

    // sizes = small, middle, big;
    // types = color,transparent
    let btn = useRef();

    const styles = {
        maxWidth: `${maxWidth}`,
        margin: `0 0 ${mb}`,
        ...style,
    }

    useEffect(() => {
        btn.current.addEventListener('mouse', () => { console.log('test') });
    }, [btn]);

    const onMouseEnterHandler = () => { setTooltip(true) }
    const onMouseLeaveHandler = () => { setTooltip(false) }

    return (
        <Link
            ref={btn}
            to={to}
            className={`main-btn main-btn_${size} main-btn_${type}`}
            style={styles}
            onClick={
                onClick
                    ? onClick
                    : () => {
                        console.log('not callback');
                    }
            }
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
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
    maxWidth: PropTypes.string,
    onClick: PropTypes.func,
    mb: PropTypes.string

};


export default MainButton;

