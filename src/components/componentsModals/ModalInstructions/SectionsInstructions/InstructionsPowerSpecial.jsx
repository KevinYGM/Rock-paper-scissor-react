import React from 'react';
import imgPowerSpecial from '../../../../images/instructions-images/power-special.png'

//Styles inherited from ModalInstructions.css



export const InstructionsPowerSpecial = () => {

  return(
    <article className='instruction-power-special section-instructions'>
      <h3>What does the Special Power consist of?</h3>
      <p>It is a special play, which is enabled periodically for each opponent, which we can see thanks to the "Special Power Bar" that is next to each character. Once this bar is full, the "Special Button" will be enabled. Each player can choose when to use it.</p>
      <img src={imgPowerSpecial} alt="" />

      <h3>What does the Special Power offer?</h3>
      <p>It allows you to make a random play, which is not affected by the Restriction of Available Plays existing in the game, giving both characters the possibility of the following:</p>
      <div className="table">
        <div className="line1">
          <span>
            If you win with the character's own element, you will win:
          </span>
          <span>+4</span>
        </div>
        <div className="line2">
          <span>
            If you Win with a different item, you will win:
          </span>
          <span>+3</span>
        </div>
        <div className="line3">
          <span>
           If you lose, and you already had points previously obtained, you will lose:
          </span>
          <span>-1</span>
        </div>
      </div>
     </article>
    )
}