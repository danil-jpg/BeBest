import React, { Suspense } from 'react';
import './Main.scss';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
// import Forum from '../../pages/Forum/Forum';

const Home = React.lazy(() => import('../../pages/Home/Home'));
const Catalog = React.lazy(() => import('../../pages/Catalog/Catalog'));
const Teacher = React.lazy(() => import('../../pages/Teachers/Teacher'));
const Article = React.lazy(() => import('../../pages/Article/Article'));
const Registration = React.lazy(() => import('../../pages/Registranion/Registration'));
// const OnlineLesson = React.lazy(() => import('../../pages/OnlineLesson/OnlineLesson'));

const Forum = React.lazy(() => import('../../pages/Forum/Forum'));
const Account = React.lazy(() => import('../../pages/Account/Account.jsx'));

const Main = () => {
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
                    <Route path='account/*' element={<Account />} />
                    <Route path='forum/*' element={<Forum />} />
                    {/* <Route path='lesson' element={<OnlineLesson />} /> */}
                </Routes>
            </Suspense>
        </main>
    );
};

export default Main;
