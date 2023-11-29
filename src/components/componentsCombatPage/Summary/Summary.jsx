import React from 'react'
import './Summary.css';

/*Images*/
import vs from '../../../images/interfaz-images/vs.png'; 
import markRed from '../../../images/interfaz-images/redMarker.png'; 
import markBlue from '../../../images/interfaz-images/blueMarker.png'; 


export const Summary = 
({  characterPlayer,
    characterCom,
    playerMark,
    comMark 
}) => {



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
      <div className="summary_points-player points">
        <div className="container-point">
          <img src={markBlue} alt="Mark Player" />
          <span>{ playerMark }</span>
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
          <span>{ comMark }</span>
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
