import React, { Suspense } from 'react';
import './Main.scss';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ContainerMain from '../ContainerMain/ContainerMain';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Catalog = React.lazy(() => import('../../pages/Catalog/Catalog'));
const Teacher = React.lazy(() => import('../../pages/Teacher/Teacher'));

const Main = (props) => {
    return (
        <main className='main'>
            <Breadcrumbs />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='teacher' element={<Teacher />} />
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
