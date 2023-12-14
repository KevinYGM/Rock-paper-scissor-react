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
    /*Only States (Alphabetical Order)*/  
    messageFinal,
    stateCombat,
    winnerCombat,

    /*Only Updaters (Alphabetical Order)*/
    setComMark,  
    setControlRoundsPrev,
    setControlRoundsState, 
    setGeneralPlayCom,
    setGeneralPlayPlayer,  
    setHistoryItems,  
    setImagesPlayCom,
    setImagesPlayPlayer,
    setInteractiveTexts,
    setIsActivateCount,
    setMessageFinal,  
    setOpenModalFinal, 
    setPauseGeneralState,
    setPlayAgainState,
    setPlayerMark,  
    setRoundsWithoutAttackSpecialCom,
    setRoundsWithoutButtonClick,  
    setStateCombat, 
    setWinnerCombat
  
  } = useContext(ContextCombat);
  
  
  const {
    /*Only States (Alphabetical Order)*/  
    characterCom,
    characterPlayer,

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
    setImagesPlayCom([backCardCom, backCardCom, backCardCom]);
    setImagesPlayPlayer([backCardPlayer, backCardPlayer, backCardPlayer]);
    setGeneralPlayCom(undefined);
    setGeneralPlayPlayer(undefined);
    setPlayAgainState(true);
    setIsFirstRender(true);
    setOpenModalFinal(false);
    setWinnerCombat({});
    setStateCombat(true);
    setMessageFinal("");
    setIsActivateCount(true);
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
  }
          
  useEffect(() => {
  /*Controls the audio during the appearance of the final modal*/
    if(isFirstRender){
      setIsFirstRender(false);
      return
    }

    const handleEndedAudio = () => {
      audioBackground.play();
    }

    if(messageFinal === '💔 YOU HAVE LOST 💔' || messageFinal === '🏳️ YOU GAVE UP 🏳️'){
      audioLose.play();
      audioLose.addEventListener('ended', handleEndedAudio);

    return () => {
      audioLose.removeEventListener('ended', handleEndedAudio);
        audioBackground.volume = 0.1;
        audioBackground.play();
        audioLose.pause();
        audioLose.currentTime = 0;
        audioBackground.pause();
        audioBackground.currentTime = 0;
      }
    }else{
      audioVictoryVoice.play();
      audioVictory.play();
      audioVictory.addEventListener('ended', handleEndedAudio);

    return () => {
      audioVictory.removeEventListener('ended', handleEndedAudio);
        audioBackground.volume = 0.1;
        audioBackground.play();
        audioLose.pause();
        audioLose.currentTime = 0;
        audioBackground.pause();
        audioBackground.currentTime = 0;
      };
    }
    // eslint-disable-next-line 
  },[messageFinal]);






/*---------------- component JSX structure ---------------------- */ 
  return (
    <>
      <div className={`modal-final ${!stateCombat ? 'show' : ''}`}>
        <h2 className="title">{ messageFinal }</h2>
        <div className="img-winner">
          <img src={winnerCombat.winnerPhoto} alt={winnerCombat.name + "Winner"} />
        </div>
        <div className="container-buttons">
          <Link to= '/welcome'
                onClick={()=> {setOpenModalFinal(false)}}
                >Go Back To Start</Link>
          <Link
              onClick={playAgain}
              >Play Again</Link>
        </div>
      </div>
    </>
  );
};