import React from 'react'
import './Summary.css';
import rockFace from '../../images/Williams-face.png';
/*import scissorFace from '../images/James-face.png';*/
import paperFace from '../../images/Melissa-face.png';
import vs from '../../images/vs.png'; 
import markRed from '../../images/redMarker.png'; 
import markGreen from '../../images/greenMarker.png'; 

export const Summary = () => {
  return (
    <div className="summary">
      <div className="summary_character-player summary-character">
        <div className="img-character-player img-character">
          <img src={rockFace} alt="Character Rock" />
        </div>
        <span className="name-character-player name-character">Williams Rock</span>
      </div>

      <div className="summary_points-player points">
      <div className="container-point">
          <img src={markGreen} alt="Mark Player" />
          <span>5</span>
        </div>
      </div>

      <div className="summary_separation">
        <img src={vs} alt="Versus" />
      </div>

      <div className="summary_points-com points">
        <div className="container-point">
          <img src={markRed} alt="Mark Com" />
          <span>2</span>
        </div>
      </div>

      <div className="summary_character-com summary-character">
        <span className="name-character-com name-character">Melissa Paper</span>
        <div className="img-character-com img-character">
          <img src={paperFace} alt="Character Scissor" />
        </div>
       
      </div>
    </div>
  )
}
