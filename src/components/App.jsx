import React from 'react';
import './App.scss';
import Footer from './common/Footer/Footer.jsx';
import Header from './common/Header/Header.jsx';
import Main from './common/Main/Main.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Routes>
                    <Route index element={<Header home={true} />} />
                    <Route path='/catalog' element={<Header />} />
                </Routes>
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
