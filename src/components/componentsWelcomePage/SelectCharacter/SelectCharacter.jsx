import './SelectCharacter.css';
import React, { useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"


export const SelectCharacter = 
({ characters,
  characterPlayer,
  setCharacterPlayer 
}) => {

  
  
  const changeCharacter = (address) => {
    // Function that allows you to change characters by pressing the arrow buttons.
    if (address === 'back') {
      setCharacterPlayer((prevCharacter) => (prevCharacter + 1) % characters.length);
    } else if (address === 'forward') {
      setCharacterPlayer((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length);
    }
  };



  return (
    <div className='select-character'>
      <span>Select Your Character: </span>
{/*--------------------------section Image Character---------------------------------- */}
      <div className='character-img-container'>

        <div className="front-image">
          <img src={characters[characterPlayer].photo} alt={characters[characterPlayer].name} />
        </div>
    {/*-----------------------section Back image------------------- */}
        <div className="back-image">
          <div className="inside-back-card">
            <div className='title-back-card'>
              <span className='text-of-type'>{characters[characterPlayer].type}</span>
            </div>

            <div className="img-element">
              <img src={characters[characterPlayer].imageType} alt={characters[characterPlayer].type} /> 
            </div>
           
            <p className="text-description">
              {characters[characterPlayer].description}
            </p>
          </div>
        </div>
      </div>

{/*--------------------------section footer Character---------------------------------- */}  
      <div className='character-footer'>
        <button 
              onClick={() => changeCharacter('forward')}
        ><IoIosArrowDropleftCircle /></button>

        <span className='character-name'>{characters[characterPlayer].name + " " + characters[characterPlayer].iconType}</span>

        <button
                onClick={() => changeCharacter('back')}>
        <IoIosArrowDroprightCircle /></button>
      </div>
     </div>
  )
}
