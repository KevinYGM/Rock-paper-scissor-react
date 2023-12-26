import React, { useEffect, useState, useRef, useContext, useLayoutEffect} from 'react';
import './PlayBattle.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';
import { gameLogic } from '../GameLogic';

/*Images*/
import frame from '../../../images/interfaz-images/frame-vector.png';


export const PlayBattle = () => {

 /*--------------Data imported from useContext-------------------------*/
  const { characterCom, characterPlayer, recordVictory, recordLose, setRecordLose, setRecordVictory} = useContext(MyGeneralContext);

  const {

    /*States with their Updaters (Alphabetical Order)*/
    comMark, setComMark,
    interactiveTexts, setInteractiveTexts,
    playerMark, setPlayerMark,
    positivePoint, setPositivePoint, 
    positivePointCom, setPositivePointCom,
    resultComState, setResultComState,
    resultState, setResultState,
    stateCombat, setStateCombat,

    /*Only States (Alphabetical Order)*/  
    buttonSpecial,
    buttonSpecialCom,      
    controlRoundsPrev,
    controlRoundsState,
    generalPlayCom,
    generalPlayPlayer,
    imagesPlayCom,
    imagesPlayPlayer,
    pauseGeneralState,
    roundsWithoutButtonClick, 
    roundsWithoutAttackSpecialCom,
    startAction,
    setExtraRounds,
    setMessageFinal,
    setPointsRoundPlayer,
    setPointsRoundCom,
    
    setWinnerCombat
    } = useContext(ContextCombat);

/*-------------local States and Refs of this Component---------------------------------*/
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const prevComMark = useRef(comMark);
    const prevPlayerMark = useRef(playerMark);

    const newRecordVictory = recordVictory + 1;
    const newRecordLose = recordLose + 1;
    

    /*---------- useEffects that contribute to the Design of component----------*/

    useEffect(()=> {
        //function for mousemove animation in character images.
        const characters = document.querySelectorAll('.character');
        
        characters.forEach((character) => {
          character.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX * 3 - rect.left;
            character.style.setProperty('--x', x + 'deg');
          });
        });
      }, []);

    
    useEffect(() => {
      // function that controls the animations of the "Play" sections
      const animationInterval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesPlayPlayer.length);
        }, 200);
    
        return () => {
          clearInterval(animationInterval);
        };
      }, [imagesPlayPlayer, imagesPlayCom]);

/*---------- Functions that contribute to the Design of component----------*/

    const renderProgressBarSpecial = (reference) => {
      const validReference = Math.min(Math.max(reference, 0), 6);

      const calculatedHeight = validReference * 16.67 + '%';

      return calculatedHeight;
    };


/*---------- useEffects that contribute to the logic of component----------*/

useEffect(() => {
  /*------Import much of the combat logic from an external file-----*/
  gameLogic(
    generalPlayPlayer,
    generalPlayCom,
    buttonSpecial,
    buttonSpecialCom,
    characterPlayer,
    characterCom,
    setPlayerMark,
    setComMark,
    setResultState,
    setResultComState,
    setPointsRoundPlayer,
    setPointsRoundCom,
    setInteractiveTexts
  );
  // eslint-disable-next-line
}, [controlRoundsPrev]);


  useEffect(()=>{
    /*----PART 1: Complements the negative effect of using the special attack and losing---*/
    if(comMark > prevComMark.current && buttonSpecial && playerMark !== 0){
      setPositivePoint(false)}

    if(playerMark > prevPlayerMark.current && buttonSpecialCom && comMark !== 0){
      setPositivePointCom(false)}
    prevComMark.current = comMark;
    prevPlayerMark.current = playerMark;
    // eslint-disable-next-line
    },[comMark, playerMark]);



  useEffect(()=>{
     /*----PART 2: Complements the negative effect of using the special attack and losing---*/
    if(!positivePoint){
      setPlayerMark((prevMark) => (prevMark - 1));
      setPointsRoundPlayer("-1")}

    if(!positivePointCom){
      setComMark((prevMark) => (prevMark - 1));
      setPointsRoundCom("-1")}
    // eslint-disable-next-line
  },[positivePoint, positivePointCom]);
    

  useLayoutEffect(() => {
/*---------Controls the conditions that define the end of the game---------- */
    if (
      (comMark >= 10 || playerMark >= 10 || controlRoundsState >= 16) &&
      comMark !== playerMark) {
        
      if (comMark > playerMark) {
        setRecordLose(newRecordLose);
        localStorage.setItem('recordLose', newRecordLose.toString());
        setWinnerCombat(characterCom);
        setMessageFinal("💔 YOU HAVE LOST 💔");
        setStateCombat(false);

      } else {
        setRecordVictory(newRecordVictory);
        localStorage.setItem('recordVictory', newRecordVictory.toString());
        setWinnerCombat(characterPlayer);
        setMessageFinal("🎉 CONGRATULATIONS 🎉");
        setStateCombat(false);
      }
    } else if(controlRoundsState === 16 && stateCombat){
        setExtraRounds(true);
    }

    // eslint-disable-next-line
  }, [ controlRoundsState ]);

        
