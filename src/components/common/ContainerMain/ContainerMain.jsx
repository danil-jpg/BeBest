import React from 'react';
import './ContainerMain.scss';

const ContainerMain = ({ children, style = {} }) => {
    return (
        <div style={style} className='container'>
            {children}
        </div>
    );
};

export default ContainerMain;
