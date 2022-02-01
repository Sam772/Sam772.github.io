import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import About from './pages/about'
import Home from './pages/home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = "/about" component = {About} />
          <Route exact path = "/" component = {Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
