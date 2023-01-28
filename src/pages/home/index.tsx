import React from 'react';
import './index.css'
import image from '../../images/github-image.jpg'

const Home = () => {
  return (
    <div className='website-config'>
      <h1 className='home-about-me-title'>
        About Me
        <div className='home-about-me-content mt-10'>
        <p className='home-about-me-content'>
          Hi I'm Samir,
        </p>
        <div className='group px-2 py-2 rounded-full w-40 h-40 mx-auto bg-gray-200 relative'>
          <img className='rounded-full' src={image} alt="img"/>
        </div>
        <p className='home-about-me-content'>
          I'm a Third Year Computer Science Student at Aston University, 
          currently doing a placement year where I am working as a 
          Quality Assurance Analyst at ICONICS UK. I've always been 
          passionate about technology though I have other interests such
          as fitness and travelling.
        </p>
        </div>
      </h1>
      <footer>
        <div className="fixed inset-x-0 bottom-10 mt-16 text-center text-gray-500 text-sm font-light">
          © Copyright 2022 Samir Shahid{" "}
          <span className="text-gray-200 font-light">
            All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
