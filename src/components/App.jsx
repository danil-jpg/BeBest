import React from 'react';
import './App.scss';
import Footer from './common/Footer/Footer.jsx';
import Header from './common/Header/Header.jsx';
import Main from './common/Main/Main.jsx';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
