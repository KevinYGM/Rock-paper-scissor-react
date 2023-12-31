import React, {useState, useEffect, useContext} from 'react';
import './ModalCount.css';
import { ContextCombat } from '../../../ContextCombat';
import { MyGeneralContext } from '../../../MyGeneralContext';

/*Sounds*/
import countSound from '../../../sounds/three-two-one.mp3';





export const ModalCount = () => {

  /*--------------Data imported from MyContext-------------------------*/

  const { volumeSounds } = useContext(MyGeneralContext);
  const { isActivateCount, setIsActivateCount } = useContext(ContextCombat);


   /*-------------local States of this Component---------------------------------*/
   const [currentCountIndex, setCurrentCountIndex] = useState(0);

   /*-------------local Variables of this Component---------------------------------*/

  const initialCount = ["3", "2", "1", "FIGHT!", ""];


  /*---------- useEffects that contribute to the Design and Effects of this Component----------*/

    useEffect(() => {
    if(isActivateCount){
      const animationInterval = setInterval(() => {
        setCurrentCountIndex((prevIndex) => (prevIndex + 1));
      }, 1100);

      const audioCount = new Audio(countSound);
      audioCount.volume = volumeSounds / 100;
      audioCount.play();
    
      return () => {
        clearInterval(animationInterval);
      };
    }; 
// eslint-disable-next-line 
  }, [isActivateCount]);


  useEffect(() => {
    if (initialCount[currentCountIndex] === "") {
      setIsActivateCount(false);
      // setCurrentCountIndex(0);
    }

  // eslint-disable-next-line 
  },[currentCountIndex]);

  useEffect(() => {
    if(!isActivateCount){
      setTimeout(() => {
        setCurrentCountIndex(0);
      },5000)
    }
  },[isActivateCount])
  
 /*---------------- component JSX structure ---------------------- */  
  return (
      <div className={`modal-count ${isActivateCount ? 'show' : ''}`}>
        <span>{initialCount[currentCountIndex]}</span>
      </div>
  )
}
