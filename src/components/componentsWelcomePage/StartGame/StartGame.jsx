/*Generals Imports*/
import './StartGame.css';
import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Images*/
import sword from '../../../images/interfaz-images/sword.png';

/*Sounds*/
import swordsSound from '../../../sounds/swords.mp3';



export const StartGame = ({ openModalCharacter, setOpenModalCharacter }) => {

  /*--------------Data imported from useContext-------------------------*/
  const { recordVictory, recordLose, userIsActive, setUserIsActive, volumeSounds } = useContext(MyGeneralContext);

/*Functions that contribuye to the logic of this Component */


  const openConfirmCharacter = () => {
    const audioSwordsSound = new Audio(swordsSound);
    audioSwordsSound.currentTime = 0;
    audioSwordsSound.volume = volumeSounds / 100;
    audioSwordsSound.play();
    console.log("el valor actual del volumen es:" + audioSwordsSound.volume);

    if(!userIsActive){
      setUserIsActive(true);
    }
    
    if (!openModalCharacter) {
      setOpenModalCharacter(true);
    }
  }

  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/
  useEffect(()=> {
    //function for mousemove animation in character images.
    const records = document.querySelectorAll('.record-statement');
    
      records.forEach((record) => {
        record.addEventListener('mousemove', e => {
          let rect = e.target.getBoundingClientRect();
          let x = e.clientX * 3 - rect.left;
          record.style.setProperty('--x', x + 'deg');
        });
      });
    }, []);



    /*---------------- component JSX structure ---------------------- */ 
  return (
    <div className="start-game">
      
  {/*------------------Start Game Button----------------------*/}
      <Link   className="link-btn-start-game"
              onClick= {openConfirmCharacter}>
        <button className="btn-start-game">
          <div className="sword-container">
            <img src={sword} alt="sword" className="sword sword1" />
            <img src={sword} alt="sword 2" className="sword sword2"/>
          </div>
          <span>Start Game</span>
        </button>
      </Link>
      
  {/*---------------Record Area------------------------ */}
      <div className="record-vs-pc">
        <div className='record-statement'>
          <span className='recordG'>General Record</span>
          <div className="victorys record"><span className='victorys-span'>🏆</span><strong className='victorys-strong'>{ recordVictory }</strong></div>
          <div className="loses record"><strong className='loses-strong'>{ recordLose }</strong><span className='loses-span'>☠️</span></div>
        </div>
      </div>
    </div>
  )
}