/*----------------------- Component JSX structure ----------------------------- */ 
  return (
    <div  className='play-battle-container'>
       {/*--------------Character Player--------------*/}
      <div className="character-player character">
        <div className="info-character info-character-player">
        <p className="title-info">{characterPlayer.shortName} Information: </p>
          <div className="container-power">
            <div className="power powerRock">
              {"🪨" + characterPlayer.powerRock}
            </div>
            <div className="power powerPaper">
              {"📄" + characterPlayer.powerPaper}
            </div>
            <div className="power powerScissor">
              {"✂️" + characterPlayer.powerScissor}
            </div>
          </div>
          <p className="description">{characterPlayer.description} </p>
        </div>

        <div className="text-power-special">
          <div className="word-power">
            <span>P</span>
            <span>O</span>
            <span>W</span>
            <span>E</span>
            <span>R</span>
          </div>

          <div className="word-special">
            <span>S</span>
            <span>P</span>
            <span>E</span>
            <span>C</span>
            <span>I</span>
            <span>A</span>
            <span>L</span>
          </div>

          <div className="word-bar">
            <span>B</span>
            <span>A</span>
            <span>R</span>
          </div>
        </div>

        <div className="bar-progress">
          <div  className="bar"
            style={{  height: renderProgressBarSpecial(roundsWithoutButtonClick),
                      background: roundsWithoutButtonClick >= 6 ? 'var(--bar-full)' : 'var(--bar-green)'
                     }}>
          </div>
        </div>


        <img
            src={characterPlayer.photo} 
            alt={characterPlayer.name}
            className={
              characterPlayer.iconType === "✊🏼" 
            ? 'background-rock'
            : characterPlayer.iconType === "✋🏼"
            ? 'background-paper' 
            : characterPlayer.iconType === "✌🏼"
            ? 'background-scissor' 
            : undefined
          }/>
      </div> 
      

      {/*--------------Play Zone--------------*/} 
      <div className="play-player play">
      
        <img 
            src={imagesPlayPlayer[currentImageIndex]} 
            alt="" 
            style={{borderColor:
              characterPlayer.iconType === "✊🏼" 
              ? 'yellow'
              : characterPlayer.iconType === "✋🏼"
              ? 'rgb(134, 15, 202)' 
              : characterPlayer.iconType === "✌🏼"
              ? '#800808' 
              : undefined }}/>
      </div>

      <div className="interactive-up">
        <span>Round</span>
        <SwitchTransition>
          <CSSTransition
            key={ controlRoundsState }
            timeout={700}
            classNames="scale"
            unmountOnExit
          >
            <span>{ controlRoundsState }</span>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <div className="play-com play">
        <img 
          src={imagesPlayCom[currentImageIndex]} 
          alt=""
          style={{borderColor:
            characterCom.iconType === "✊🏼" 
            ? 'yellow'
            : characterCom.iconType === "✋🏼"
            ? 'rgb(134, 15, 202)' 
            : characterCom.iconType === "✌🏼"
            ? 'rgb(255, 0, 0)' 
            : undefined }} />
      </div>
      

     {/*--------------Character Com--------------*/} 
      <div className="character-com character">
      <img
            src={characterCom.photo} 
            alt={characterCom.name}
            className={
              characterCom.iconType === "✊🏼" 
            ? 'background-rock'
            : characterCom.iconType === "✋🏼"
            ? 'background-paper' 
            : characterCom.iconType === "✌🏼"
            ? 'background-scissor' 
            : undefined
          }/>
        <div className="bar-progress">
          <div  className="bar"
               style={{ height: renderProgressBarSpecial(roundsWithoutAttackSpecialCom),
                        background: roundsWithoutAttackSpecialCom >= 6 ? 'var(--bar-full)' : 'var(--bar-red)'   }}>
          </div>
        </div>

        <div className="text-power-special-com">
          <div className="word-power">
            <span>P</span>
            <span>O</span>
            <span>W</span>
            <span>E</span>
            <span>R</span>
          </div>

          <div className="word-special">
            <span>S</span>
            <span>P</span>
            <span>E</span>
            <span>C</span>
            <span>I</span>
            <span>A</span>
            <span>L</span>
          </div>

          <div className="word-bar">
            <span>B</span>
            <span>A</span>
            <span>R</span>
          </div>
        </div>

        <div className="info-character info-character-com">
          <p className="title-info">{characterCom.shortName} Information: </p>
          <div className="container-power">
            <div className="power powerRock">
              {"🪨" + characterCom.powerRock}
            </div>
            <div className="power powerPaper">
              {"📄" + characterCom.powerPaper}
            </div>
            <div className="power powerScissor">
              {"✂️" + characterCom.powerScissor}
            </div>
          </div>
          <p className="description">{characterCom.descriptionRival} </p>
        </div>
      </div>


      {/*--------------Section Interactive (Text Frame)--------------*/} 
      <div className="interactive-section">
        <div className="frame-container">
          <img src={frame} alt="frame" />
        </div>
        <div className='frame-info'>
          <div className="img-result-frame">
            <SwitchTransition>
              <CSSTransition
                  key={interactiveTexts}
                  timeout={200}
                  classNames="fade"
                  unmountOnExit>
                       <img src={ startAction ? resultState : pauseGeneralState } alt="" />
              </CSSTransition>
          </SwitchTransition>
        </div>

        <SwitchTransition>
          <CSSTransition
              key={interactiveTexts}
              timeout={200}
              classNames="fade"
              unmountOnExit>
                  <div className="text-interactive" dangerouslySetInnerHTML={{ __html: interactiveTexts }} />
          </CSSTransition>
        </SwitchTransition>

           <div className="img-result-frame">
            <SwitchTransition>
                <CSSTransition
                    key={interactiveTexts}
                    timeout={200}
                    classNames="fade"
                    unmountOnExit>
                        <img src={ startAction ? resultComState : pauseGeneralState } alt="" />
                </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </div>
    </div>
  )
}
