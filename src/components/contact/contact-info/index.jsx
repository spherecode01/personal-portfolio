import React from 'react';
import "./style.scss";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";



const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <p>Let's collaborate to bring your vision to life and create something extraordinary together.
        Reach out today, and let's embark on an exciting journey of digital transformation!</p>
        <div className="contact-option">
            <FaPhoneAlt />
            <span className='text'>+91 8401379264</span>
        </div>
        <div className="contact-option">
            <MdEmail />
            <span className='text'>codasphere@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo;