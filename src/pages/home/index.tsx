import React from 'react';
import './index.css'
import image from '../../images/github-image.png'

const Home = () => {
  return (
    <div className='website-config'>
      <p className='home-title'>
        Hi, I'm Samir
      </p>
      <div className='group px-4 py-4 rounded-full w-40 h-40 mx-auto bg-gray-200 relative'>
        <img src={image} alt="img"/>
      </div>
      <p className='home-title'>
        Second Year Computer Science Student at Aston University
      </p>
    </div>
  );
};

export default Home;
