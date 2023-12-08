import './StartGame.css';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';

/*Images*/
import sword from '../../../images/interfaz-images/sword.png';


export const StartGame = 
({setOpenModalCharacter, 
  openModalCharacter}) => {


    /*---------- useEffects that contribute to the Design of component----------*/
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
              onClick= {!openModalCharacter ? () => setOpenModalCharacter(true) : undefined}>
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
          <span className='recordG'>Global Record</span>
          <div className="victorys record"><span className='victorys-span'>🏆</span><strong className='victorys-strong'>0</strong></div>
          <div className="loses record"><strong className='loses-strong'>0</strong><span className='loses-span'>☠️</span></div>
        </div>
      </div>
    </div>
  )
}