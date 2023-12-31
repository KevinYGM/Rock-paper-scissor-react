import React from 'react';
import extraRounds from '../../../../images/instructions-images/extraRounds.png'
import buttonsPlay from '../../../../images/instructions-images/buttons-play.png'

//Styles inherited from ModalInstructions.css



export const InstructionsExtraRounds = () => {

  return(
    <article className='instruction-extra-rounds section-instructions'>
      <h3>When does the game go to Extra Rounds?</h3>
      <p>If the game reaches round 15 and no one has reached 10 points, and they also arrive tied, the extra rounds will begin, where the rounds will be extended 1 by 1 until there is a winner in one of them.</p>
      <img src={extraRounds} alt="rules" />

      <h3>If my available moves in the Extra Rounds run out, do I lose?</h3>
      <p>No, the restriction of moves ends in the extra rounds, all options are available infinitely, as long as the game is in this stage.</p>
      <img src={buttonsPlay} alt="" />
      <p>It is important to note that this happens with both opponents.</p>
     
    </article>
    )
}