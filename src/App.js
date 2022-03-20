import React from 'react';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';
import SideBar from './features/SideBar/SideBar';

import './App.css';

function App() {



  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
      <Feed />
      <SideBar />
      </div>
      
    </div>
  );
}

export default App;
