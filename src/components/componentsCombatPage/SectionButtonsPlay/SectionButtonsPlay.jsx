import './SectionButtonsPlay.css';
import React, { useEffect, useState} from 'react';
import allHands from '../../../images/interfaz-images/all-hands.png';
import surrender from '../../../images/interfaz-images/surrender.png';
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';


export const SectionButtonsPlay = 
({  characterCom, 
    setOpenModalFinal,
    setImagesPlayPlayer,
    setImagesPlayCom, 
    playsDataPlayer,
    playsDataCom,
    setGeneralPlayPlayer,
    setGeneralPlayCom,
    setControlRoundsState,
    setInteractiveTexts,
    setControlRoundsPrev,
    controlRoundsPrev,
    setResultState,
    setResultComState,
    setWinnerCombat,
    setMessageFinal,
    stateCombat,
    setStateCombat,
    setButtonSpecial,
    setButtonSpecialCom
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
    
    const firstTimeoutId = setTimeout(() => {
      setGeneralPlayCom(playsDataCom[playCom].icon);
      setGeneralPlayPlayer(playsDataPlayer[playPlayer].icon);
      setControlRoundsPrev((prevRounds) => prevRounds + 1);
    }, 1500);
    
    const secondTimeoutId = setTimeout(() => {
    setSelectPlay(true);
    setControlRoundsState(controlRoundsPrev);
    setResultComState(allHands);
    setResultState(allHands);
    setInteractiveTexts(`<p>Waiting for your next move...</p>`);
    }, 4000);

  return () => {
    clearTimeout(firstTimeoutId);
    clearTimeout(secondTimeoutId);
  };
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
          stateCombat ? setOpenModalSurrender(true) : setOpenModalSurrender(false);
          }}>
          <img src={surrender} alt={"Surrender"}/>
        </span>
      </span>
      <ModalSurrender
              openModalSurrender = { openModalSurrender }
              setOpenModalSurrender = { setOpenModalSurrender }
              setOpenModalFinal = { setOpenModalFinal }
              characterCom = { characterCom }
              setWinnerCombat = { setWinnerCombat }
              setMessageFinal = { setMessageFinal }
              setStateCombat = {setStateCombat}
              />
      </button>
    
{/*------------------ Button Section buttons play-----------------*/}
    <div className='section-buttons-play'>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
        onClick={() => {  setButtonSpecial(false);
                          activePlay(0);
                        }}
        >✊🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
       onClick={() => { setButtonSpecial(false);   
                        activePlay(1);
                      }}
>✌🏼</span>
        
      </button>
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
        onClick={() => {  setButtonSpecial(false);
                          activePlay(2);
                          
                        }}
        >✌🏼</span>
      </button>
    </div>


{/*------------------ Button Section Special Button-----------------*/}
    <button className='button-play-special'>
      <i></i>
      <i></i>
      <span
      onClick={() => {  setButtonSpecial(true);
                        activePlay();
                      }}>
        <img src={allHands} alt={"Aleatory"}/>
      </span>
    </button>
  </div>
)
}

  




    