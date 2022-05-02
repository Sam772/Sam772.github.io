import React from 'react';
import './index.css'
import image from '../../images/github-image.png'

const Home = () => {
  return (
    <div className='website-config'>
      <p className='home-title'>
        Hi, I'm Samir
      </p>
      <div className='group [transform:translateZ(0)] px-4 py-2 rounded-full overflow-hidden w-40 h-40 mx-auto bg-gray-200 relative before:absolute before:bg-slate-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500'>
        <img className='image-style' src={image} alt="img"/>
      </div>
      <p className='home-title'>
        Second Year Computer Science Student at Aston University
      </p>
    </div>
  );
};

export default Home;
