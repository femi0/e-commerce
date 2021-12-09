import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/header/header.component'; 
 
function App() {
  return (
    <div>
        <Header />
    <Routes>
      <Route exact path='/' element ={<HomePage/>}/>
      <Route path='/shop' element ={<ShopPage/>}/>
        </Routes>
    </div>
  );

}

export default App;
