import React from 'react';
import './App.scss';
import Footer from './common/Footer/Footer.jsx';
import Header from './common/Header/Header.jsx';
import Main from './common/Main/Main.jsx';

const App = () => {
  return (
    <div className='wrapper'>
      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
