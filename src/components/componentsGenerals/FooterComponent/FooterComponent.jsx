import React from 'react'
import './FooterComponent.css';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";

export const FooterComponent = () => {
  
   /*---------------- component JSX structure ---------------------- */  
  return (
    <footer className="footer">
      <div className='social-media-container'>
        <div className='social-media'><a href="https://www.linkedin.com/in/kevinygm" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></div>
        <div className='social-media'><a href="https://github.com/KevinYGM" target="_blank" rel="noreferrer"><BsGithub /></a></div>
        <div className='social-media'><a href="https://es.react.dev" target="_blank" rel="noreferrer"><BiLogoReact /></a></div>
        <div className='social-media'><a href="https://twitter.com/Kevin_YGM" target="_blank" rel="noreferrer"><FaXTwitter /></a></div>
      </div>

      <span className='credits'>Programmed and designed by Kevin González Montenegro in 2023</span>
      
      <span className='brand'>KYGM APP</span>
     </footer>
  )
}
