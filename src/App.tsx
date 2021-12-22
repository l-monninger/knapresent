import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginContext, LoginProvider } from './Login/LoginProvider';
import { Xmas2021 } from './Presents/Xmas2021';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Xmas2021/>
      </LoginProvider>
    </div>
  );
}

export default App;
