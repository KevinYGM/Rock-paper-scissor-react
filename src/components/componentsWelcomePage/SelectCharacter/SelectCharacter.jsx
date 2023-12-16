import './SelectCharacter.css';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Sounds*/
import selectCharacterSound from '../../../sounds/bip.mp3';

/*React-icons*/
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"

export const SelectCharacter = ({ openModalCharacter }) => {

  /*--------------Data imported from useContext-------------------------*/
  const { userIsActive, setUserIsActive, 
          characters,
          volumeSounds,
          setCharacterPlayer,
          setCounterRock,
          setCounterPaper,
          setCounterScissor
          } = useContext(MyGeneralContext);

   /*-------------local States and refs of this Component---------------------------------*/
  const [indexCharacter, setIndexCharacter] = useState(0);
  const [isForward, setIsForward] = useState(false);
  const isFirstRender = useRef(true);


  /*---------- useEffects that contribute to the logic of this Component----------*/
useEffect(() => {
  /*It is responsible for sending the information of the character chosen by the player*/
    setCharacterPlayer(characters[indexCharacter]);
    setCounterRock(characters[indexCharacter].powerRock);
    setCounterPaper(characters[indexCharacter].powerPaper);
    setCounterScissor(characters[indexCharacter].powerScissor);
    // eslint-disable-next-line
  },[indexCharacter, characters, setCharacterPlayer]);


  useEffect(()=>{
    /*To avoid rendering as soon as the component loads*/
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return};
    
    /*Main purpose of this useEffect */
    !isForward 
    ? setIndexCharacter((prevCharacter) => (prevCharacter + 1) % characters.length)
    : setIndexCharacter((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length);
    // eslint-disable-next-line
  },[isForward]);


/*---------- Functions that contribute to the logic of this Component----------*/

    const changeCharacter = (address) => {
      const audioSelectCharacter = new Audio(selectCharacterSound);
      audioSelectCharacter.currentTime = 0;
      audioSelectCharacter.volume = volumeSounds / 100;
      audioSelectCharacter.play();

      if(!userIsActive){
        setUserIsActive(true);
      }

      
      // Function that allows you to change characters by pressing the arrow buttons.
      if (address === 'back' && !isForward) {
        setIndexCharacter((prevCharacter) => (prevCharacter + 1) % characters.length);}
      if (address === 'back' && isForward){
        setIsForward(false)}
      if (address === 'forward' && isForward) {
        setIndexCharacter((prevCharacter) => (prevCharacter - 1 + characters.length) % characters.length);
      }
      if (address === 'forward' && !isForward) {
        setIsForward(true)}
  };

 

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
                        classNames={isForward ? "character-slider-forward" : "character-slider-back"}>
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
        <button onClick={!openModalCharacter ? () => {changeCharacter('forward')} : undefined}>
          <IoIosArrowDropleftCircle />
        </button>

                    <SwitchTransition>
                      <CSSTransition
                        key={indexCharacter}
                        timeout={200}
                        classNames={isForward ? "character-slider-forward" : "character-slider-back"}>
                            <span className='character-name'>{characters[indexCharacter].name + " " + characters[indexCharacter].iconType}</span>
                      </CSSTransition>
                    </SwitchTransition>

        <button onClick={!openModalCharacter ? () => {changeCharacter('back')} : undefined}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
     </div>
  )
  }
