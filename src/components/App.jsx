import React from 'react';
import './App.scss';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import Main from './common/Main/Main';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
