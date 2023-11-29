import React, { useState } from 'react';
import './BattleHistory.css';

/*React Icons*/
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";




export const BattleHistory = ({ historyItems }) => {

  /*------------------component states ---------------------------*/
  const [visible, setVisible] = useState(true); //state to control the effect of moving from the section




  /*------------------Functions dedicated to component Design----------------*/
  const toggleDiv = () => {
    historyItems.length !== 0 && (setVisible(!visible));
  }



 
/*---------------- component JSX structure ---------------------- */ 
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
                        backgroundColor:
                          item.pointsRoundPlayer === "0"
                            ? 'blue'
                            : (item.pointsRoundPlayer === "+1" ||
                                item.pointsRoundPlayer === "+2" ||
                                item.pointsRoundPlayer === "+3" ||
                                item.pointsRoundPlayer === "+4")
                            ? 'green'
                            : item.pointsRoundPlayer === "-1"
                            ? 'red'
                            : 'inherit'
                      }}
                
                >{item.pointsRoundPlayer}</div>
                <img src={item.characterPlayerFace} alt='Face Character Player' />
              </div>

      {/*------- Section: Container-Center (Play and Rounds) ---------*/}
              <div className="container-center">
                <div className="play-player play">
                  <span>{ item.generalPlayPlayer }</span>
                </div>

                <div className="play-com play">
                  <span>{ item.generalPlayCom }</span>
                </div>

                <div className="rounds">
                  <span>Round {item.controlRoundsState} </span>
                </div>
              </div>

      {/*---------------- Section: Character Com -----------------*/}
              <div className="character-com character">
                <img src={item.characterComFace} alt='Face Character Com'/>
                <div className="points-round-com points-round"
                      style={{
                        backgroundColor:
                          item.pointsRoundCom === "0"
                            ? 'blue'
                            : (item.pointsRoundCom === "+1" ||
                                item.pointsRoundCom === "+2" ||
                                item.pointsRoundCom === "+3" ||
                                item.pointsRoundCom === "+4")
                            ? 'green'
                            : item.pointsRoundCom === "-1"
                            ? 'red'
                            : 'inherit'
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
              background: historyItems.length === 0 ? 'var(--gradient-red)' : 'var(--color-history-active)',
              color: historyItems.length === 0 ? 'white' : 'var(--main-color)'
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
      <span className="visible-tab">
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
