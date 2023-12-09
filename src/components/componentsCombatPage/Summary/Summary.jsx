import React, { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Summary.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';

/*Images*/
import vs from '../../../images/interfaz-images/vs.png'; 
import markRed from '../../../images/interfaz-images/redMarker.png'; 
import markBlue from '../../../images/interfaz-images/blueMarker.png'; 




export const Summary = () => {

  /*--------------Data imported from useContext-------------------------*/
  const { characterCom, characterPlayer } = useContext(MyGeneralContext);

  const { comMark, playerMark } = useContext(ContextCombat);

/*---------------- component JSX structure ---------------------- */ 
  return (
    <div className="summary">

      {/* Section Character Player */}
      <div className="summary_character-player summary-character">
        <div className="img-character-player img-character">
          <img src={characterPlayer.facePhoto} alt={characterPlayer.name} />
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
                    classNames="character-slider" >

              
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
                    classNames="character-slider" >
              <span>{ comMark }</span>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      {/* Section Character Com */}
      <div className="summary_character-com summary-character">
        <span className="name-character-com name-character">{characterCom.name}</span>
        <div className="img-character-com img-character">
          <img src={characterCom.facePhoto} alt={characterCom.name} />
        </div>
       </div>
      </div>
    )}
