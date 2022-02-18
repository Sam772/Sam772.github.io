import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Router>
        <div className="absolute h-full w-full bg-[url('/beams.png')] bg-cover bg-center bg-fixed">
          <Navbar />
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/projects" element = {<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
