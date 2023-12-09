import React, {useState, useEffect, useContext} from 'react';
import './ModalCount.css';

/*Sounds*/
import countSound from '../../../sounds/three-two-one.mp3';
import { ContextCombat } from '../../../ContextCombat';



export const ModalCount = () => {

  /*--------------Data imported from MyContext-------------------------*/
  const {isActivateCount, setIsActivateCount} = useContext(ContextCombat);


   /*-------------local States of this Component---------------------------------*/
   const [currentCountIndex, setCurrentCountIndex] = useState(0);

   /*-------------local Variables of this Component---------------------------------*/

  const initialCount = ["3", "2", "1", "FIGHT!", "FINISH"];


  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/

    useEffect(() => {
    if(isActivateCount){
      const animationInterval = setInterval(() => {
        setCurrentCountIndex((prevIndex) => (prevIndex + 1) % initialCount.length);
      }, 1000);

      const audio = new Audio(countSound);
      audio.play();
    
      return () => {
        clearInterval(animationInterval);
      };
    }; 
// eslint-disable-next-line 
  }, [isActivateCount]);


  useEffect(() => {
    initialCount[currentCountIndex] === "FINISH" && (setIsActivateCount(false));
  // eslint-disable-next-line 
  },[currentCountIndex]);
  
 /*---------------- component JSX structure ---------------------- */  
  return (
    <>
      {isActivateCount && (
        <div className='modal-count'>
          <span>{initialCount[currentCountIndex]}</span>
        </div>)}
    </>
  )
}
