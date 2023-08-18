import React, { Suspense } from 'react';
import './Main.scss';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ContainerMain from '../ContainerMain/ContainerMain';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Catalog = React.lazy(() => import('../../pages/Catalog/Catalog'));
const Teacher = React.lazy(() => import('../../pages/Teachers/Teacher'));
const Article = React.lazy(() => import('../../pages/Article/Article'));
const Registration = React.lazy(() => import('../../pages/Registranion/Registration'));

const Main = (props) => {
    return (
        <main className='main'>
            <Breadcrumbs />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='teacher' element={<Teacher />} />
                    <Route path='article' element={<Article />} />
                    <Route path='registration/*' element={<Registration />} />
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
