import './SectionButtonsPlay.css';
import React, { useEffect, useState} from 'react';
import allHands from '../../../images/interfaz-images/all-hands.png';
import surrender from '../../../images/interfaz-images/surrender.png';
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';

/*-----------------------Images Play-----------------------------------*/
import scissorPlayer from '../../../images/interfaz-images/scissor-play-player.png';
import paperPlayer from '../../../images/interfaz-images/paper-play-player.png';
import rockPlayer from '../../../images/interfaz-images/rock-play-player.png';
import scissorCom from '../../../images/interfaz-images/scissor-play-com.png';
import paperCom from '../../../images/interfaz-images/paper-play-com.png';
import rockCom from '../../../images/interfaz-images/rock-play-com.png';




export const SectionButtonsPlay = 
({  openModalFinal, 
    setOpenModalFinal,
    setImagesPlayPlayer,
    setImagesPlayCom, 
}) => {


/*------------states Component----------------------------- */
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);

  const [selectPlay, setSelectPlay] = useState(false);

  
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


const activePlay = (playPlayer) => {
  setImagesPlayPlayer([playPlayer, playPlayer, playPlayer]);

  const timeOutId = setTimeout(() => {
    setSelectPlay(true);
  }, 3000);

  return () => clearTimeout(timeOutId);
};

useEffect(() => {
  if(selectPlay){
    setImagesPlayPlayer([rockPlayer, paperPlayer, scissorPlayer]);
    setSelectPlay(false);
  }
}, [selectPlay]);


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
        <span
        onClick={() => activePlay(rockPlayer)}
        >✊🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
       onClick={() => activePlay(paperPlayer)}
        >✋🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
        onClick={() => activePlay(scissorPlayer)}
        >✌🏼</span>
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

  




    