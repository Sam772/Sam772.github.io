import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Router>
      <div className="absolute h-full w-full bg-[url('/src/images/beams.png')] bg-cover bg-center bg-fixed no-scrollbar overflow-y-auto">
        <div className="absolute h-full w-full bg-[url('/src/images/grid.svg')] [background-position:calc(100%+5px)_calc(100%+5px)] bg-fixed" />
          <div className="absolute w-full bg-[url('/src/images/beams.png')] bg-cover bg-center bg-fixed">
            <div className="absolute h-full w-full bg-[url('/src/images/grid.svg')] [background-position:calc(100%+5px)_calc(100%+5px)] bg-fixed" />
              <Navbar />
                <Routes>
                  <Route exact path = "/" element = {<Home />} />
                  <Route path = "/about" element = {<About />} />
                  <Route path = "/projects" element = {<Projects />} />
                </Routes>
          </div>
      </div>
      </Router>
    </>
  );
}

export default App;
