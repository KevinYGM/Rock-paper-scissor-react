import React from 'react'
import './Title.css';
import allHands from '../../images/all-hands.png';

export const Title = () => {
  return (
    <div className="title">
        <h1>ROCK, PAPER OR SCISSOR</h1>
        <div>
          <img src={allHands} alt="All Hands" />
        </div>
    </div>
  )
}
