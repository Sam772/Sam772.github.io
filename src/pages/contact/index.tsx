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
      <div className='justify-center flex mt-6'>
        <ContactCard
          line1="sssam.8390@gmail.com"
          line2="LinkedIn"
          url='https://www.linkedin.com/in/samir-shahid-44737b222/'
        />
      </div>
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
