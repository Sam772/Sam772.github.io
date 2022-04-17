import React from 'react'
import clash from '../../images/clash.png'
import bot from '../../images/bot.png'
import events from '../../images/events.png'
import portfolio from '../../images/portfolio.png'
import blank from '../../images/blank.png'
import './index.css'

interface ICard {
  img: string
  title: string
  desc: string
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
            desc="An 3D online networked turn based multiplayer rpg game developed using Unity and Mirror's networking library"
          />
          <Card 
            img={bot}
            title="Discord Music Bot"
            desc="A discord bot created with discord.js for listening to music, containing several commands"
          />
          <Card 
            img={events}
            title="Events Website"
            desc=" A website created to book aston events, created with html, css, bootstrap, javascript, sql and php"
          />
          <Card 
            img={portfolio}
            title="Portfolio Website"
            desc="A website created with react, typescript and tailwind css"
          />
      </div>
      <div className='mb-16'/>
    </div>
  )
}

const Card = (props: ICard) => {
  return (
    <div className='card-body'>
      <img src={props.img} className='card-img' alt='img'/>
      <p className="card-title">{props.title}</p>
      <p className="card-desc">{props.desc}</p>
    </div>
  )
} 

export default Projects