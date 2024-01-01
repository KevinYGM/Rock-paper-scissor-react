/*Generals Imports*/
import React, { useContext, useEffect } from 'react';
import './Summary.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';

/*Efects Transition*/
import { CSSTransition, SwitchTransition } from 'react-transition-group';

/*Images*/
import vs from '../../../images/interfaz-images/vs.png'; 
import markRed from '../../../images/interfaz-images/redMarker.png'; 
import markBlue from '../../../images/interfaz-images/blueMarker.png'; 

/*Sounds*/
import summaryMark from '../../../sounds/summaryMark.mp3';


export const Summary = () => {

  /*--------------Data imported from useContext-------------------------*/
  const { characterCom, characterPlayer, recordVictory, recordLose, volumeSounds } = useContext(MyGeneralContext);

  const { 
    isFirstRender, setIsFirstRender,
    playAgainState, setPlayAgainState, 
    comMark, 
    playerMark, 
    positivePoint, 
    positivePointCom, 
    } = useContext(ContextCombat);


 
/*------useEffect for the Audio of the Component---------*/
  useEffect(()=>{
    if(isFirstRender || playAgainState){
      setIsFirstRender(false);
      setPlayAgainState(false);
      return;
    }

    const audioMark = new Audio(summaryMark);
    audioMark.currentTime = 0;
    audioMark.volume = volumeSounds / 100;
    audioMark.play();
    // eslint-disable-next-line 
  },[playerMark, comMark]);

/*---------------- component JSX structure ---------------------- */ 
  return (
    <div className="summary">

      {/* Section Character Player */}
      <div className="summary_character-player summary-character">
        <div className="img-character-player img-character">
          <img src={characterPlayer.facePhoto} alt={characterPlayer.name} />
          <div className="summary-record summary-record-player">
            {recordVictory}
          </div>
        </div>
        
        <span className="name-character-player name-character">{characterPlayer.name}</span>
      </div>

      {/* Section Points Player */}
      <div id='point-player' className="summary_points-player points">
        <div className="container-point">
          <img src={markBlue} alt="Mark Player" />
          <SwitchTransition>
            <CSSTransition 
                key={ playerMark }
                timeout={200}
                classNames={positivePoint ? "point-slider-up" : "point-slider-down"}>

              
              <span>{ playerMark }</span>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      {/* Section Separation */}
      <div className="summary_separation">
        <img src={vs} alt="Versus" />
      </div>

      {/* Section Points Com */}
      <div className="summary_points-com points">
        <div className="container-point">
          <img src={markRed} alt="Mark Com" />
          <SwitchTransition>
            <CSSTransition 
                    key={ comMark }
                    timeout={200}
                    classNames={positivePointCom ? "point-slider-up" : "point-slider-down"}>
              <span>{ comMark }</span>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      {/* Section Character Com */}
      <div className="summary_character-com summary-character">
        <span className="name-character-com name-character">{characterCom.name}</span>
        <div className="img-character-com img-character">
          <div className="summary-record summary-record-com">
            {recordLose}
          </div>
          <img src={characterCom.facePhoto} alt={characterCom.name} />
        </div>
       </div>
      </div>
    )}
