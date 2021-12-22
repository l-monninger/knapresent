import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginContext, LoginProvider } from './Login/LoginProvider';
import { Xmas2021 } from './Presents/Xmas2021';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="xmas-2021" element={<Xmas2021/>}/>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
