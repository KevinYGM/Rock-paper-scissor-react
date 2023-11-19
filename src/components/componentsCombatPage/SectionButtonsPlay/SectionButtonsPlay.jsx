import './SectionButtonsPlay.css';
import React, { useEffect, useState} from 'react';
import allHands from '../../../images/interfaz-images/all-hands.png';
import surrender from '../../../images/interfaz-images/surrender.png';
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';


export const SectionButtonsPlay = 
({  openModalFinal, 
    setOpenModalFinal,
    setImagesPlayPlayer,
    setImagesPlayCom, 
    playsDataPlayer,
    playsDataCom
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


const activePlay = (playPlayer = getRandomIndex()) => {
  const playCom = getRandomIndex();
    setImagesPlayPlayer([playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo]);
    setImagesPlayCom([playsDataCom[playCom].photo, playsDataCom[playCom].photo, playsDataCom[playCom].photo]);

  const timeOutId = setTimeout(() => {
    setSelectPlay(true);
  }, 3000);

  return () => clearTimeout(timeOutId);
};


useEffect(() => {
  if(selectPlay){
    setSelectPlay(false);
    setImagesPlayPlayer(playsDataPlayer.map(play => play.photo));
    setImagesPlayCom(playsDataCom.map(play => play.photo));
    
  }
}, [selectPlay, playsDataPlayer, setImagesPlayPlayer, playsDataCom,setImagesPlayCom]);


const getRandomIndex = () => {
  return Math.floor(Math.random() * playsDataPlayer.length);
};



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
        onClick={() => activePlay(0)}
        >✊🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
       onClick={() => activePlay(1)}
        >✋🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
        onClick={() => activePlay(2)}
        >✌🏼</span>
      </button>
    </div>


{/*------------------ Button Section Special Button-----------------*/}
    <button className='button-play-special'>
      <i></i>
      <i></i>
      <span
      onClick={() => activePlay()}>
        <img src={allHands} alt={"Aleatory"}/>
      </span>
    </button>
  </div>
)
}

  




    