import React from 'react'
import './SelectCharacter.css';
import melissaPaper from '../../images/character-blue-paper.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SelectCharacter = () => {
  return (
    <div className='select-character'>
      <span>Select Your Character: </span>
      <div className='character-img-container'>
        <img src={melissaPaper} alt="character-paper" />
      </div>
      <div className='character-footer'>
        <button><IoIosArrowBack /></button>
        <button>Select 👉🏼
          <span className='character-name'>
              Melissa Paper
          </span>
         </button>
        <button><IoIosArrowForward /></button>
      </div>
        
     </div>
  )
}
