import React from 'react'
import './StartGame.css';

export const StartGame = () => {
  return (
    <div className="start-game">
      <div className="btn-container">
        <button className="btn-start-game">⚔️ Start Game</button>
      </div>
      <div className="record-vs-pc">
        <div className="victorys record"><span>🏆 Victorys: </span><strong>0</strong></div>
        <div className="loses record"><span>☠️ Loses: </span> <strong>0</strong></div>
      </div>
    </div>
  )
}
