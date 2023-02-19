import React from 'react'
import clash from '../../images/clash.png'
import bot from '../../images/bot.png'
import events from '../../images/events.png'
import portfolio from '../../images/portfolio.png'
import ragnarok from '../../images/ragnarok.png'
import aslidingpumpkin from '../../images/aslidingpumpkin.png'
import tetris from '../../images/tetris.png'
import endlessgoose from '../../images/endlessgoose.png'
import blank from '../../images/blank.png'
import './index.css'

interface IProps {
  img: string
  title: string
  desc: string
  url?: string
}

const Projects = () => {
  return (
    <div className="website-config">
      <p className='project-title'>
        Projects
      </p>
      <div className='project-games'>
        <p className='project-subheading'>
            Games
        </p>
        <div className="card-wrapper">
            <Card 
              img={clash}
              title="Clash"
              desc="A 3D online networked turn-based multiplayer rpg game developed using Unity and Mirror's networking library."
              url="https://github.com/Sam772/Clash"
            />
            <Card
              img={aslidingpumpkin}
              title="A Sliding Pumpkin"
              desc="Project made for HackTheMidlands7, a 2D singleplayer game made with Unity and C#."
              url="https://github.com/IBN5101/HTM7-project"
            />
            <Card
              img={tetris}
              title="Tetris"
              desc="The classic 2D arcade game known as Tetris remade in Unity and C#."
              url="https://github.com/Sam772/Tetris"
            />
            <Card
              img={ragnarok}
              title="Ragnarok"
              desc="A prototype for an experimental 2D singleplayer rpg game being developed in Unity and C#."
              url="https://github.com/Sam772/Ragnarok"
            />
            <Card
              img={endlessgoose}
              title="Endless Goose"
              desc="Project made for Astonhack8, an endless 2D singleplayer shooting game developed in Unity and C#."
              url="https://github.com/Sam772/Ragnarok"
            />
        </div>
      </div>
      <div className='website'>
        <p className='project-subheading'>
          Websites
        </p>
        <div className='card-wrapper'>
            <Card 
              img={events}
              title="Events Website"
              desc="A website created to book Aston events, created with HTML, CSS, Bootstrap, JavaScript, SQL and PHP."
              url="https://github.com/Sam772/Events-Website"
            />
            <Card 
              img={portfolio}
              title="Portfolio Website"
              desc="A website created to showcase my work, made with React, TypeScript and TailwindCSS."
              url="https://github.com/Sam772/Sam772.github.io"
            />
        </div>
      </div>
      <div className='other'>
        <p className='project-subheading'>
          Other
        </p>
        <div className='card-wrapper'>
            <Card 
              img={bot}
              title="Discord Music Bot"
              desc="A discord bot created with Discord.js and Node.js for listening to music through YouTube, containing several commands."
              url="https://github.com/Sam772/Discord-Music-Bot"
            />
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
  )
}

const Card = (props: IProps) => {
  return (
    <div className='card-body'>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.img} className='card-img' alt='img'/>
        <p className="card-title">{props.title}</p>
        <p className="card-desc">{props.desc}</p>
      </a>
    </div>
  )
} 

export default Projects