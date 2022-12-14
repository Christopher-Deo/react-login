import React, { useState } from 'react';

import './App.css';
import {Login} from './Login';
import {Register} from './Register';
import {Header} from './Header';
import {Navigation} from './Navigation';



function App() {
  // const [currentForm, setCurrentForm] = useState('Login')
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      
      <Login/>
    </div>
  );
}

export default App;
