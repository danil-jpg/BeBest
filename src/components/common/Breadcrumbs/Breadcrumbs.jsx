import React from 'react';
import './Breadcrumbs.scss';
import ContainerMain from '../ContainerMain/ContainerMain';
import { Link, Route, Routes } from 'react-router-dom';

const Breadcrumbs = (props) => {
    return (
        <div className='breadcrumbs'>
            <ContainerMain>
                <Routes>
                    <Route index element={<></>} />
                    <Route
                        path='/catalog'
                        element={
                            <div className='breadcrumbs__body'>
                                <Link to='' className='breadcrumbs__link'>
                                    Главная
                                </Link>
                                <Link to='' className='breadcrumbs__link'>
                                    Список преподавателей
                                </Link>
                            </div>
                        }
                    />
                    <Route
                        path='/reg'
                        element={
                            <div className='breadcrumbs__body'>
                                <Link to='' className='breadcrumbs__link'>
                                    Главная
                                </Link>
                                <Link to='' className='breadcrumbs__link'>
                                    Регистрация
                                </Link>
                            </div>
                        }
                    />
                    <Route
                        path='/auth'
                        element={
                            <div className='breadcrumbs__body'>
                                <Link to='' className='breadcrumbs__link'>
                                    Главная
                                </Link>
                                <Link to='' className='breadcrumbs__link'>
                                    Авторизация
                                </Link>
                            </div>
                        }
                    />
                </Routes>
            </ContainerMain>
        </div>
    );
};

export default Breadcrumbs;
