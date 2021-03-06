import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component'; 
import {auth, createUserProfileDocument  } from './firebase/firebase.utils';
 
class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth =null;

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot =>{ 
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        
        });
    }

    this.setState({currentUser: userAuth});
    
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
          <Header currentUser ={this.state.currentUser}/>
      <Routes>
        <Route exact path='/' element ={<HomePage/>}/>
        <Route path='/shop' element ={<ShopPage/>}/>
        <Route path='/signin' element ={<SignInAndSignUpPage/>}/>
          </Routes>
      </div>
    );
  }
  

}

export default App;
