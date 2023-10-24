import React from 'react'
import './StartGame.css';

export const StartGame = () => {
  return (
    <div className="start-game">
      <button className="btn-start-game">⚔️ Start Game</button>
      
      <div className="record-vs-pc">
        <div className='record-statement'>
          <span className='recordG'>Global Record</span>
          <div className="victorys record"><span>🏆</span><strong>0</strong></div>
          <div className="loses record"><span>☠️</span><strong>0</strong></div>
        </div>
      </div>
    </div>
  )
}
