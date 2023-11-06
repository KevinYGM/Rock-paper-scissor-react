import './SectionButtonsPlay.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import allHands from '../../images/all-hands.png';
import surrender from '../../images/surrender.png';



export const SectionButtonsPlay = () => {

useEffect(()=> {
// Function for the MouseMove effect of the buttons
  const buttons = document.querySelectorAll('.surrender, .button-play, .button-play-special');

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
  {/*------------------ Button Surrender-----------------*/}
    <button className='surrender'>
      <i></i>
      <i></i>
      <span>
        <Link to= '/welcome'>
          <img src={surrender} alt={"Surrender"}/>
        </Link>
      </span>
    </button>
    
{/*------------------ Button Section buttons play-----------------*/}
    <div className='section-buttons-play'>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span>✊🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span>✋🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span>✌🏼</span>
      </button>
    </div>


{/*------------------ Button Section Special Button-----------------*/}
    <button className='button-play-special'>
      <i></i>
      <i></i>
      <span>
        <img src={allHands} alt={"Aleatory"}/>
      </span>
    </button>
  </div>
)
}

  




    