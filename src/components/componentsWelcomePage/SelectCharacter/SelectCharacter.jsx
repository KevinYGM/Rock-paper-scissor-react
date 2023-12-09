import './SelectCharacter.css';
import React, { useState, useEffect, useContext } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*React-icons*/
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"

export const SelectCharacter = ({openModalCharacter}) => {

  /*--------------Data imported from MyContext-------------------------*/
  const { characters,
          setCharacterPlayer,
          setCounterRock,
          setCounterPaper,
          setCounterScissor } = useContext(MyGeneralContext);

   /*-------------local States of this Component---------------------------------*/
  const [indexCharacter, setIndexCharacter] = useState(0);


  /*---------- useEffects that contribute to the logic of this Component----------*/
useEffect(() => {
  /*It is responsible for sending the information of the character chosen by the player*/
    setCharacterPlayer(characters[indexCharacter]);
    setCounterRock(characters[indexCharacter].powerRock);
    setCounterPaper(characters[indexCharacter].powerPaper);
    setCounterScissor(characters[indexCharacter].powerScissor);
    // eslint-disable-next-line
  },[indexCharacter, characters, setCharacterPlayer]);



  /*-------Component Functions for Design and Effects------------*/
  const changeCharacter = (address) => {
    // Function that allows you to change characters by pressing the arrow buttons.
    if (address === 'back') {
      setIndexCharacter((prevCharacter) => (prevCharacter + 1) % characters.length);
    }else if (address === 'forward') {
      setIndexCharacter((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length);
    }
  }

 
 /*---------------- component JSX structure ---------------------- */ 
  return (
    <div className='select-character'>
      <span>Select Your Character: </span>
{/*--------------------------section Image Character------------------------- */}
      <div className='character-img-container'>

            
                  <div className="front-image">
                    <SwitchTransition>
                      <CSSTransition
                        key={indexCharacter}
                        timeout={200}
                        classNames="character-slider">
                            <img src={characters[indexCharacter].photo} alt={characters[indexCharacter].name} />
                      </CSSTransition>
                    </SwitchTransition>
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

{/*--------------------------section footer Character--------------------------- */}  
      <div className='character-footer'>
        <button onClick={!openModalCharacter ? () => changeCharacter('forward') : undefined}
          
        ><IoIosArrowDropleftCircle /></button>

                    <SwitchTransition>
                      <CSSTransition
                        key={indexCharacter}
                        timeout={200}
                        classNames="character-slider">
                            <span className='character-name'>{characters[indexCharacter].name + " " + characters[indexCharacter].iconType}</span>
                      </CSSTransition>
                    </SwitchTransition>
        <button onClick={!openModalCharacter ? () => changeCharacter('back') : undefined}>
        <IoIosArrowDroprightCircle /></button>
      </div>
     </div>
  )
  }
