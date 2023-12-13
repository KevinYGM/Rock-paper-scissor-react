import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ModalFinalGame.css';
import { ContextCombat } from '../../../ContextCombat';

/*Sounds*/
import loseGameSound from '../../../sounds/ambient-piano.mp3';
import victoryGameSound from '../../../sounds/electronic-drum.mp3';
import victoryVoiceSound from '../../../sounds/congratulations.mp3';
import backgroundCombatSound from '../../../sounds/backgroundCombat.mp3';


export const ModalFinalGame = () => {

 /*-------------local States and Refs of this Component---------------------------------*/

 const [isFirstRender, setIsFirstRender] = useState(true);

/*-------------local Variables of this Component---------------------------------*/
 const audioLose = new Audio(loseGameSound);
 const audioBackground = new Audio(backgroundCombatSound);
 const audioVictoryVoice = new Audio(victoryVoiceSound);
 const audioVictory = new Audio(victoryGameSound);

  /*--------------Data imported from MyContext-------------------------*/
  const { setOpenModalFinal, 
          stateCombat,
          winnerCombat,
          messageFinal } = useContext(ContextCombat);
          
  useEffect(() => {
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
  },[messageFinal])

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
          <Link>Play Again</Link>
        </div>
      </div>
    </>
  );
};