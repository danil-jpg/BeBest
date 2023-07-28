import React, { Suspense } from 'react';
import './Main.scss';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Catalog = React.lazy(() => import('../../pages/Catalog/Catalog'));

const Main = (props) => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </Suspense>
    );
};

export default Main;
