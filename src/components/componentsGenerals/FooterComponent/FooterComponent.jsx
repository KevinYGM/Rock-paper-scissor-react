import React from 'react'
import './FooterComponent.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className='social-media-container'>
        <div className='social-media'><FaLinkedinIn /> </div>
        <div className='social-media'> <BsGithub /> </div>
        <div className='social-media'><BiLogoReact /> </div>
        <div className='social-media'><FaXTwitter /> </div>
      </div>

      <span className='credits'>Programmed and designed by Kevin González Montenegro in 2023</span>
      
      <span className='brand'>KYGM APP</span>
     </footer>
  )
}
