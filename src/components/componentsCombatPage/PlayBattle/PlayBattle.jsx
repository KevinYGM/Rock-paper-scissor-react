import React, { useEffect, useState, useRef} from 'react';
import './PlayBattle.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

/*Images*/
import frame from '../../../images/interfaz-images/frame-vector.png';
import tie from '../../../images/interfaz-images/icon-tie.png';
import victory from '../../../images/interfaz-images/icon-victory.png';
import lose from '../../../images/interfaz-images/icon-lose.png';


export const PlayBattle = 
({  characterPlayer,
    characterCom,
    imagesPlayPlayer,
    imagesPlayCom,
    generalPlayPlayer,
    generalPlayCom,
    playerMark,
    setPlayerMark,
    comMark,
    setComMark,
    controlRoundsState,
    interactiveTexts,
    setInteractiveTexts,
    controlRoundsPrev,
    resultState,
    setResultState,
    resultComState,
    setResultComState,
    setStateCombat,
    setWinnerCombat,
    setMessageFinal,
    buttonSpecial,
    buttonSpecialCom,
    pauseGeneralState,
    startAction,
    setPointsRoundPlayer,
    setPointsRoundCom,
    roundsWithoutButtonClick, 
    roundsWithoutAttackSpecialCom,
  }) => {

/*------------------component states and references---------------------------  */
    const prevComMark = useRef(comMark);
    const prevPlayerMark = useRef(playerMark);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

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

/*-----------------------Logic for Game Dynamics: Battle------------------------*/
useEffect(()=>{

  /*------------- Cases where the computer wins----------------------*/
    
    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✌🏼" ){
      if(!buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 2));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+2");
          setInteractiveTexts(`<p>lost round!! Scissor cut Paper and ${characterCom.shortName} is a scissor type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 1));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+1");
          setInteractiveTexts(`<p>Bad Luck!! Scissor cut Paper and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
        }
      }else if(buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 4));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+4");
          setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> Scissor cut Paper and ${characterCom.shortName} is a scissor type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 3));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+3");
          setInteractiveTexts(`<p>Special Attack!! Scissor cut Paper and ${characterCom.shortName} has won <span class="pcom">3 point!!</span></p>`);
        }
      }
    }

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✋🏼" ){
      if(!buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 2));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+2");
          setInteractiveTexts(`<p>lost round!! paper covers rock and ${characterCom.shortName} is a paper type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 1));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+1");
          setInteractiveTexts(`<p>Bad Luck!! paper covers rock and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
        }
      }else if(buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 4));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+4");
          setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> paper covers rock and ${characterCom.shortName} is a paper type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 3));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+3");
          setInteractiveTexts(`<p><span class="pcom">Special Attack!!</span> paper covers rock and ${characterCom.shortName} has won <span class="pcom">3 point!!</span></p>`);
        }
      }
    }

    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✊🏼" ){
      if(!buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 2));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+2");
          setInteractiveTexts(`<p>lost round!! rock step scissors and ${characterCom.shortName} is a rock type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 1));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+1");
          setInteractiveTexts(`<p>Bad Luck!! rock step scissors and ${characterCom.shortName}
          has won <span class="pcom">1 point!!</span></p>`);
        }
      }else if(buttonSpecialCom){
        if(characterCom.iconType === generalPlayCom){
          setComMark((prevMark) => (prevMark + 4));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+4");
          setInteractiveTexts(`<p><span class="pcom">Super Attack!!</span> rock step scissors and ${characterCom.shortName} is a rock type, ${characterCom.shortName} has won <span class="pcom">4 points!!</span></p>`);
        }else if(characterCom.iconType !== generalPlayCom){
          setComMark((prevMark) => (prevMark + 3));
          setResultState(lose);
          setResultComState(victory);
          setPointsRoundPlayer("0");
          setPointsRoundCom("+3");
          setInteractiveTexts(`<p><p><span class="pcom">Special Attack!!</span> rock step scissors and ${characterCom.shortName}
          has won <span class="pcom">3 point!!</span></p>`);
        }
      }
    }

/*------------- Cases where the Player wins------------------------ */

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✌🏼" ){
      if(!buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 2));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+2");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Excellent!! rock step scissors and ${characterPlayer.shortName} is a rock type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer) {
          setPlayerMark((prevMark) => (prevMark + 1));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+1");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Very Good!! rock step scissors and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
        }
      }else if(buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 4));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+4");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> rock step scissors and ${characterPlayer.shortName} is a rock type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 3));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+3");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> rock step scissors and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
        }
      }
    }


    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✊🏼" ){
      if(!buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 2));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+2");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Excellent!! paper covers rock and ${characterPlayer.shortName} is a paper type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 1));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+1");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Very Good!! paper covers rock and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
        }
      }else if(buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 4));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+4");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> paper covers rock and ${characterPlayer.shortName} is a paper type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 3));
          setPointsRoundPlayer("+3");
          setPointsRoundCom("0");
          setResultState(victory);
          setResultComState(lose);
          setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> paper covers rock and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
        }
      }
    }


    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✋🏼" ){
      if(!buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 2));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+2");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Excellent!! Scissor cut Paper and ${characterPlayer.shortName} is a scissor type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 1));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+1");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p>Very Good!! Scissor cut Paper and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
        }
      }else if(buttonSpecial){
        if(characterPlayer.iconType === generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 4));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+4");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p><span class="pplayer">Super Attack!!</span> Scissor cut Paper and ${characterPlayer.shortName} is a scissor type, ${characterPlayer.shortName} has won <span class="pplayer">4 points!!</span></p>`);
        }else if(characterPlayer.iconType !== generalPlayPlayer){
          setPlayerMark((prevMark) => (prevMark + 3));
          setResultState(victory);
          setResultComState(lose);
          setPointsRoundPlayer("+3");
          setPointsRoundCom("0");
          setInteractiveTexts(`<p><span class="pplayer">Special Attack!!</span> Scissor cut Paper and ${characterPlayer.shortName} has won <span class="pplayer">3 point!!</span></p>`);
        }
      }
    }


