import React, { useEffect, useState, useRef, useContext} from 'react';
import './SectionButtonsPlay.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';

/*Sounds*/
import buttonsPlaySound from '../../../sounds/buttonsPlay.mp3';
import cronomether from '../../../sounds/cronometro.mp3';
import clickSound from '../../../sounds/sound-1.mp3';
import clickWrongSound from '../../../sounds/swoosh-sound.mp3';
import buttonSpecialSound from '../../../sounds/epic-hybrid.mp3';

/*Images*/
import allHands from '../../../images/interfaz-images/all-hands.png';
import trebol from '../../../images/interfaz-images/trebol.png';
import surrender from '../../../images/interfaz-images/surrender.png';

/*Modals*/
import { ModalSurrender } from '../../componentsModals/ModalSurrender/ModalSurrender';


export const SectionButtonsPlay = () => {

  /*--------------Data imported from useContext-------------------------*/
  const { 
    /*States with their Updaters (Alphabetical Order)*/
    counterPaper, setCounterPaper,
    counterRock, setCounterRock,
    counterScissor, setCounterScissor,
    counterPaperCom, setCounterPaperCom,
    counterRockCom, setCounterRockCom,
    counterScissorCom, setCounterScissorCom,
    /*Only States (Alphabetical Order)*/  
    characterCom, 
    characterPlayer,
    volumeSounds,
    /*Only Data (Alphabetical Order)*/  
    playsDataCom,
    playsDataPlayer,
    } = useContext(MyGeneralContext);

  const {  
    /*States with their Updaters (Alphabetical Order)*/
    buttonSpecial, setButtonSpecial,
    buttonSpecialCom, setButtonSpecialCom,
    controlRoundsPrev, setControlRoundsPrev,
    controlRoundsState, setControlRoundsState,
    ctrlActionButtons, setCtrlActionButtons,
    generalPlayCom, setGeneralPlayCom,
    generalPlayPlayer, setGeneralPlayPlayer,
    imagesPlayPlayer, setImagesPlayPlayer,
    pauseGeneralState, setPauseGeneralState,
    roundsWithoutAttackSpecialCom, setRoundsWithoutAttackSpecialCom,
    roundsWithoutButtonClick, setRoundsWithoutButtonClick,
    selectPlay, setSelectPlay,
    
     /*Only States (Alphabetical Order)*/  
    isActivateCount,
    isFirstRender,
    messageFinal,
    playAgainState,
    pointsRoundCom,
    pointsRoundPlayer,
    resultComState,
    resultState,
    stateCombat,
    
    /*Only Updaters (Alphabetical Order)*/
    setHistoryItems,
    setImagesPlayCom,
    setInteractiveTexts,
    setPositivePoint,
    setPositivePointCom,
    setStartAction,
    
  } = useContext(ContextCombat);


/*-------------local States and Refs of this Component---------------------------------*/
  const [ openModalSurrender, setOpenModalSurrender ] = useState (false);
  const [playPlayerInformation, setPlayPlayerInformation] = useState("");
  const [playComInformation, setPlayComInformation] = useState("");
  const prevControlRoundsState = useRef(controlRoundsState);
  const prevbuttonSpecialCom = useRef(buttonSpecialCom);
  
  

/*-------------local Variables of this Component---------------------------------*/
  const playsDCom = playsDataCom(counterRockCom, counterPaperCom, counterScissorCom);
  const audioWrong = new Audio(clickWrongSound);


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


  const selectButtonsPlay = (counterElement, setCounterElement, indexElement) => {
    const audioButtonsPlay = new Audio(buttonsPlaySound);
    
    if (stateCombat && !ctrlActionButtons && counterElement !== 0) {
        audioButtonsPlay.currentTime = 0.2;
        audioButtonsPlay.volume = volumeSounds / 100;
        audioButtonsPlay.play();
        setButtonSpecial(false);
        setCounterElement(prevCounter => prevCounter - 1);
        setPositivePoint(true);
        setPositivePointCom(true);
        activePlay(indexElement);
    }else{
        audioWrong.currentTime = 0;
        audioWrong.volume = volumeSounds / 100;
        audioWrong.play();
    }
  };

  const selectButtonSurrender = () => {
    const audioButtonSurrender = new Audio(clickSound);

    if(stateCombat && controlRoundsState >= 4){
      audioButtonSurrender.currentTime = 0;
      audioButtonSurrender.volume = volumeSounds / 100;
      audioButtonSurrender.play();
      setOpenModalSurrender(true);
    }else{
      setOpenModalSurrender(false);
    }
   }

   const selectButtonSpecial = () => { 
    const audioButtonSpecial = new Audio(buttonSpecialSound);
    
    if (stateCombat && !ctrlActionButtons && roundsWithoutButtonClick >= 6) {
      audioButtonSpecial.currentTime = 0;
      audioButtonSpecial.volume = volumeSounds / 100;
      audioButtonSpecial.play();
      setButtonSpecial(true);
      setRoundsWithoutButtonClick(-1);
      activePlay();
    }
  }

  const selectButtonDisabled = () => {
    audioWrong.currentTime = 0;
    audioWrong.volume = volumeSounds / 100;
    audioWrong.play();
  }

 
/*----------Component Functions for Design----------------------------------------*/
  
  const renderProgressBar = (counterElement) => {
    const progressBar = [];
    const maxBars = Math.min(counterElement, 7);
  
    for (let i = 0; i < maxBars; i++) {
      progressBar.push(
        <div
          className="progress-bar-item"
          key={i}
          style={{
            background:
              counterElement === 1 || counterElement === 2
                ? 'var(--gradient-red)'
                : counterElement === 3 || counterElement === 4
                ? 'var(--gradient-yellow)'
                : counterElement >= 5 && counterElement <= 7
                ? 'var(--gradient-green)'
                : 'inherit'
          }}
        ></div>
      );
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
    BattleHistory Component*/
    if (isFirstRender || playAgainState) {
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
    /*It detects that round d of plays has ended and activates the transition 
    effect on the cards. */

    if (selectPlay) {
      setSelectPlay(false);
      setImagesPlayPlayer(playsDataPlayer.map(play => play.photo));
      setImagesPlayCom(playsDCom.map(play => play.photo));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectPlay, playsDataPlayer, playsDCom]);



  useEffect(() => {
    //It detects that round of plays has ended and activates the transition effect on the cards.

    !isActivateCount && (setSelectPlay(true));
    
  // eslint-disable-next-line
  }, [isActivateCount]);


  /*---------- useEffects that contribute to the Design of component----------*/

  useEffect(()=> {
    // Function for the MouseMove effect of the buttons
      const buttons = document.querySelectorAll('.surrender-play, .surrender-disabled , .button-play, .button-disabled, .button-special-play, .button-special-disabled');
  
      buttons.forEach((button) => {
        button.addEventListener('mousemove', e => {
          let rect = e.target.getBoundingClientRect();
          let x = e.clientX * 3 - rect.left;
          button.style.setProperty('--x', x + 'deg');
        });
      });
    }, []);


  useEffect(() => {
    /*Function that assigns and controls the interval effect sound in 
    playPlayer and playCom*/
    
    const [a, b, c] = imagesPlayPlayer;

    if ((a !== b || a !== c) && messageFinal === "") {
      const cronometherSound = new Audio(cronomether);
      cronometherSound.volume = (volumeSounds / 100) / 1.6;

      const restartCronometherSound = () => {
        cronometherSound.currentTime = 0;
        if (cronometherSound.play() !== undefined) {
          // Use a promise to handle the play
          cronometherSound.play()
            .then(() => {
              // Playback has started successfully
            })
            .catch((error) => {
              console.error('Error when playing:', error);
            });
          }
        };
    
      cronometherSound.addEventListener('ended', restartCronometherSound);
      if (cronometherSound.play() !== undefined) {
        // Use a promise to handle the play
        cronometherSound.play()
          .then(() => {
            // Playback has started successfully
          })
          .catch((error) => {
            console.error('Error when playing:', error);
          });
      }

      return () => {
        cronometherSound.removeEventListener('ended', restartCronometherSound);
        cronometherSound.play()
        .then(() => {
          // Playback has started successfully
          cronometherSound.pause();
        })
        .catch((error) => {
          console.error('Error when playing:', error);
        });
      };
    };
    // eslint-disable-next-line
  }, [imagesPlayPlayer, messageFinal, volumeSounds]);


    
/*---------------- Component JSX structure ---------------------- */ 
return (
  <div className='buttons-play-container'>

  {/*------------------ Button Surrender-----------------*/}
    <button className={`surrender-${stateCombat && controlRoundsState >= 4 ? 'play' : 'disabled'} button-${stateCombat && controlRoundsState >= 4 ? 'play' : 'disabled'}`}>
      <i></i>
      <i></i>
      <span>
        <span onClick={selectButtonSurrender}>
          <img src={surrender} alt={"Surrender"}/>
        </span>
      </span>
      <div  className={`gray-layer ${stateCombat && controlRoundsState <= 3 ? 'show' : ''}`}
            onClick={ selectButtonDisabled }>
         <div className="info-surrender">
            <div className='title-info'><strong>🚫</strong><p>It is only available when at least 3 rounds have passed.</p></div>
            <ul>
              <li><strong>🏳️</strong>It allows you to surrender, and withdraw from the game, giving the victory to your rival.</li>
            </ul>
          </div>
          <div className="support-base support-surrender"></div>
      </div>

      <ModalSurrender
              openModalSurrender = { openModalSurrender }
              setOpenModalSurrender = { setOpenModalSurrender }
              />
      <div className={`available ${stateCombat && controlRoundsState > 3 ? 'show' : ''}`}>✅ Available</div>
    </button>
      
    
{/*------------------ Section Buttons Play-----------------*/}
    <div className='section-buttons-play'>

    <div className="container-buttons">
      <button className={`button-${stateCombat && counterRock !== 0 ? 'play' : 'disabled'}`}>
        <i></i>
        <i></i>
        <span
         onClick={() => {selectButtonsPlay(counterRock, setCounterRock, 0)}}

          ><strong className="hand">✊🏼</strong>  
          <p>Rock</p></span>
            <div  className={`gray-layer ${stateCombat && counterRock === 0 ? 'show' : ''}`}
                  onClick={ selectButtonDisabled }></div>
          </button>
        <div className='progress-bar-container-btns-play'>
          {renderProgressBar(counterRock)}  
        </div>
      </div>

      <div className="container-buttons">
        <button className={`button-${stateCombat && counterPaper !== 0 ? 'play' : 'disabled'}`}>
          <i></i>
          <i></i>
          <span
          onClick={() => {selectButtonsPlay(counterPaper, setCounterPaper, 1)}}
        > <strong className="hand">✋🏼</strong>  
          <p>Paper</p></span>
          <div  className={`gray-layer ${stateCombat && counterPaper === 0 ? 'show' : ''}`}
                onClick={ selectButtonDisabled }></div>
        </button>
            <div className='progress-bar-container-btns-play'>
              {renderProgressBar(counterPaper)}  
            </div>
         </div>


      <div className="container-buttons">
        <button className={`button-${stateCombat && counterScissor !== 0 ? 'play' : 'disabled'}`}>
          <i></i>
          <span
             onClick={() => {selectButtonsPlay(counterScissor, setCounterScissor, 2)}}
          > <strong className="hand">✌🏼</strong>
            <p>Scissor</p></span>
            <div  className={`gray-layer ${stateCombat && counterScissor === 0 ? 'show' : ''}`}
                  onClick={ selectButtonDisabled }></div>
        </button>
        <div  className='progress-bar-container-btns-play'>
          { renderProgressBar(counterScissor) }
        </div>
      </div>
    </div>


{/*------------------ Section Special Button-----------------*/}
    <div className='container-button-play-special'>
      <button className={`button-special-${stateCombat && roundsWithoutButtonClick >= 6 ? 'play' : 'disabled'} button-${stateCombat && roundsWithoutButtonClick >= 6 ? 'play' : 'disabled'}`} >
        <i></i>
        <i></i>
        <span
        onClick={selectButtonSpecial}>
          <img src={allHands} alt={"Aleatory"}/>
        </span>
        <div  className={`gray-layer ${stateCombat && roundsWithoutButtonClick < 6 ? 'show' : ''}`}
              onClick={ selectButtonDisabled }>
          <div className="info-power-special">
            <div className='title-info'><strong>🚫</strong><p>Only available when your <strong>POWER SPECIAL BAR</strong> is charged. When you use it:</p></div>
            <p>The play will be random, and it will be free. (it will not depend on the available plays).</p>
            <ul>
              
              <li><strong>✅ </strong> If you win with {characterPlayer.type} <strong>+4</strong></li>
              <li><strong>✅ </strong> If you win without {characterPlayer.type} <strong>+3</strong></li>
              <li><strong>❌</strong> If you lose and you already had points previously <strong>-1</strong></li>
              
            </ul>
          </div>
          <div className="support-base support-special"></div>
        </div>
        <div className={`available ${stateCombat && roundsWithoutButtonClick >= 6 ? 'show' : ''}`}>✅ Available</div>
      </button>
      
    </div>
  </div>
)}

  




    