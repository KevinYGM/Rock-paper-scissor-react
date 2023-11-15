import React from 'react'
import './Summary.css';

import vs from '../../../images/interfaz-images/vs.png'; 
import markRed from '../../../images/interfaz-images/redMarker.png'; 
import markBlue from '../../../images/interfaz-images/blueMarker.png'; 

export const Summary = ({ 
  characters, 
  characterPlayer,
  characterCom }) => {
  return (
    <div className="summary">

      {/* Section Character Player */}
      <div className="summary_character-player summary-character">
        <div className="img-character-player img-character">
          <img src={characters[characterPlayer].facePhoto} alt={characters[characterPlayer].name} />
        </div>
        <span className="name-character-player name-character">{characters[characterPlayer].name}</span>
      </div>

      {/* Section Points Player */}
      <div className="summary_points-player points">
        <div className="container-point">
          <img src={markBlue} alt="Mark Player" />
          <span>3</span>
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
          <span>4</span>
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
  )
}
