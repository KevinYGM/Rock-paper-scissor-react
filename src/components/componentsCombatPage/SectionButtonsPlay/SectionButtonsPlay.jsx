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
    pointsRoundCom,
    ctrlActionButtons,
    setCtrlActionButtons,
    counterRock,
    counterPaper,
    counterScissor,
    setCounterRock,
    setCounterPaper,
    setCounterScissor,
    setCounterRockCom,
    setCounterPaperCom,
    setCounterScissorCom,
    counterRockCom,
    counterPaperCom,
    counterScissorCom,
    roundsWithoutButtonClick, 
    setRoundsWithoutButtonClick,
    roundsWithoutAttackSpecialCom, 
    setRoundsWithoutAttackSpecialCom,
    buttonSpecial,
    buttonSpecialCom
    
}) => {


/*------------component states and references----------------------------- */
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [playPlayerInformation, setPlayPlayerInformation] = useState("");
  const [playComInformation, setPlayComInformation] = useState("");
  const prevControlRoundsState = useRef(controlRoundsState);
  const prevbuttonSpecialCom = useRef(buttonSpecialCom);
  

/*----------Component Const Variables----------------------------------------*/
  const playsDCom = playsDataCom(counterRockCom, counterPaperCom, counterScissorCom);
  


  /*----------Component Logic Functions----------------------------------------*/
  const getRandomIndex = () => {
    return Math.floor(Math.random() * playsDataPlayer.length);
  };
  
  

  const activePlay = (indexPlayPlayer = getRandomIndex()) => {
      const playPlayer = playsDataPlayer[indexPlayPlayer]
      const playCom = comElection();
      
      prevControlRoundsState.current = controlRoundsState;
      setCtrlActionButtons(true);
      setImagesPlayPlayer([playPlayer.photo, playPlayer.photo, playPlayer.photo]);
      setImagesPlayCom([playCom.photo, playCom.photo, playCom.photo]);
     
     
      const firstTimeoutId = setTimeout(() => {
        setStartAction(true);
        setGeneralPlayCom(playCom.icon);
        setGeneralPlayPlayer(playPlayer.icon);
        setPlayPlayerInformation(playPlayer);
        setPlayComInformation(playCom);
        setControlRoundsPrev((prevRounds) => prevRounds + 1);
        prevbuttonSpecialCom.current = buttonSpecialCom;
        buttonSpecialCom && setRoundsWithoutAttackSpecialCom(-1);
        pauseGeneralState === trebol && setPauseGeneralState(allHands);
        }, 1500);
      
      const secondTimeoutId = setTimeout(() => {
        setSelectPlay(true);
        setControlRoundsState(controlRoundsPrev);
        setRoundsWithoutButtonClick(prevRounds => prevRounds + 1);
        setRoundsWithoutAttackSpecialCom(prevRounds => prevRounds + 1);
        setInteractiveTexts(`<p>Waiting for your next move...</p>`);
        setCtrlActionButtons(false);
        buttonSpecialCom && setButtonSpecialCom(false);
        setStartAction(false);
      }, 4000); 
  
    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    }
  };

  

  const comElection = () => {
    if (!buttonSpecialCom) {
      const availablePlays = playsDCom.filter(play => play.counter > 0);
      const randomFilterOptions = Math.floor(Math.random() * availablePlays.length);
      const selectedPlay = availablePlays[randomFilterOptions];
  
      selectedPlay.counter--;

      switch (selectedPlay.name) {
        case 'Rock Com':
          setCounterRockCom(selectedPlay.counter);
          break;
        case 'Paper Com':
          setCounterPaperCom(selectedPlay.counter);
          break;
        case 'Scissor Com':
          setCounterScissorCom(selectedPlay.counter);
          break;
        default:
          break;
      }
      
      return selectedPlay;

    }else{
      const randomCompleteOptions = Math.floor(Math.random() * playsDCom.length);
      const selectedPlay = playsDCom[randomCompleteOptions];
      return selectedPlay;
    }
  };

 
/*----------Component Functions for Design----------------------------------------*/
  
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
                  : 'inherit'}}>
      </div>);
    }

    return progressBar;
  };


  /*---------- useEffects that contribute to the logic of component----------*/

  useEffect(()=>{
    //It is responsible for disabling ButtonSpecialCom
    if(!buttonSpecialCom){
      if (roundsWithoutAttackSpecialCom >= 6) {
        const randomValue = Math.random();
        const randomBoolean = randomValue > 0.5;
        setButtonSpecialCom(randomBoolean);
      }}
    // eslint-disable-next-line 
  },[buttonSpecialCom, controlRoundsState]);



  useEffect(()=>{
    //Created to eliminate the restriction of movements with the extension-mode 
    if(controlRoundsState >= 16){
      setCounterRock(5);
      setCounterPaper(5);
      setCounterScissor(5);
      setCounterRockCom(5);
      setCounterPaperCom(5);
      setCounterScissorCom(5);
    } 
   // eslint-disable-next-line 
  },[controlRoundsState]);



  useEffect(() => {
    /* Responsible for sending and controlling the information sent to the 
    BattleHistory component*/
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
      playPlayerInformation: playPlayerInformation,
      playComInformation: playComInformation,
      controlRoundsState: prevControlRoundsState.current,
      buttonSpecialCom: prevbuttonSpecialCom.current,
      buttonSpecial: buttonSpecial
    };
  
    setHistoryItems((prevItems) => [newItem, ...prevItems]);
    // eslint-disable-next-line
  },[controlRoundsState]);



  useEffect(() => {
    /*Responsible for reactivating the interval effect in PlayBattle Component*/
    if(selectPlay){
      setSelectPlay(false);
      setImagesPlayPlayer(playsDataPlayer.map(play => play.photo));
      setImagesPlayCom(playsDCom.map(play => play.photo));
    }
  // eslint-disable-next-line
  }, [selectPlay, playsDataPlayer, setImagesPlayPlayer, playsDCom, setImagesPlayCom]);




  /*---------- useEffects that contribute to the Design of component----------*/

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






/*---------------- component JSX structure ---------------------- */ 
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
    
{/*------------------ Section Buttons Play-----------------*/}
    <div className='section-buttons-play'>

    <div className="container-buttons">
      <button className='button-play'>
        <i></i>
        <i></i>
        <span
         onClick={() => {  
          if (stateCombat && !ctrlActionButtons && counterRock !== 0) {
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
            if (stateCombat && !ctrlActionButtons && counterPaper !== 0) {
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
            if (stateCombat && !ctrlActionButtons && counterScissor !== 0) {
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


{/*------------------ Section Special Button-----------------*/}
    <div className='container-button-play-special'>
      <button className='button-play-special' >
        <i></i>
        <i></i>
        <span
        onClick={() => {
        if (stateCombat && !ctrlActionButtons && roundsWithoutButtonClick >= 6) {
          setButtonSpecial(true);
          setRoundsWithoutButtonClick(-1);
          activePlay();
        }
      }}>
          <img src={allHands} alt={"Aleatory"}/>
        </span>
      </button>
    </div>
  </div>
)}

  




    