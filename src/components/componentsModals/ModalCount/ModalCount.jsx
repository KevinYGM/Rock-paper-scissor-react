import React, {useState, useEffect, useContext} from 'react';
import './ModalCount.css';
import { ContextCombat } from '../../../ContextCombat';

/*Sounds*/
import countSound from '../../../sounds/three-two-one.mp3';




export const ModalCount = () => {

  /*--------------Data imported from MyContext-------------------------*/
  const {isActivateCount, setIsActivateCount} = useContext(ContextCombat);


   /*-------------local States of this Component---------------------------------*/
   const [currentCountIndex, setCurrentCountIndex] = useState(0);

   /*-------------local Variables of this Component---------------------------------*/

  const initialCount = ["3", "2", "1", "FIGHT!", ""];


  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/

    useEffect(() => {
    if(isActivateCount){
      const animationInterval = setInterval(() => {
        setCurrentCountIndex((prevIndex) => (prevIndex + 1) % initialCount.length);
      }, 1100);

      const audio = new Audio(countSound);
      audio.play();
    
      return () => {
        clearInterval(animationInterval);
      };
    }; 
// eslint-disable-next-line 
  }, [isActivateCount]);


  useEffect(() => {
    initialCount[currentCountIndex] === "" && (setIsActivateCount(false));
  // eslint-disable-next-line 
  },[currentCountIndex]);
  
 /*---------------- component JSX structure ---------------------- */  
  return (
    <>
      <div className={`modal-count ${isActivateCount ? 'show' : ''}`}>
        <span>{initialCount[currentCountIndex]}</span>
      </div>
    </>
  )
}
