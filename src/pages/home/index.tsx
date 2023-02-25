import React from 'react';
import './index.css'
import image from '../../images/github-image.jpg'
import fiverrimage from '../../images/fiverrimg2.png'

interface IProps {
  img: string
  title: string
  desc: string
  url?: string
}

const Home = () => {
  return (
    <div className='website-config'>
      <h1 className='home-about-me-title'>
        About Me
      </h1>
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
          passionate about technology which is why I am pursuing a career
          in this field. I also have other interests such as fitness and 
          travelling to see different cultures.
        </p>
        <div className='fiverr-content'>
          <p className='home-about-me-content'>
            Furthermore, I have my own business on Fiverr, this business
            involves making 2D Unity games and writing Unity scripts for
            clients, please check out my Fiverr profile if this interests 
            you, link is below. Also check out my Unity projects on the
            projects page to see the kind of work I do.
          </p>
          <div className='fiverr-card-wrapper'>
            <FiverrCard 
              img={fiverrimage}
              title="Programming and Tech Seller"
              desc="Unity 2D Game Developer"
              url="https://www.fiverr.com/samir_shahid77"
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="mt-16 text-center text-gray-500 text-sm font-light mb-10">
          © Copyright 2022 Samir Shahid{" "}
          <span className="text-gray-200 font-light">
            All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

const FiverrCard = (props: IProps) => {
  return (
    <div className='fiverr-card-body'>
      <img src={props.img} className='fiverr-card-img' alt='img'/>
      <p className="fiverr-card-title">{props.title}</p>
      <p className="fiverr-card-desc">{props.desc}</p>
      <a href ={props.url} className="group fiverr-gig-button-hover-effect" target="_blank" rel="noopener noreferrer">
        <div className='fiverr-gig-button-text-hover-effect'>
          Check out my Gigs
        </div>
      </a>
    </div>
  )
} 

export default Home;
