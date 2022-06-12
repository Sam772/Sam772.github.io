import React from 'react';
import './index.css';

interface IProps {
  line1: string
  line2: string
  url?: string
}

const Contact = () => {
  return (
    <div className='website-config'>
      <p className='contact-title'>
        Contact
      </p>
      <div className='justify-center flex'>
        <ContactCard
          line1="sssam.8390@gmail.com"
          line2="LinkedIn"
          url='https://www.linkedin.com/in/samir-shahid-44737b222/'
        />
      </div>
    </div>
  );
};

const ContactCard = (props: IProps) => {
  return (
    <div className='contact-card-body'>
      <p className="contact-card-desc">{props.line1}</p>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <p className="contact-card-desc">{props.line2}</p>
      </a>
    </div>
  )
} 

export default Contact;
