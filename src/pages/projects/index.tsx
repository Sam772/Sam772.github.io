import React from 'react'
import clash from '../../images/clash.png'
import bot from '../../images/bot.png'
import events from '../../images/events.png'
import portfolio from '../../images/portfolio.png'
import blank from '../../images/blank.png'
import './index.css'

interface Props {
  img: string
  title: string
  desc: string
}

const Projects = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <p className='mt-8 text-white text-center text-3xl font-semibold sm:text-4xl'>
          Projects
        </p>
        <div className="flex items-center justify-between h-96">
          <div className="hidden md:block h-56">
            <div className="ml-10 flex items-baseline space-x-20">
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
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between h-96 mt-36">
          <div className="ml-10 flex items-baseline space-x-20">
            <Card 
              img={portfolio}
              title="Portfolio Website"
              desc="A website created with react, typescript and tailwind css"
            />
            <Card 
              img={blank}
              title="[INSERT TITLE]"
              desc="[INSERT TEXT]"
            />
            <Card 
              img={blank}
              title="[INSERT TITLE]"
              desc="[INSERT TEXT]"
            />
          </div>
        </div>
      </div>
      <div className='mb-16'/>
    </div>
  )
}

const Card = (props: Props) => {
  return (
    <div className='card-body'>
      <img src={props.img} className='card-img' alt='img'/>
      <p className="card-title">{props.title}</p>
      <p className="card-desc">{props.desc}</p>
    </div>
  )
} 

export default Projects