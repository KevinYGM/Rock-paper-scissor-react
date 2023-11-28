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
    buttonSpecialCom,
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
    pointsRoundCom,
    ctrlActionButtons,
    setCtrlActionButtons,
    counterRock,
    counterPaper,
    counterScissor,
    setCounterRock,
    setCounterPaper,
    setCounterScissor,
    startAction
}) => {


/*------------component states and references----------------------------- */
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const prevControlRoundsState = useRef(controlRoundsState);
  const [roundsWithoutButtonClick, setRoundsWithoutButtonClick] = useState(0);
  const [roundsWithoutAttackSpecialCom, setRoundsWithoutAttackSpecialCom] = useState(0);
  

  const activePlay = (playPlayer = getRandomIndex()) => {
    const playCom = comElection();

    if(buttonSpecialCom){
      setButtonSpecialCom(false);
    }
      
        prevControlRoundsState.current = controlRoundsState;
        setCtrlActionButtons(true);
        setImagesPlayPlayer([playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo, playsDataPlayer[playPlayer].photo]);
        setImagesPlayCom([playsDataCom[playCom].photo, playsDataCom[playCom].photo, playsDataCom[playCom].photo]);
        
      
      const firstTimeoutId = setTimeout(() => {
        setGeneralPlayCom(playsDataCom[playCom].icon);
        setGeneralPlayPlayer(playsDataPlayer[playPlayer].icon);
        setControlRoundsPrev((prevRounds) => prevRounds + 1);
        setStartAction(true);
        if(pauseGeneralState === trebol) {
          setPauseGeneralState(allHands);
        }
        
      }, 1500);
      
      const secondTimeoutId = setTimeout(() => {
        setSelectPlay(true);
        setStartAction(false);
        setControlRoundsState(controlRoundsPrev);
        setRoundsWithoutButtonClick(prevRounds => prevRounds + 1);
        setRoundsWithoutAttackSpecialCom(prevRounds => prevRounds + 1);
        setInteractiveTexts(`<p>Waiting for your next move...</p>`);
        setCtrlActionButtons(false);
      }, 4000);
  
    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    };
  };

 
  const renderProgressBarSpecial = () => {
    const progressBar = [];

    const maxBars = Math.min(roundsWithoutButtonClick, 6);

    for (let i = 0; i < maxBars; i++) {
      progressBar.push(<div key={i} className="progress-bar-item-special"></div>);
    }

    return progressBar;
};


const renderProgressBar = (counterElement) => {
  const progressBar = [];

  const maxBars = Math.min(counterElement, 7);

  for (let i = 0; i < maxBars; i++) {
    progressBar.push(
    <div  key={i} 
          className="progress-bar-item"
          style={{
            background:
                  counterElement === 1 || counterElement === 2
                ? 'var(--gradient-red)'
                : counterElement === 3 || counterElement === 4
                ? 'var(--gradient-yellow)'
                : counterElement >= 5 && counterElement <= 7
                ? 'var(--gradient-green)'
                : 'inherit'
           }}>
    </div>);
  }

  return progressBar;
};




  const getRandomIndex = () => {
    return Math.floor(Math.random() * playsDataPlayer.length);
  };
  

  const comElection = () => {
    
    if (roundsWithoutAttackSpecialCom >= 6) {
      const randomValue = Math.random();
      const randomBoolean = randomValue > 0.5;
      setButtonSpecialCom(randomBoolean);
    }

    return Math.floor(Math.random() * playsDataCom.length);
  }
  
  // useEffect(()=>{
  //  console.log(comElection());
  // // eslint-disable-next-line 
  // },[comElection]);
  
  useEffect(()=>{
    buttonSpecialCom && setRoundsWithoutAttackSpecialCom(0);
  // eslint-disable-next-line 
  },[buttonSpecialCom]);

  




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

useEffect(()=>{
  if(controlRoundsState >= 16){
    setCounterRock(5)
    setCounterPaper(5)
    setCounterScissor(5)
  } 
 // eslint-disable-next-line 
},[controlRoundsState])


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
          stateCombat && controlRoundsState >= 3 ? setOpenModalSurrender(true) : setOpenModalSurrender(false);
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

    <div className="container-buttons">
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
         onClick={() => {  
          if (!ctrlActionButtons && counterRock !== 0) {
            setButtonSpecial(false);
            setCounterRock(prevCounter => prevCounter - 1);
            activePlay(0);
            }
         }}
          >✊🏼</span>
        </button>
        <div className='progress-bar-container-btns-play'>
          {renderProgressBar(counterRock)}  
        </div>
      </div>


      <div className="container-buttons">
        <button className='button-play'>
          <i></i>
          <i></i>
          <span
          onClick={() => {  
            if (!ctrlActionButtons && counterPaper !== 0) {
              setButtonSpecial(false);
              setCounterPaper(prevCounter => prevCounter - 1);
              activePlay(1);
            }
          }}
        >✋🏼</span>
        </button>
        <div className='progress-bar-container-btns-play'>
          {renderProgressBar(counterPaper)}  
        </div>
      </div>


      <div className="container-buttons">
        <button className='button-play'>
          <i></i>
          <i></i>
          <span
          onClick={() => {  
            if (!ctrlActionButtons && counterScissor !== 0) {
              setButtonSpecial(false);
              setCounterScissor(prevCounter => prevCounter - 1);
              activePlay(2);
            }
          }}
          >✌🏼</span>
        </button>
        <div  className='progress-bar-container-btns-play'
              >
          {renderProgressBar(counterScissor)} 
        </div>
      </div>
    </div>


{/*------------------ Button Section Special Button-----------------*/}
    <div className='container-button-play-special'>
      <button className='button-play-special' >
        <i></i>
        <i></i>
        <span
        onClick={() => {
        if (!ctrlActionButtons && roundsWithoutButtonClick >= 6) {
          setButtonSpecial(true);
          setRoundsWithoutButtonClick(-1);
          activePlay();
        }
      }}>
          <img src={allHands} alt={"Aleatory"}/>
        </span>
      </button>
      <div className='progress-bar-container'>
        {renderProgressBarSpecial()}
      </div>
    </div>
   
  </div>
)
}

  




    