/*------------- Cases where there is a tie------------------------ */

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✊🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setPointsRoundPlayer("0");
      setPointsRoundCom("0");
      setInteractiveTexts(`<p>Rocks crash into each other, Nobody Wins!!</p>`);
    }

    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✋🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setPointsRoundPlayer("0");
      setPointsRoundCom("0");
      setInteractiveTexts(`<p>Denied effect of both papers, It's a Tie!!</p>`);
    }

    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✌🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setPointsRoundPlayer("0");
      setPointsRoundCom("0");
      setInteractiveTexts(`<p>The scissors try to cut themselves without success, It's a Tie!!</p>`);
    }
    // eslint-disable-next-line
  },[ controlRoundsPrev,
      setComMark,
      setPlayerMark, 
      generalPlayPlayer, 
      generalPlayCom, 
      setInteractiveTexts, 
      setResultState, 
      setResultComState
    ]);




  /*---------- useEffects that contribute to the logic of component----------*/


  useEffect(()=>{
    /*----Complements the negative effect of using the special attack and losing---*/
    if(comMark > prevComMark.current && buttonSpecial && playerMark !== 0){
      setPlayerMark((prevMark) => (prevMark - 1));
      setPointsRoundPlayer("-1");
    }
    if(playerMark > prevPlayerMark.current && buttonSpecialCom && comMark !== 0){
      setComMark((prevMark) => (prevMark - 1));
      setPointsRoundCom("-1");
    }

    prevComMark.current = comMark;
    prevPlayerMark.current = playerMark;
    // eslint-disable-next-line
    },[comMark, playerMark]);
    



  useEffect(() => {
/*---------Controls the conditions that define the end of the game---------- */
    if (
      (comMark >= 10 || playerMark >= 10 || controlRoundsState >= 16) &&
      comMark !== playerMark) {
        
      if (comMark > playerMark) {
        setWinnerCombat(characterCom);
        setMessageFinal("💔 YOU HAVE LOST 💔");
        setStateCombat(false);
      } else {
        setWinnerCombat(characterPlayer);
        setMessageFinal("🎉 CONGRATULATIONS 🎉");
        setStateCombat(false);
      }
    }
  }, [  characterPlayer, 
        characterCom, 
        setWinnerCombat,
        setMessageFinal,
        setStateCombat, 
        comMark, 
        playerMark, 
        controlRoundsState,
        ]);

        
/*----------------------- component JSX structure ----------------------------- */ 
  return (
    <div  className='play-battle-container'>
       {/*--------------Character Player--------------*/}
      <div className="character-player character">
        <div className="bar-progress">
          <div  className="bar"
            style={{ height: renderProgressBarSpecial(roundsWithoutButtonClick) }}>
          </div>
        </div>
        <img src={characterPlayer.photo} alt={characterPlayer.name} />
      </div> 
      

      {/*--------------Play Zone--------------*/} 
      <div className="play-player play">
        <img src={imagesPlayPlayer[currentImageIndex]} alt="" />
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
        <img src={imagesPlayCom[currentImageIndex]} alt="" />
      </div>
      

     {/*--------------Character Com--------------*/} 
      <div className="character-com character">
        <img src={characterCom.photo} alt={characterCom.name} />
        <div className="bar-progress">
          <div  className="bar"
               style={{ height: renderProgressBarSpecial(roundsWithoutAttackSpecialCom) }}>
          </div>
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
                  classNames="interactive"
                  unmountOnExit>
                       <img src={ startAction ? resultState : pauseGeneralState } alt="" />
              </CSSTransition>
          </SwitchTransition>
        </div>

        <SwitchTransition>
          <CSSTransition
              key={interactiveTexts}
              timeout={200}
              classNames="interactive"
              unmountOnExit>
                  <div className="text-interactive" dangerouslySetInnerHTML={{ __html: interactiveTexts }} />
          </CSSTransition>
        </SwitchTransition>

           <div className="img-result-frame">
            <SwitchTransition>
                <CSSTransition
                    key={interactiveTexts}
                    timeout={200}
                    classNames="interactive"
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
