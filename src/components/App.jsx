import React from 'react';
import './App.scss';
import Footer from './common/Footer/Footer.jsx';
import Header from './common/Header/Header.jsx';
import Main from './common/Main/Main.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div className='wrapper'>
            <Routes>
                <Route index element={<Header home={true} />} />
                <Route path='/*' element={<Header />} />
            </Routes>
            <Main />
            <Footer />
        </div>
    );
};

export default App;
