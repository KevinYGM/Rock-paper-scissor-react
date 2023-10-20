import './App.css';
import React from 'react';
import allHands from './images/all-hands.png';
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

function App() {
  return (
    <>
     <header className='header'>
      <span className='brand'>KYGM APP</span><span>🪨✂️🧻</span>
    </header>
     <div className="title">
        <h1>ROCK, PAPER OR SCISSOR</h1>
        <div>
          <img src={allHands} alt="All Hands" />
        </div>
      </div>
     <div className='select-character'>SELECT CHARACTER</div>
     <div className="start-game">
        <div className="btn-container">
          <button className="btn-start-game">Start Game</button>
        </div>
      </div>
     <footer className="footer">
      <span className='brand'>KYGM APP</span>
      <div className='social-media-container'>
        <div className='social-media'><BiLogoFacebook />  </div>
        <div className='social-media'><FaXTwitter /> </div>
        <div className='social-media'><FaLinkedinIn /> </div>
        <div className='social-media'> <AiFillYoutube /> </div>
      </div>
     </footer>

         
    
    
    </>
   
  );
}

export default App;
