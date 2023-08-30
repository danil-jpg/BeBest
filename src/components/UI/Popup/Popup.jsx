import React from 'react';
import './Popup.scss';


const Popup = ({ children, style, maxWidth, top, left, show, setShow }) => {

    let styles = {
        ...style,
        maxWidth,
        top,
        left,
    }

    return (
        <div className={`${show ? 'popup active' : 'popup'}`} style={styles}>
            {children}
            <button className='popup__close-btn' onClick={() => { setShow(false) }}>
                <span></span>
            </button>
        </div>
    );
};

Popup.propTypes = {
    // image: PropTypes.string,
    // title: PropTypes.string,
    // text: PropTypes.string,
    // maxWidth: PropTypes.string,
    // style: PropTypes.object
};

export default Popup;
