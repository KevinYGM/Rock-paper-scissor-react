import React, { useState } from 'react';
import './BattleHistory.css';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";

import iconVictory from '../../../images/interfaz-images/icon-victory.png';
import iconLose from '../../../images/interfaz-images/icon-lose.png';
import iconTie from '../../../images/interfaz-images/icon-tie.png';



export const BattleHistory = 
({  characters, 
    characterPlayer,
    characterCom 
  }) => {

  const [visible, setVisible] = useState(true); //state to control the effect of moving from the section

  const toggleDiv = () => {
    setVisible(!visible);
  }

  return (
     <div className={`battle-history ${visible ? 'visible' : ''}`}>
      
      <div className="history_content">
        <div className='history_container-items'>
          
{/*----------------------- Item 1 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconVictory } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✋🏼</span>
              </div>

              <div className="rounds">
                <span>Round 7</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconLose } alt="" />
            </div>
          </div>


          {/*----------------------- Item 2 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconVictory } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✋🏼</span>
              </div>

              <div className="rounds">
                <span>Round 6</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconLose } alt="" />
            </div>
          </div>



          {/*----------------------- Item 3 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconTie } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✌🏼</span>
              </div>

              <div className="rounds">
                <span>Round 5</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconTie } alt="" />
            </div>
          </div>


          {/*----------------------- Item 4 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconLose } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✋🏼</span>
              </div>

              <div className="play-com play">
                <span>✌🏼</span>
              </div>

              <div className="rounds">
                <span>Round 4</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconVictory } alt="" />
            </div>
          </div>


          {/*----------------------- Item 5 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconVictory } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✋🏼</span>
              </div>

              <div className="rounds">
                <span>Round 3</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconLose } alt="" />
            </div>
          </div>


          {/*----------------------- Item 6 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconVictory } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✋🏼</span>
              </div>

              <div className="rounds">
                <span>Round 2</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconLose } alt="" />
            </div>
          </div>


          {/*----------------------- Item 7 ------------------------------------------------------*/}
          <div className="history_item">

            {/*---------------- Section: Result Player --------------------*/}
            <div className="result-player result">
              <img src={ iconVictory } alt="" />
            </div>

            {/*---------------- Section: Character Player -----------------*/}
            <div className="character-player character">
              <img src={characters[characterPlayer].facePhoto} alt="" />
            </div>

            {/*------- Section: Container-Center (Play and Rounds) ---------*/}
            <div className="container-center">
              <div className="play-player play">
                <span>✌🏼</span>
              </div>

              <div className="play-com play">
                <span>✋🏼</span>
              </div>

              <div className="rounds">
                <span>Round 1</span>
              </div>
            </div>

            {/*---------------- Section: Character Com -----------------*/}
            <div className="character-com character">
              <img src={characterCom.facePhoto} alt="" />
            </div>

            {/*---------------- Section: Result Com -----------------*/}
            <div className="result-com result">
              <img src={ iconLose } alt="" />
            </div>
          </div>

          </div>
      </div>

      
  {/*------------------------------------------ Section: History Tab --------------------------*/}    
      <div className="history_tab" onClick={toggleDiv}>
        <div>
          <span>H</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>Y</span>
        </div>
      <span className="visible-tab">{visible ? <RiArrowRightDoubleFill /> : <RiArrowLeftDoubleFill /> }</span>
      <div>
          <span>G</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </div>
      </div>
    </div>
  );
}
