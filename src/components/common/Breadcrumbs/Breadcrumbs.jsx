import React from 'react';
import './Breadcrumbs.scss';
import ContainerMain from '../ContainerMain/ContainerMain';
import { Link, Route, Routes } from 'react-router-dom';

const Breadcrumbs = (props) => {
    return (
        <div className='breadcrumbs'>
            <ContainerMain>
                <div className='breadcrumbs__body'>
                    <Link to='' className='breadcrumbs__link'>
                        Главная
                    </Link>
                    <Routes>
                        <Route
                            path='/catalog'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    Список преподавателей
                                </Link>
                            }
                        />
                        <Route
                            path='/reg'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    Регистрация
                                </Link>
                            }
                        />
                        <Route
                            path='/auth'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    Авторизация
                                </Link>
                            }
                        />
                        <Route
                            path='/teacher'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    имя фамилия
                                </Link>
                            }
                        />
                        <Route
                            path='/article'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    Страница текстовая
                                </Link>
                            }
                        />
                    </Routes>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Breadcrumbs;
