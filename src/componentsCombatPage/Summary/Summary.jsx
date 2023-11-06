import React from 'react'
import './Summary.css';
import vs from '../../images/vs.png'; 
import markRed from '../../images/redMarker.png'; 
import markGreen from '../../images/greenMarker.png'; 

export const Summary = ({ characters }) => {
  return (
    <div className="summary">

      {/* Section Character Player */}
      <div className="summary_character-player summary-character">
        <div className="img-character-player img-character">
          <img src={characters[0].facePhoto} alt={characters[0].name} />
        </div>
        <span className="name-character-player name-character">Williams Rock</span>
      </div>

      {/* Section Points Player */}
      <div className="summary_points-player points">
        <div className="container-point">
          <img src={markGreen} alt="Mark Player" />
          <span>5</span>
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
          <span>2</span>
        </div>
      </div>

      {/* Section Character Com */}
      <div className="summary_character-com summary-character">
        <span className="name-character-com name-character">Melissa Paper</span>
        <div className="img-character-com img-character">
          <img src={characters[1].facePhoto} alt={characters[1].name} />
        </div>
       </div>

    </div>
  )
}
