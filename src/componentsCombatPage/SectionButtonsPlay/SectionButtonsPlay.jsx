import './SectionButtonsPlay.css';
import React, { useEffect } from 'react'
import allHands from '../../images/all-hands.png';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";

export const SectionButtonsPlay = () => {

  useEffect(()=> {

const buttons = document.querySelectorAll('.button-play');

buttons.forEach((button) => {
  button.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    button.style.setProperty('--x', x + 'deg');
  });
});

}, []);

return (
  <div className='buttons-play-container'>
    <button className='surrender'>
      <Link to= '/welcome'><AiFillCloseCircle /></Link>
    </button>
    <button className='button-play'>
      <i></i>
      <i></i>
      <span>✊🏼</span>
      <span>Rock</span>
    </button>
    <button className='button-play'>
      <i></i>
      <i></i>
      <span>✋🏼</span>
      <span>Paper</span>
    </button>
    <button className='button-play'>
      <i></i>
      <i></i>
      <span>✌🏼</span>
      <span>Scissor</span>
    </button>
    <button className='button-play-special'>
      <div>
        <img src={allHands} alt={"Aleatory"}/>
      </div>
      <span>Aleatory</span>
    </button>
  </div>
)
}

  




    