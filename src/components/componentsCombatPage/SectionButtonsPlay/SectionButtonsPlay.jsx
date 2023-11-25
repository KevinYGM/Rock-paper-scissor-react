import React, { useEffect, useState, useRef} from 'react';
import './SectionButtonsPlay.css';

/*Images*/
import allHands from '../../../images/interfaz-images/all-hands.png';
import trebol from '../../../images/interfaz-images/trebol.png';
import surrender from '../../../images/interfaz-images/surrender.png';

/*Modals*/
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';



export const SectionButtonsPlay = 
({  characterCom,
    characterPlayer,
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
    setWinnerCombat,
    setMessageFinal,
    stateCombat,
    setStateCombat,
    setButtonSpecial,
    setButtonSpecialCom,
    setHistoryItems,
    generalPlayPlayer,
    generalPlayCom,
    resultState,
    resultComState,
    controlRoundsState,
    pauseGeneralState,
    setPauseGeneralState,
    selectPlay,
    setSelectPlay,
    setStartAction,
    pointsRoundPlayer,
    pointsRoundCom
}) => {


/*------------component states and references----------------------------- */
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const prevControlRoundsState = useRef(controlRoundsState);


  const activePlay = (playPlayer = getRandomIndex()) => {
    const playCom = getRandomIndex();
        if(pauseGeneralState === trebol) {
          setPauseGeneralState(allHands);
        }
        prevControlRoundsState.current = controlRoundsState;
        setImagesPlayPlayer([playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo]);
        setImagesPlayCom([playsDataCom[playCom].photo, playsDataCom[playCom].photo, playsDataCom[playCom].photo]);
      
      const firstTimeoutId = setTimeout(() => {
        setGeneralPlayCom(playsDataCom[playCom].icon);
        setGeneralPlayPlayer(playsDataPlayer[playPlayer].icon);
        setControlRoundsPrev((prevRounds) => prevRounds + 1);
        setStartAction(true);
        
      }, 1500);
      
      const secondTimeoutId = setTimeout(() => {
        setSelectPlay(true);
        setStartAction(false);
        setControlRoundsState(controlRoundsPrev);
        setInteractiveTexts(`<p>Waiting for your next move...</p>`);
      }, 4000);
  
    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    };
  };



  const getRandomIndex = () => {
    return Math.floor(Math.random() * playsDataPlayer.length);
  };
  

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


useEffect(() => {
  if (isFirstRender) {
    setIsFirstRender(false);
    return;
  }

  const newItem = {
    pointsRoundPlayer: pointsRoundPlayer,
    pointsRoundCom: pointsRoundCom,
    resultState: resultState,
    resultComState: resultComState,
    characterPlayerFace: characterPlayer.facePhoto,
    characterComFace: characterCom.facePhoto,
    generalPlayPlayer: generalPlayPlayer,
    generalPlayCom: generalPlayCom,
    controlRoundsState: prevControlRoundsState.current
  };

  setHistoryItems((prevItems) => [newItem, ...prevItems]);

  // eslint-disable-next-line
},[controlRoundsState]);


useEffect(() => {
  if(selectPlay){
    setSelectPlay(false);
    setImagesPlayPlayer(playsDataPlayer.map(play => play.photo));
    setImagesPlayCom(playsDataCom.map(play => play.photo));
  }
// eslint-disable-next-line
}, [selectPlay, playsDataPlayer, setImagesPlayPlayer, playsDataCom,setImagesPlayCom]);






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
       >✋🏼</span>
        
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

  




    