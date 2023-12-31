import React from 'react';
import { Navbar } from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import './components/pages/Home';
import './components/pages/LoginSignUp.css'
import {About,Services } from './components/pages';
import { Home } from './components/pages';
import Contact from './components/pages/Contact';

function App(){

  

  return (
    <div className="App">
      <div><Navbar/></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login/SignUp" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;