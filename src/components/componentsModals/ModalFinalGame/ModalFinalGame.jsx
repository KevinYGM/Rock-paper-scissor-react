import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';
import { ContextCombat } from '../../../ContextCombat';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Sounds*/
import loseGameSound from '../../../sounds/ambient-piano.mp3';
import victoryGameSound from '../../../sounds/electronic-drum.mp3';
import victoryVoiceSound from '../../../sounds/congratulations.mp3';
import backgroundCombatSound from '../../../sounds/backgroundCombat.mp3';

/*Images*/
import trebol from '../../../images/interfaz-images/trebol.png';
import backCardPlayer from '../../../images/interfaz-images/card-player.png'; 
import backCardCom from '../../../images/interfaz-images/card-computer.png';

import blueMarkerPlayer from '../../../images/interfaz-images/blueMarker.png';
import redMarkerCom from '../../../images/interfaz-images/redMarker.png';


/*React-icons*/
import { FaRepeat } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";


export const ModalFinalGame = () => {

 /*-------------local States and Refs of this Component---------------------------------*/

 const [isFirstRender, setIsFirstRender] = useState(true);
 

/*-------------local Variables of this Component---------------------------------*/
 const audioLose = new Audio(loseGameSound);
 const audioBackground = new Audio(backgroundCombatSound);
 const audioVictoryVoice = new Audio(victoryVoiceSound);
 const audioVictory = new Audio(victoryGameSound);

  /*--------------Data imported from useContext-------------------------*/
  const { 
  
    /*states Complete*/
    controlRoundsState, setControlRoundsState, 

    /*Only States (Alphabetical Order)*/  
    comMark,
    messageFinal,
    playerMark,
    stateCombat,
    winnerCombat,

    /*Only Updaters (Alphabetical Order)*/
    setComMark,  
    setControlRoundsPrev,
    setCurrentPosition,
    setExtraRounds,
    setGeneralPlayCom,
    setGeneralPlayPlayer,  
    setHistoryItems,  
    setImagesPlayCom,
    setImagesPlayPlayer,
    setInteractiveTexts,
    setLoading,
    setMessageFinal,  
    setOpenModalFinal, 
    setPauseGeneralState,
    setPlayAgainState,
    setPlayerMark,  
    setProgressLoad,
    setRoundsWithoutAttackSpecialCom,
    setRoundsWithoutButtonClick,  
    setStateCombat, 
    setWinnerCombat
  
  } = useContext(ContextCombat);
  
  
  const {
    /*Only States (Alphabetical Order)*/  
    characterCom,
    characterPlayer,
    volumeMusic,

    /*Only Updaters (Alphabetical Order)*/
    setCounterPaper,
    setCounterPaperCom,
    setCounterRock,
    setCounterRockCom,
    setCounterScissor,
    setCounterScissorCom
  } = useContext(MyGeneralContext);


/*---------- Function that contribute to the logic of component----------*/
  const playAgain = () => {
    setCurrentPosition(0);
    setImagesPlayCom([backCardCom, backCardCom, backCardCom]);
    setImagesPlayPlayer([backCardPlayer, backCardPlayer, backCardPlayer]);
    setGeneralPlayCom(undefined);
    setGeneralPlayPlayer(undefined);
    setPlayAgainState(true);
    setIsFirstRender(true);
    setOpenModalFinal(false);
    setWinnerCombat({});
    setStateCombat(true);
    setProgressLoad(0);
    setMessageFinal("");
    setLoading(true);
    setComMark(0);
    setPlayerMark(0);
    setHistoryItems([]);
    setRoundsWithoutAttackSpecialCom(0);
    setRoundsWithoutButtonClick(0);
    setControlRoundsPrev(2);
    setControlRoundsState(1);
    setPauseGeneralState(trebol);
    setInteractiveTexts(`<p>Let's go for victory, Good Luck!!</p>`);
    setCounterPaper(characterPlayer.powerPaper);
    setCounterPaperCom(characterCom.powerPaper);
    setCounterRock(characterPlayer.powerRock);
    setCounterRockCom(characterCom.powerRock);
    setCounterScissor(characterPlayer.powerScissor);
    setCounterScissorCom(characterCom.powerScissor);
    setExtraRounds(false);
  }
          
  useEffect(() => {
  /*Controls the audio during the appearance of the final modal*/
    if(isFirstRender){
      setIsFirstRender(false);
      return
    }

    const handleEndedAudio = () => {
      audioBackground.volume= volumeMusic / 100;
      audioBackground.play();
    }

    if(messageFinal === '💔 YOU HAVE LOST 💔' || messageFinal === '🏳️ YOU GAVE UP 🏳️'){
      audioLose.volume = volumeMusic / 100;
      audioLose.play();
      audioLose.addEventListener('ended', handleEndedAudio);

    return () => {
      audioLose.removeEventListener('ended', handleEndedAudio);
      audioLose.pause();
      audioBackground.pause();
      }
    }else{
      audioVictoryVoice.volume = volumeMusic / 100;
      audioVictory.volume = volumeMusic / 100;
      audioVictoryVoice.play();
      audioVictory.play();
      audioVictory.addEventListener('ended', handleEndedAudio);

    return () => {
      audioVictory.removeEventListener('ended', handleEndedAudio);
      audioVictory.pause();
      audioBackground.pause();
      };
    }
    // eslint-disable-next-line 
  },[messageFinal]);



/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-final ${!stateCombat ? 'show' : ''}`}>
        <h2 className="title-final"
            style={{background: 
              messageFinal === "🎉 CONGRATULATIONS 🎉" ? 'var(--gradient-green-transp)'
              : messageFinal === "💔 YOU HAVE LOST 💔" ? 'var(--gradient-red-transp-2)'
              : 'var(--gradient-black-transp)'}}>{ messageFinal }</h2>

        <div className="result-game-container">
          <div className="round-final">Round {controlRoundsState - 1}</div>
            <div className="result-game">
            <div className="player-mark-container container">
              <img src={blueMarkerPlayer} alt="" />
              <span>{playerMark}</span>
            </div>
            <strong>-</strong>
            <div className="com-mark-container container">
              <img src={redMarkerCom} alt="" />
              <span>{comMark}</span>
            </div>

          </div>
        </div>
        <div className="img-winner">
          <img src={winnerCombat.winnerPhoto} alt={winnerCombat.name + "Winner"} />
        </div>
        <div className="container-buttons">
          <Link to= '/'
                onClick={()=> {setOpenModalFinal(false)}}
                ><span>Go Back To Start</span><RiArrowGoBackFill /></Link>
          <Link
              onClick={playAgain}
              ><span>Play Again</span><FaRepeat /></Link>
        </div>
      </div>
    </>
  );
};