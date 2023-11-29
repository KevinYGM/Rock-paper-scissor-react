import './Title.css';
import React from 'react'

/*Images*/
import allHands from '../../../images/interfaz-images/all-hands.png';

export const Title = () => {
  return (
    <div className="title">
        <h1>Rock, Paper or Scissor</h1>
        <div>
          <img src={allHands} alt="All Hands" />
        </div>
    </div>
  )
}
