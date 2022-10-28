import React, { useState } from 'react';

import './App.css';
import {Login} from './Login';
import {Register} from './Register';
import {Header} from './Header';




function App() {
  // const [currentForm, setCurrentForm] = useState('Login')
  return (
    <div className="App">
      <Header/>
      
      <Login/>
    </div>
  );
}

export default App;
