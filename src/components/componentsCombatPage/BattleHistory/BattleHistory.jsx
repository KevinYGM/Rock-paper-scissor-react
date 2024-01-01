/*Generals Imports*/
import React, { useContext, useState } from 'react';
import './BattleHistory.css';
import { MyGeneralContext } from '../../../MyGeneralContext';
import { ContextCombat } from '../../../ContextCombat';

/*React Icons*/
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";

/*Sounds*/
import transitionSound from '../../../sounds/transition-base.mp3';



export const BattleHistory = () => {

  /*--------------Data imported from useContext-------------------------*/
  const { volumeSounds } = useContext(MyGeneralContext);
  const { historyItems } = useContext(ContextCombat);

  /*-------------local States of this Component---------------------------------*/
  const [visible, setVisible] = useState(true); //state to control the effect of moving from the section


/*---------- Functions that contribute to the Design and Effects of this Component----------*/
  const toggleDiv = () => {
    if (historyItems.length !== 0){
      setVisible(!visible);
      const audioTransitionHistory = new Audio(transitionSound);
      audioTransitionHistory.currentTime = 0.4;
      audioTransitionHistory.volume = volumeSounds / 100;
      audioTransitionHistory.play();
    }
  };

  const colorPointsHistory = (itemRound, itemButtonSpecialOwn) => {
    return(
    (itemRound === "0" && !itemButtonSpecialOwn)
    ? 'var(--gradient-blue)'
    : (itemRound === "0" && itemButtonSpecialOwn)
    ? 'var(--gradient-orange)'
    : (itemRound === "+1" || itemRound === "+2" || itemRound === "+3")
    ? 'var(--gradient-green)'
    : itemRound === "+4"
    ? 'var(--gradient-yellow)'
    : itemRound === "-1"
    ? 'var(--gradient-red)'
    : 'inherit'
  )};

  const colorPlaysHistory = (play) =>{
    return(
      (play === "✊🏼")
      ? 'var(--yellow-rock)'
      : (play === "✋🏼")
      ? 'var(--purple-paper)'
      : (play === "✌🏼")
      ? 'var(--red-scissor)'
      : 'inherit'
    )};


/*---------------- Component JSX structure ---------------------- */ 
  return (
     <div className={`battle-history ${visible ? 'visible' : ''}`}>
      
      <div className="history_content">
        <div className='history_container-items'>
          {historyItems.map((item, index) => (
            <div key={index} className="history_item">

    {/*---------------- Section: Result Player --------------------*/}
              <div className="result-player result">
                <img src={ item.resultState } alt='Result Round Player' />
              </div>

      {/*---------------- Section: Character Player -----------------*/}
              <div className="character-player character">
                <div className="points-round-player points-round"
                      style={{
                        background: colorPointsHistory(item.pointsRoundPlayer, item.buttonSpecial),
                        color: item.pointsRoundPlayer === "0" || item.pointsRoundPlayer === "-1" ? 'white' : 'black'
                      }}
                    >{item.pointsRoundPlayer}</div>
                <img src={item.characterPlayerFace} alt='Face Character Player' />
              </div>

      {/*------- Section: Container-Center (Play and Rounds) ---------*/}
              <div className="container-center">
                <div  className="play-player play"
                      style={{
                        background: colorPlaysHistory(item.generalPlayPlayer)
                      }}>
                  <span className={`emoji emoji-${item.playPlayerInformation.nameType}`}
                        data-emoji={item.generalPlayPlayer === "✊🏼" ? "✊🏾" : item.generalPlayPlayer } 
                        data-emoji-hover={item.playPlayerInformation.alternativeIcon}></span>
                </div>

                <div  className="play-com play"
                      style={{ background: colorPlaysHistory(item.generalPlayCom) }}>
                  <span className={`emoji emoji-${item.playComInformation.nameType}`}
                        data-emoji={item.generalPlayCom === "✊🏼" ? "✊🏾" : item.generalPlayCom } 
                        data-emoji-hover={item.playComInformation.alternativeIcon}></span>
                </div>

                <div className="rounds">
                  <span>Round <strong>{item.controlRoundsState}</strong></span>
                </div>
              </div>

      {/*---------------- Section: Character Com -----------------*/}
              <div className="character-com character">
                <img src={item.characterComFace} alt='Face Character Com'/>
                <div className="points-round-com points-round"
                      style={{
                        background: colorPointsHistory(item.pointsRoundCom, item.buttonSpecialCom),
                        color: item.pointsRoundCom === "0" || item.pointsRoundCom === "-1" ? 'white' : 'black'
                      }}
                      >{item.pointsRoundCom}</div>
              </div>

      {/*---------------- Section: Result Com -----------------*/}
              <div className="result-com result">
                <img src={ item.resultComState } alt='Result Round Com' />
              </div>
            </div>
        ))}
        </div>
      </div>
     
  {/*---------------------------------------- Section: History Tab ----------------------*/}    
      <div  className="history_tab" 
            onClick={toggleDiv}
            style={{
              color: historyItems.length === 0 ? 'white' : 'var(--main-color)',
              background: historyItems.length === 0 ? 'var(--gradient-red)' : 'var(--color-history-active)',
            }}
            >
        <div>
          <span>H</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>Y</span>
        </div>

      <span className="visible-tab"
            style={{animation: historyItems.length !==0 ? 'translate-infinity 1s linear infinite': undefined}}>
        {visible ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill />}
      </span>

      <div>
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </div>
      </div>
    </div>
 )
}
