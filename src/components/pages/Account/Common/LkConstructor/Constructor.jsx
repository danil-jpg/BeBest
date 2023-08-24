import React from 'react';
import './Constractor.scss';
import Title from '../../../../UI/Title/Title';
import ContainerMain from '../../../../common/ContainerMain/ContainerMain';

const Constructor = ({ leftContent, rightContent }) => {
    return (
        <ContainerMain>
            <Title>Личный кабинет</Title>
            <div className='lk'>
                <div className='lk__left'>{leftContent}</div>
                <div className='lk__right'>{rightContent}</div>
            </div>
        </ContainerMain>
    );
};

export default Constructor;
