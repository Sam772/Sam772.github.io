import React from 'react'
import clash from '../../images/clash.png'
import bot from '../../images/bot.png'
import events from '../../images/events.png'
import portfolio from '../../images/portfolio.png'
import ragnarok from '../../images/ragnarok.png'
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
      <div className="card-wrapper">
          <Card 
            img={clash}
            title="Clash"
            desc="A 3D online networked turn-based multiplayer rpg game developed using Unity and Mirror's networking library."
            url="https://github.com/Sam772/Clash"
          />
          <Card 
            img={bot}
            title="Discord Music Bot"
            desc="A discord bot created with Discord.js and Node.js for listening to music through YouTube, containing several commands."
            url="https://github.com/Sam772/Discord-Music-Bot"
          />
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
          <Card
            img={ragnarok}
            title="Ragnarok"
            desc="An experimental 2D Singleplayer RPG game being developed in Unity and C#."
            url="https://github.com/Sam772/Ragnarok"
          />
      </div>
      <div className='mb-96'/>
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