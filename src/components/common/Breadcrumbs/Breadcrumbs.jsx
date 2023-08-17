import React from 'react';
import './Breadcrumbs.scss';
import ContainerMain from '../ContainerMain/ContainerMain';
import { Link, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

const Breadcrumbs = (props) => {
    const [user, setUser] = useState();
    const userId = useSelector((state) => state.userPageSlice.userId);
    const userList = useSelector((state) => state.catalogSlice.users);

    useEffect(() => {
        if (userId) {
            setUser({ ...userList.filter((el) => el.id === userId) }[0]);
        } else {
            const fetchData = async () => {
                const res = await axios.get('http://bebest.pp.ua/api/users/?populate=*');

                setUser({ ...res.data[0] });
            };

            fetchData();
        }
    }, [userId]);

    if (!user) {
        return <Loading />;
    }
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
                                    {user.username}
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
                        <Route
                            path='/registration1'
                            element={
                                <Link to='' className='breadcrumbs__link'>
                                    Регистрация
                                </Link>
                            }
                        />
                        <Route
                            path='/registration/registrationProposal?'
                            element=<Link to='' className='breadcrumbs__link'>
                                Регистрация
                            </Link>
                        />
                        <Route
                            path='/registration/RegistrationStudent1'
                            element=<Link to='' className='breadcrumbs__link'>
                                Регистрация
                            </Link>
                        />
                    </Routes>
                </div>
            </ContainerMain>
        </div>
    );
};

export default Breadcrumbs;
