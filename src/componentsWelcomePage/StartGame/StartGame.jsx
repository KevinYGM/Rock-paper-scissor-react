import React from 'react'
import './StartGame.css';
import {Link} from 'react-router-dom';
import sword from '../../images/sword.png'

export const StartGame = () => {
  return (
    <div className="start-game">
      
      <Link className="link-btn-start-game" to='/combat'>
        <button className="btn-start-game">
          <div className="sword-container">
            <img src={sword} alt="sword" className="sword sword1" />
            <img src={sword} alt="sword 2" className="sword sword2"/>
          </div>
          <span>Start Game</span>
        </button>
      </Link>
      
      
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
