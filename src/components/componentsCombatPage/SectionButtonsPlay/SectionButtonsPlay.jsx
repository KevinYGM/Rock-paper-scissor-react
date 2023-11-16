import './SectionButtonsPlay.css';
import React, { useEffect, useState} from 'react';
import allHands from '../../../images/interfaz-images/all-hands.png';
import surrender from '../../../images/interfaz-images/surrender.png';
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';



export const SectionButtonsPlay = 
({ openModalFinal, 
    setOpenModalFinal 
  }) => {
/*------------states Component----------------------------- */
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);

  
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
        <span onClick={()=> {
          !openModalFinal ? setOpenModalSurrender(true) : setOpenModalSurrender(false);
          }}>
          <img src={surrender} alt={"Surrender"}/>
        </span>
      </span>
      <ModalSurrender
              openModalSurrender = { openModalSurrender }
              setOpenModalSurrender = { setOpenModalSurrender }
              setOpenModalFinal = { setOpenModalFinal } 
              />
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

  




    