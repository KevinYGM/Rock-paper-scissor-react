import React from 'react';
import rulesBasic from '../../../../images/instructions-images/rules-rps.png'
import imgRound15 from '../../../../images/instructions-images/round-15.png'
import tenCom from '../../../../images/instructions-images/10com.png'
import tenPlayer from '../../../../images/instructions-images/10player.png'

//Styles inherited from ModalInstructions.css



export const InstructionsRules = () => {

  return(
    <article className='instruction-rules section-instructions'>
      <h3>How are points added?</h3>
      <p>This Game is based on the classic "Rock, Paper, Scissors" that most of us know, so the main rule will be the following:</p>
      <img src={rulesBasic} alt="rules" />
      <p>Each time a round is played, the winning player of the round will add 1 point or even 2 if he wins with the dominant element of his type.</p>
      <h3>When does the game end?</h3>
      <p>The first person to reach at least 10 points will win, or the one with the most points by reaching round 15.</p>
      <div>
        <img src={tenPlayer} alt="" />
        <img src={tenCom} alt="" />
        <img src={imgRound15} alt="" />
      </div>
    </article>
    )
  }