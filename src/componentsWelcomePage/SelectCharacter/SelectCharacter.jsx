import React from 'react'
import './SelectCharacter.css';
import melissaPaper from '../../images/character-blue-paper.png';
import backPaper from '../../images/paper.png';
import backPaperHand from '../../images/paper-hand.png';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"

export const SelectCharacter = () => {
  return (
    <div className='select-character'>
      <span>Select Your Character: </span>

      <div className='character-img-container'>
        <div className="front-image">
          <img src={melissaPaper} alt="character of paper" />
        </div>
        <div className="back-image">
          <div className="inside-back-card">

            <div className='title-back-card'>
              
              <div className="img-element-hand">
                <img src={backPaperHand} alt="back paper hand" /> 
              </div>
              <span className='text-of-type'>Paper</span>
            </div>

            <div className="img-element">
              <img src={backPaper} alt="back paper" /> 
            </div>
           
            <p className="text-description">
            "Melissa is a Paper type character, every time she wins a round with Paper, you will earn double points."
            </p>
            
          </div>
        </div>
      </div>
      
      <div className='character-footer'>
        <button><IoIosArrowDropleftCircle /></button>
        <span className='character-name'>Melissa Paper</span>
        <button><IoIosArrowDroprightCircle /></button>
      </div>
     </div>
  )
}
