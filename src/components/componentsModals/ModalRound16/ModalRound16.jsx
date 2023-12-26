import React, { useContext, useEffect } from 'react';
import './ModalRound16.css';
import { ContextCombat } from '../../../ContextCombat';

/*Sounds*/
import audioRound16 from '../../../sounds/opening-logo.mp3';
import { MyGeneralContext } from '../../../MyGeneralContext';



export const ModalRound16 = () => {

  const { controlRoundsState, extraRounds } = useContext(ContextCombat);
  const { volumeSounds } = useContext(MyGeneralContext);

  useEffect(() => {
    if (extraRounds && controlRoundsState === 16) {
      const animationInterval = setInterval(() => {
        const floatingDiv = document.querySelector(".modal-round16");
        floatingDiv.classList.add('center');
        
        setTimeout(() => {
          floatingDiv.classList.add('left');
        }, 1500);
      }, 2500);

      return () => {
        clearInterval(animationInterval);
       };
    }
    // eslint-disable-next-line 
   }, [ extraRounds ]);


   useEffect(() => {
    if(extraRounds && controlRoundsState === 16){
      setTimeout(() => {
        const audio = new Audio(audioRound16);
        audio.volume = volumeSounds / 100;
        audio.play();
      }, 2600);
     }
    // eslint-disable-next-line 
   },[ extraRounds ])


return (
    <div className="modal-round16">
      <span>Extra Rounds</span>
    </div>
  );
};