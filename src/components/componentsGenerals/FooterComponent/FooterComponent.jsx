import React from 'react'
import './FooterComponent.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className='social-media-container'>
        <div className='social-media'><BiLogoFacebook />  </div>
        <div className='social-media'><FaXTwitter /> </div>
        <div className='social-media'><FaLinkedinIn /> </div>
        <div className='social-media'> <AiFillYoutube /> </div>
      </div>

      <span className='credits'>Programmed and designed by Kevin González Montenegro in 2023</span>
      
      <span className='brand'>KYGM APP</span>
     </footer>
  )
}
