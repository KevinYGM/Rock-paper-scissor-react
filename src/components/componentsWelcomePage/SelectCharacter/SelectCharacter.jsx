import './SelectCharacter.css';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"


export const SelectCharacter = 
({  characters,
    setCharacterPlayer,
    openModalCharacter,
    setCounterRock,
    setCounterPaper,
    setCounterScissor
    
}) => {

  /*----------state components-----------------------------*/
  const [indexCharacter, setIndexCharacter] = useState(0);
  
  
  const changeCharacter = (address) => {
    // Function that allows you to change characters by pressing the arrow buttons.
    if (address === 'back') {
      setIndexCharacter((prevCharacter) => (prevCharacter + 1) % characters.length);
    }else if (address === 'forward') {
      setIndexCharacter((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length);
      
    }
  }

  useEffect(() => {
    setCharacterPlayer(characters[indexCharacter]);
    setCounterRock(characters[indexCharacter].powerRock);
    setCounterPaper(characters[indexCharacter].powerPaper);
    setCounterScissor(characters[indexCharacter].powerScissor);

     // eslint-disable-next-line
  }, [indexCharacter, characters, setCharacterPlayer]);


  return (
    <div className='select-character'>
      <span>Select Your Character: </span>
{/*--------------------------section Image Character---------------------------------- */}
      <div className='character-img-container'>

        <div className="front-image">
          <img src={characters[indexCharacter].photo} alt={characters[indexCharacter].name} />
        </div>
    {/*-----------------------section Back image------------------- */}
        <div className="back-image">
          <div className="inside-back-card">
            <div className='title-back-card'>
              <span className='text-of-type'>{characters[indexCharacter].type}</span>
            </div>

            <div className="img-element">
              <img src={characters[indexCharacter].imageType} alt={characters[indexCharacter].type} /> 
            </div>
           
            <p className="text-description">
              {characters[indexCharacter].description}
            </p>
          </div>
        </div>
      </div>

{/*--------------------------section footer Character---------------------------------- */}  
      <div className='character-footer'>
        <button onClick={!openModalCharacter ? () => changeCharacter('forward') : undefined}
          
        ><IoIosArrowDropleftCircle /></button>

        <span className='character-name'>{characters[indexCharacter].name + " " + characters[indexCharacter].iconType}</span>

        <button onClick={!openModalCharacter ? () => changeCharacter('back') : undefined}>
        <IoIosArrowDroprightCircle /></button>
      </div>
     </div>
  )
  }
