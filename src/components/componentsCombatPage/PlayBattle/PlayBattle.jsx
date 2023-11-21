import React, { useEffect, useState} from 'react';
import './PlayBattle.css';
import frame from '../../../images/interfaz-images/frame-vector.png';
import tie from '../../../images/interfaz-images/icon-tie.png';
import victory from '../../../images/interfaz-images/icon-victory.png';
import lose from '../../../images/interfaz-images/icon-lose.png';
// import { RiDivideFill } from 'react-icons/ri';


export const PlayBattle = 
({  characterPlayer,
    characterCom,
    imagesPlayPlayer,
    imagesPlayCom,
    generalPlayPlayer,
    generalPlayCom,
    setPlayerMark,
    setComMark,
    controlRoundsState,
    interactiveTexts,
    setInteractiveTexts,
    controlRoundsPrev,
    resultState,
    setResultState,
    resultComState,
    setResultComState
  }) => {

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  //   useEffect(() => {
  //   console.log(characterPlayer.iconType);
  // }, []);



  /*---------------Logica para Dinamismo del Juego: Batalla-----------*/
useEffect(()=>{

    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✌🏼" ){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>lost round!! Scissor cut Paper and ${characterCom.shortName} is a scissor type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
      }else{
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>Bad Luck!! Scissor cut Paper and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
      }
    }

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✋🏼" ){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>lost round!! paper covers rock and ${characterCom.shortName} is a paper type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
        
      }else{
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>Bad Luck!! paper covers rock and ${characterCom.shortName} has won <span class="pcom">1 point!!</span></p>`);
      }
    }

    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✊🏼" ){
      if(characterCom.iconType === generalPlayCom){
        setComMark((prevMark) => (prevMark + 2));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>lost round!! rock step scissors and ${characterCom.shortName} is a rock type, ${characterCom.shortName} has won <span class="pcom">2 points!!</span></p>`);
      }else{
        setComMark((prevMark) => (prevMark + 1));
        setResultState(lose);
        setResultComState(victory);
        setInteractiveTexts(`<p>Bad Luck!! rock step scissors and ${characterCom.shortName}
        has won <span class="pcom">1 point!!</span></p>`);
      }
    }

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✌🏼" ){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Excellent!! rock step scissors and ${characterPlayer.shortName} is a rock type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else{
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Very Good!! rock step scissors and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }

    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✊🏼" ){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Excellent!! paper covers rock and ${characterPlayer.shortName} is a paper type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else{
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Very Good!! paper covers rock and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }
    
    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✋🏼" ){
      if(characterPlayer.iconType === generalPlayPlayer){
        setPlayerMark((prevMark) => (prevMark + 2));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Excellent!! Scissor cut Paper and ${characterPlayer.shortName} is a scissor type, ${characterPlayer.shortName} has won <span class="pplayer">2 points!!</span></p>`);
      }else{
        setPlayerMark((prevMark) => (prevMark + 1));
        setResultState(victory);
        setResultComState(lose);
        setInteractiveTexts(`<p>Very Good!! Scissor cut Paper and ${characterPlayer.shortName} has won <span class="pplayer">1 point!!</span></p>`);
      }
    }

    if(generalPlayPlayer === "✊🏼" && generalPlayCom === "✊🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setInteractiveTexts(`<p>Rocks crash into each other, Nobody Wins!!</p>`);
    }

    if(generalPlayPlayer === "✋🏼" && generalPlayCom === "✋🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setInteractiveTexts(`<p>Denied effect of both papers, It's a Tie!!</p>`);
    }

    if(generalPlayPlayer === "✌🏼" && generalPlayCom === "✌🏼" ){
      setResultState(tie);
      setResultComState(tie);
      setInteractiveTexts(`<p>The scissors try to cut themselves without success, It's a Tie!!</p>`);
    }

  },[controlRoundsPrev, setComMark, setPlayerMark, generalPlayPlayer, generalPlayCom, characterPlayer.iconType, characterCom.iconType, setInteractiveTexts, setResultState, setResultComState, characterCom.shortName, characterPlayer.shortName]);



return (
    <div  className='play-battle-container'>
       {/*--------------Character Player--------------*/}
      <div className="character-player character">
        <img src={characterPlayer.photo} alt={characterPlayer.name} />
      </div> 
      

      {/*--------------Play Zone--------------*/} 
      <div className="play-player play">
        <img src={imagesPlayPlayer[currentImageIndex]} alt="" />
      </div>

      <div className="interactive-up">
        <span>Round</span>
        <span>{ controlRoundsState }</span>
      </div>

      <div className="play-com play">
        <img src={imagesPlayCom[currentImageIndex]} alt="" />
      </div>
      

     {/*--------------Character Com--------------*/} 
      <div className="character-com character">
        <img src={characterCom.photo} alt={characterCom.name} />
      </div>
      <div className="interactive-section">
        <div className="frame-container">
          <img src={frame} alt="frame" />
        </div>
        <div className='frame-info'>
          <div className="img-result-frame">
            <img src={resultState} alt="" />
          </div>
          <div className="text-interactive" dangerouslySetInnerHTML={{ __html: interactiveTexts }} />
          <div className="img-result-frame">
            <img src={resultComState} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
