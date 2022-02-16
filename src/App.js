import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <>
      <Router>
        <div className="absolute h-full w-full bg-[url('/beams.png')] bg-cover bg-center bg-fixed">
          <Navbar />
          <Routes>
            <Route path = "/about" element = {<About />} />
            <Route exact path = "/" element = {<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
