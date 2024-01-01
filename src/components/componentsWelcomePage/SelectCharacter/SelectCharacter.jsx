/*Generals Imports*/
import './SelectCharacter.css';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Effects Transition*/
import { CSSTransition, SwitchTransition } from 'react-transition-group';

/*Sounds*/
import selectCharacterSound from '../../../sounds/bip.mp3';

/*React-icons*/
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io"

/*Image*/
import rock from '../../../images/interfaz-images/rock.png';
import paper from '../../../images/interfaz-images/paper.png';
import scissor from '../../../images/interfaz-images/scissor.png';




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
  const [power1, setPower1] = useState({ powerName: "name", powerMount: 0 });
  const [power2, setPower2] = useState({ powerName: "name", powerMount: 0 });
  const [power3, setPower3] = useState({ powerName: "name", powerMount: 0 });

/*---------- useEffects that contribute to the logic of this Component----------*/

  useEffect(() => {
    /*It is responsible for sending the information of the character chosen by the player*/
      setCharacterPlayer(characters[indexCharacter]);
      localStorage.setItem('characterPlayer', JSON.stringify(characters[indexCharacter]));
      setCounterRock(characters[indexCharacter].powerRock);
      localStorage.setItem('counterRock', characters[indexCharacter].powerRock.toString());
      setCounterPaper(characters[indexCharacter].powerPaper);
      localStorage.setItem('counterPaper', characters[indexCharacter].powerPaper.toString());
      setCounterScissor(characters[indexCharacter].powerScissor);
      localStorage.setItem('counterScissor', characters[indexCharacter].powerScissor.toString());
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



    useEffect(() => {
      const { powerRock, powerPaper, powerScissor } = characters[indexCharacter];
    
      // Find the maximum, minimum, and intermediate values
      const maximum = Math.max(powerRock, powerPaper, powerScissor);
      const minimum = Math.min(powerRock, powerPaper, powerScissor);
      const intermediate = powerRock + powerPaper + powerScissor - maximum - minimum;
    
      // Determine the name and corresponding amount for each state
      const [maxName, maxAmount] = Object.entries({ powerRock, powerPaper, powerScissor }).find(
        ([, value]) => value === maximum);
    
      const [minName, minAmount] = Object.entries({ powerRock, powerPaper, powerScissor }).find(
        ([, value]) => value === minimum);
    
      const [interName, interAmount] = Object.entries({ powerRock, powerPaper, powerScissor }).find(
        ([, value]) => value === intermediate);
    
      // Update the states with the corresponding values
      setPower1({ powerName: maxName, powerMount: maxAmount });
      setPower2({ powerName: interName, powerMount: interAmount });
      setPower3({ powerName: minName, powerMount: minAmount });
    
    // eslint-disable-next-line
    }, [ indexCharacter ]);
    

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



  const asignColorBackgroundPlays = (power) => {
    switch (power.powerName) {
      case 'powerRock':
        return 'var(--yellow-rock)';
      case 'powerPaper':
        return 'var(--purple-paper)';
      case 'powerScissor':
        return 'var(--red-scissor)';
      default:
        return undefined;
    }
  };


  const asignImagePlays = (power) => {
    switch (power.powerName) {
      case 'powerRock':
        return rock;
      case 'powerPaper':
        return paper;
      case 'powerScissor':
        return scissor;
      default:
        return undefined;
    }
  };


  const asignNamePlays = (power) => {
    switch (power.powerName) {
      case 'powerRock':
        return 'rock';
      case 'powerPaper':
        return 'paper';
      case 'powerScissor':
        return 'scissor';
      default:
        return undefined;
    }
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
              <div className="face-character">
                <img src={characters[indexCharacter].facePhoto} alt={ characters[indexCharacter].shortName + 's face'} />
              </div>
            </div>
            
            <div className="descriptive-container">

              <div className="img-element"
                    style={{backgroundImage: asignColorBackgroundPlays(power1) }}>
                <img src={characters[indexCharacter].imageType} alt={characters[indexCharacter].type} /> 
              </div>
            
            <div className="plays-for-game">
              <span className="title-plays">{characters[indexCharacter].shortName}'s Plays:</span>
              <div className="type-one" 
                    style={{backgroundImage: asignColorBackgroundPlays(power1),
                            color: power1.powerName === 'powerRock' 
                            ? 'rgb(75, 10, 75)' 
                            : 'var(--color-font-main)' }}>
                <img src={ asignImagePlays(power1) } alt="Power 1" />
                <span>{ asignNamePlays(power1) }</span>
                <span>{power1.powerMount}</span>
              </div>

              <div className="type-two"
                   style={{backgroundImage: asignColorBackgroundPlays(power2),
                    color: power2.powerName === 'powerRock' 
                    ? 'rgb(75, 10, 75)' 
                    : 'var(--color-font-main)' }}>
                <img src={ asignImagePlays(power2) } alt="Power 2" />
                <span>{ asignNamePlays(power2) }</span>
                <span>{power2.powerMount}</span>
              </div>

              <div  className="type-three" 
                    style={{backgroundImage: asignColorBackgroundPlays(power3),
                      color: power3.powerName === 'powerRock' 
                      ? 'rgb(75, 10, 75)' 
                      : 'var(--color-font-main)' }}>
                <img src={ asignImagePlays(power3) } alt="Power 3" />
                <span>{ asignNamePlays(power3) }</span>
                <span>{power3.powerMount}</span>
              </div>
            </div>
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
